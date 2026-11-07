import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'scripts', 'assets', 'arc-raiders-logo-source.png');
const publicDir = path.join(root, 'public');

const BLACK_THRESHOLD = 40;

async function stripBlackBackground(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: { width, height, channels } }).trim().png();
}

async function squareIcon(pipeline, size) {
  return pipeline
    .clone()
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 });
}

async function main() {
  if (!fs.existsSync(source)) {
    console.error('Missing source:', source);
    process.exit(1);
  }

  const transparent = await stripBlackBackground(source);

  for (const size of [16, 32, 180]) {
    const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
    await (await squareIcon(transparent, size)).toFile(path.join(publicDir, name));
    console.log('Wrote', name);
  }

  const png32 = await squareIcon(transparent, 32);
  const png32Buf = await png32.toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), png32Buf);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="ARC Raiders">
  <image href="/favicon-32.png" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg.trim() + '\n');
  console.log('Wrote favicon.svg + favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
