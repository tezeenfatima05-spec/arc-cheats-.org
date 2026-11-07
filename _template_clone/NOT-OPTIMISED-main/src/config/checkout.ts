import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  arcRaiders: 'arc-raiders',
  cloudDma: 'cloud-dma',
  ugc: 'ugc',
};

const CHECKOUT_BY_SLUG: Record<string, string> = {
  'arc-raiders': CHECKOUT.arcRaiders,
  'cloud-dma': CHECKOUT.cloudDma,
  ugc: CHECKOUT.ugc,
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover). */
export function checkoutPath(product: CheckoutProduct = 'arcRaiders'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout redirect. */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('arcRaiders');

/** Product “Buy now” / catalog checkout href (ARC Raiders). */
export const ARC_RAIDERS_CHECKOUT_URL = CHECKOUT.arcRaiders;

/** Map internal product slugs to checkout URL. */
export function checkoutForSlug(slug: string): string {
  return CHECKOUT_BY_SLUG[slug] ?? CHECKOUT.arcRaiders;
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('zadeyo.com')) {
    if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
      return checkoutPath('cloudDma');
    }
    if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
      return checkoutPath('ugc');
    }
    return checkoutPath('arcRaiders');
  }

  return href;
}
