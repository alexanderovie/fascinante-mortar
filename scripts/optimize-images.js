#!/usr/bin/env node

/**
 * Optimize PNG images with sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const largeImages = [
  'public/assets/img/home1/contact-form-dark-bg.png',
  'public/assets/img/home3/home3-testimonial-section-bg.png',
  'public/assets/img/home3/emoji2.gif',
];

async function optimizeImage(inputPath) {
  try {
    const originalSize = fs.statSync(inputPath).size;
    const ext = path.extname(inputPath);

    if (ext === '.gif') {
      console.log(`⚠️  Skipping GIF: ${inputPath} (use CSS animation instead)`);
      return;
    }

    console.log(`📸 Optimizing: ${inputPath} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Convert PNG to WebP with 80% quality
    const outputPath = inputPath.replace(ext, '.webp');
    await image
      .webp({ quality: 80 })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ Saved: ${outputPath} (${savings}% smaller, ${(newSize / 1024 / 1024).toFixed(2)} MB)`);

  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

(async () => {
  console.log('\n🖼️  IMAGE OPTIMIZATION:\n');
  for (const img of largeImages) {
    if (fs.existsSync(img)) {
      await optimizeImage(img);
    } else {
      console.log(`⚠️  Not found: ${img}`);
    }
  }
  console.log('\n✅ Done!\n');
})();
