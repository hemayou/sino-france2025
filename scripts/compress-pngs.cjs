const sharp = require('sharp');
const fs = require('fs');

async function compressPng(filePath) {
  const stat = fs.statSync(filePath);
  if (stat.size < 400 * 1024) return; // Skip small files
  
  const tempPath = filePath + '.tmp';
  try {
    // Try PNG compression first
    await sharp(filePath)
      .png({ quality: 80, compressionLevel: 9, adaptiveFiltering: true })
      .toFile(tempPath);
    
    let newSize = fs.statSync(tempPath).size;
    
    // If still large, convert to JPEG
    if (newSize > stat.size * 0.7) {
      fs.unlinkSync(tempPath);
      await sharp(filePath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(tempPath);
      newSize = fs.statSync(tempPath).size;
      
      // Rename to .jpg if converted
      const jpgPath = filePath.replace(/\.png$/i, '.jpg');
      fs.renameSync(tempPath, jpgPath);
      fs.unlinkSync(filePath);
      console.log(`✓ ${filePath.split('/').pop()}: ${(stat.size/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (→JPEG)`);
    } else {
      fs.renameSync(tempPath, filePath);
      console.log(`✓ ${filePath.split('/').pop()}: ${(stat.size/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB`);
    }
  } catch (err) {
    console.error(`✗ ${filePath}: ${err.message}`);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

(async () => {
  const dirs = [
    'public/images/act1/fullreport',
    'public/images/act2/admin',
    'public/images/act2/region',
    'public/images/act2/renewal',
    'public/images/act2/housing',
    'public/images/act2/climate',
    'public/images/sino-france',
    'public/images/act3',
  ];
  
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => /\.png$/i.test(f));
    for (const f of files) {
      await compressPng(dir + '/' + f);
    }
  }
})();
