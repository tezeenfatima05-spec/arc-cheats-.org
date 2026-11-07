export const CHECKOUT_URLS: Record<'arcRaiders' | 'cloudDma' | 'ugc', string>;
export const CHECKOUT_PATH_REDIRECTS: Map<string, string>;
export function resolveCheckoutPathRedirect(pathname: string): string | null;
