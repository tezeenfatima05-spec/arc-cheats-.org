/** Central site identity and asset paths — adjust these for each game conversion. */
const DEFAULT_SITE_URL = 'https://arccheats.org';

function normalizeOrigin(url: string): string {
  return url.trim().replace(/\/+$/, '');
}

/** Set `PUBLIC_SITE_URL` at build time (Cloudflare env) so canonicals match the live host. */
export const SITE_URL = normalizeOrigin(
  (import.meta.env.PUBLIC_SITE_URL as string | undefined)?.trim() || DEFAULT_SITE_URL,
);

export const SITE_DOMAIN = new URL(SITE_URL).hostname;
export const SITE_NAME = 'ARC Cheats';

/** Primary product hub and detail pages live under this path (trailing slash in routes). */
export const PRODUCT_BASE = '/products/';

export const TITLE_PREFIX = 'ARC Raiders Cheats & ESP';

/** Default Open Graph / social preview (same host as the site — audit tools reject third-party OG URLs). */
export const DEFAULT_OG_IMAGE_PATH = '/apple-touch-icon.png';

export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;

/**
 * Optional hero background video (place `hero-video.mp4` in `public/` or set a full URL).
 * When empty, the hero uses the image carousel from `heroSlides` in `data/products.ts`.
 */
export const HERO_VIDEO_SRC = '';

/** Poster / fallback image for the hero video (shown while loading and if video is unavailable). */
export const HERO_VIDEO_POSTER = '/images/hero/gp-showcase-512.webp';
