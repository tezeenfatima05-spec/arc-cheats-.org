/** Single-game storefront: ARC Raiders cheats only (no other game products). */

export const ARC_RAIDERS_PRODUCT_SLUG = 'arc-raiders';

export function isArcRaidersProductSlug(slug: string): boolean {
  return slug === ARC_RAIDERS_PRODUCT_SLUG;
}
