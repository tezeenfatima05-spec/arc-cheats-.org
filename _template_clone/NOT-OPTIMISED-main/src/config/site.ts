/** Central site identity and asset paths — adjust these for each game conversion. */
export const SITE_DOMAIN = 'arccheats.org';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_NAME = 'ARC Cheats';

/** Primary product hub and detail pages live under this path (trailing slash in routes). */
export const PRODUCT_BASE = '/products/';

export const TITLE_PREFIX = 'ARC Raiders Cheats & ESP';

/** Default Open Graph / social preview (HTTPS URL). */
export const DEFAULT_OG_IMAGE_PATH =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793197687507-jc9xf6-arcraidersimage1.webp';

export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;

/**
 * Optional hero background video (place `hero-video.mp4` in `public/` or set a full URL).
 * When empty, the hero uses the image carousel from `heroSlides` in `data/products.ts`.
 */
export const HERO_VIDEO_SRC = '';

/** Poster / fallback image for the hero video (shown while loading and if video is unavailable). */
export const HERO_VIDEO_POSTER =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793197687507-jc9xf6-arcraidersimage1.webp';
