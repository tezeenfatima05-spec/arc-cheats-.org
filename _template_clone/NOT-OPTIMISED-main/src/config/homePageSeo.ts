/** Homepage-only SEO anchors (not i18n). */

export const HOME_H1_SEO_SUFFIX = ' – extraction markers — Arc Cheats';

export function homeProductBuyLabel(slug: string): string {
  if (slug === 'arc-raiders') return 'Start ARC Raiders software checkout';
  if (slug === 'cloud-dma') return 'Cloud DMA hardware checkout';
  if (slug === 'ugc') return 'UGC utility tool checkout';
  return `Buy access — ${slug}`;
}

export function homeProductViewLabel(slug: string): string {
  if (slug === 'arc-raiders') return 'Elite tier feature map';
  if (slug === 'cloud-dma') return 'Hardware compatibility listing';
  if (slug === 'ugc') return 'Utility tool specifications';
  return `Catalog entry — ${slug}`;
}

export function homeBlogReadLabel(slug: string): string {
  const labels: Record<string, string> = {
    'arc-raiders-setup-and-first-launch': 'Portal setup and first launch',
    'arc-raiders-aimbot-and-fov-settings': 'Aimbot FOV and smoothing',
    'arc-raiders-player-esp-layout': 'Player ESP layout caps',
    'arc-raiders-extraction-and-threat-overlays': 'Extraction icons and combat mode',
    'arc-raiders-combat-routing-to-extract': 'Combat peel and exit routing',
    'arc-raiders-arc-threat-overlays': 'ARC unit threat markers',
  };
  return labels[slug] ?? `Article — ${slug.replace(/^arc-raiders-/, '').replace(/-/g, ' ')}`;
}
