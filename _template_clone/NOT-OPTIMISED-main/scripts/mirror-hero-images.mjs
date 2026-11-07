/**
 * Pulls hero carousel sources to /public/images/hero/*.webp so LCP stays on-site.
 * Run before `astro build` (see package.json).
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outDir = path.join(root, 'public', 'images', 'hero');
const widths = [512, 640, 960];

const sources = [
  {
    file: 'gp-showcase',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793197687507-jc9xf6-arcraidersimage1.webp',
  },
  {
    file: 'gp-teammate',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794007894051-jedo40-jiiago-this-arc-raiders-cheat-lets-you-give-teammates-your-esp-uo0gu7hqeva-873x4.webp',
  },
  {
    file: 'gp-arcane-s2',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866391955-mn4li4-arcane-arc-s2.webp',
  },
  {
    file: 'gp-world',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/d668cf71-915f-4d4e-84bc-5ec0cbed3619/1793194358691-6dss8c-ancient-arc-s2.webp',
  },
  {
    file: 'gp-misc',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620131347-c29bi0-zadeyo-arcraiders-3-misc.webp',
  },
];

async function mirrorOne(name, url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`mirror-hero-images: ${name} fetch failed (${res.status})`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  for (const width of widths) {
    const target = path.join(outDir, `${name}-${width}.webp`);
    if (fs.existsSync(target)) continue;
    await sharp(buffer)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(target);
    console.log(`Wrote ${path.relative(root, target)}`);
  }
}

fs.mkdirSync(outDir, { recursive: true });

for (const item of sources) {
  await mirrorOne(item.file, item.url);
}

console.log('Hero images mirrored for responsive LCP.');
