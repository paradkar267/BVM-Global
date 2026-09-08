const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/yashp/.gemini/antigravity-ide/brain/3df6fbed-27ec-48c8-9a90-e90cc156cfb6';
const destDir = path.join(__dirname, 'public/assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'hero_transport_logistics_1788862452446.jpg', dest: 'hero_transport_logistics.jpg' },
  { src: 'spices_category_1788862472879.jpg', dest: 'spices_category.jpg' },
  { src: 'cereals_pulses_category_1788862519995.jpg', dest: 'cereals_pulses_category.jpg' }
];

files.forEach(f => {
  const s = path.join(srcDir, f.src);
  const d = path.join(destDir, f.dest);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log(`Copied ${f.src} -> ${f.dest}`);
  } else {
    console.log(`File not found: ${s}`);
  }
});
