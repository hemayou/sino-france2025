const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_IMAGES = path.join(__dirname, '../public/images');

// Statistics
let stats = { processed: 0, skipped: 0, saved: 0, errors: 0 };

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stat = fs.statSync(filePath);
  const originalSize = stat.size;
  
  // Skip small files
  if (originalSize < 150 * 1024) {
    stats.skipped++;
    return;
  }
  
  const tempPath = filePath + '.tmp';
  
  try {
    let pipeline = sharp(filePath, { 
      animated: ext === '.gif',
      limitInputPixels: false 
    });
    
    // Get metadata
    const metadata = await pipeline.metadata();
    
    // Resize if too large (max 1600px width or height)
    if (metadata.width > 1600 || metadata.height > 1600) {
      pipeline = pipeline.resize(1600, 1600, { fit: 'inside', withoutEnlargement: true });
    }
    
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, progressive: true, mozjpeg: true });
    } else if (ext === '.png') {
      // For large PNGs, try to compress; if still large, consider converting to webp
      pipeline = pipeline.png({ quality: 85, compressionLevel: 9 });
    } else if (ext === '.gif') {
      // Sharp can't output GIF, skip for now
      stats.skipped++;
      return;
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 80 });
    } else {
      stats.skipped++;
      return;
    }
    
    await pipeline.toFile(tempPath);
    
    const newSize = fs.statSync(tempPath).size;
    const saved = originalSize - newSize;
    
    // Only replace if we actually saved space and quality is reasonable
    if (saved > 0) {
      fs.renameSync(tempPath, filePath);
      stats.processed++;
      stats.saved += saved;
      console.log(`✓ ${path.relative(PUBLIC_IMAGES, filePath)}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB`);
    } else {
      fs.unlinkSync(tempPath);
      stats.skipped++;
    }
  } catch (err) {
    stats.errors++;
    console.error(`✗ ${path.relative(PUBLIC_IMAGES, filePath)}: ${err.message}`);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else {
      await processFile(fullPath);
    }
  }
}

async function main() {
  console.log('Starting image compression...\n');
  await walkDir(PUBLIC_IMAGES);
  
  console.log(`\n=== Done ===`);
  console.log(`Processed: ${stats.processed}`);
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(`Space saved: ${(stats.saved/1024/1024).toFixed(2)} MB`);
}

main().catch(console.error);
