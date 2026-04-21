const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateThumbs(sourceDir, thumbDir, maxWidth = 400) {
  if (!fs.existsSync(thumbDir)) fs.mkdirSync(thumbDir, { recursive: true });
  
  const files = fs.readdirSync(sourceDir).filter(f => 
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );
  
  let processed = 0, saved = 0;
  
  for (const file of files) {
    const srcPath = path.join(sourceDir, file);
    const dstPath = path.join(thumbDir, file.replace(/\.png$/i, '.jpg'));
    
    // Skip if thumb exists and is newer
    if (fs.existsSync(dstPath)) {
      const srcStat = fs.statSync(srcPath);
      const dstStat = fs.statSync(dstPath);
      if (dstStat.mtime >= srcStat.mtime) continue;
    }
    
    try {
      const pipeline = sharp(srcPath).resize(maxWidth, null, { 
        fit: 'inside', 
        withoutEnlargement: true 
      }).jpeg({ quality: 70, progressive: true });
      
      await pipeline.toFile(dstPath);
      
      const origSize = fs.statSync(srcPath).size;
      const thumbSize = fs.statSync(dstPath).size;
      saved += (origSize - thumbSize);
      processed++;
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }
  
  console.log(`Thumbs: ${processed} processed, ${(saved/1024/1024).toFixed(1)}MB saved`);
}

(async () => {
  const base = path.join(__dirname, '../public/images');
  await generateThumbs(
    path.join(base, 'act1/fieldwork'),
    path.join(base, 'act1/fieldwork/thumbs'),
    400
  );
})();
