/** Checkout destinations keyed by internal product id (visitor-facing href uses /go/... only). */
export const CHECKOUT_URLS = {
  arcRaiders: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Farc-raiders',
  cloudDma: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fcloud-dma',
  ugc: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fugc',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/arc-raiders', CHECKOUT_URLS.arcRaiders],
  ['/go/arc-raiders/', CHECKOUT_URLS.arcRaiders],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
