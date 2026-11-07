/** Homepage-only SEO anchors (not i18n). */

export const HOME_H1_SEO_SUFFIX = ' – extraction markers';

export function homeProductBuyLabel(slug: string): string {
  if (slug === 'arc-raiders') return 'Checkout ARC Raiders cheats';
  if (slug === 'cloud-dma') return 'Checkout Cloud DMA hardware';
  if (slug === 'ugc') return 'Checkout UGC utility tool';
  return `Buy access — ${slug}`;
}

export function homeProductViewLabel(slug: string): string {
  if (slug === 'arc-raiders') return 'ARC Raiders product overview';
  if (slug === 'cloud-dma') return 'Cloud DMA product details';
  if (slug === 'ugc') return 'UGC tool product details';
  return `View product — ${slug}`;
}

export function homeBlogReadLabel(slug: string): string {
  if (slug === 'arc-raiders-setup-and-first-launch') return 'Read setup launch guide from home';
  return `Read featured guide — ${slug.replace(/^arc-raiders-/, '').replace(/-/g, ' ')}`;
}
