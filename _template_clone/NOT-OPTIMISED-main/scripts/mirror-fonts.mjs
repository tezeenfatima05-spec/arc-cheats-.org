/**
 * Self-host Rajdhani + Manrope (matches Google Fonts stack — no third-party on load).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'public', 'fonts');

const files = [
  {
    name: 'manrope-latin.woff2',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/manrope@5.2.5/latin-400-normal.woff2',
  },
  {
    name: 'rajdhani-latin.woff2',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/rajdhani@5.2.5/latin-600-normal.woff2',
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const target = path.join(outDir, file.name);
  if (fs.existsSync(target)) continue;
  const res = await fetch(file.url);
  if (!res.ok) throw new Error(`mirror-fonts: ${file.name} failed (${res.status})`);
  fs.writeFileSync(target, Buffer.from(await res.arrayBuffer()));
  console.log(`Wrote ${path.relative(root, target)}`);
}

console.log('Fonts mirrored for same-origin delivery.');
