/** Homepage-only SEO anchors (not i18n). */

export const HOME_H1_SEO_SUFFIX = ' – extraction markers — Arc Cheats';

export function homeProductBuyLabel(slug: string): string {
  if (slug === 'arc-raiders') return 'Start ARC Raiders software checkout';
  if (slug === 'cloud-dma') return 'Cloud DMA hardware checkout';
  if (slug === 'ugc') return 'UGC utility tool checkout';
  return `Buy access — ${slug}`;
}

export function homeProductViewLabel(slug: string): string {
  if (slug === 'arc-raiders') return 'ARC Raiders product overview';
  if (slug === 'cloud-dma') return 'Cloud DMA product details';
  if (slug === 'ugc') return 'UGC tool product details';
  return `View product — ${slug}`;
}

export function homeBlogReadLabel(slug: string): string {
  const labels: Record<string, string> = {
    'arc-raiders-setup-and-first-launch': 'Setup and first-launch walkthrough',
    'arc-raiders-aimbot-and-fov-settings': 'Aimbot FOV tuning walkthrough',
    'arc-raiders-player-esp-layout': 'Player ESP layout walkthrough',
    'arc-raiders-extraction-and-threat-overlays': 'Extraction overlay walkthrough',
    'arc-raiders-combat-routing-to-extract': 'Combat extract routing walkthrough',
    'arc-raiders-arc-threat-overlays': 'ARC threat overlay walkthrough',
  };
  return labels[slug] ?? `Guide — ${slug.replace(/^arc-raiders-/, '').replace(/-/g, ' ')}`;
}
