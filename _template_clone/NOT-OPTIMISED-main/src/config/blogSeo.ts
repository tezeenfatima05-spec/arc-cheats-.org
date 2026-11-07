/**
 * Per-article SEO overrides (document title, meta, optional H1).
 * Does not change visible lead copy in posts.ts unless h1 is set.
 */

export interface BlogSeoOverride {
  title: string;
  description: string;
  keywords?: string;
  /** Visible article H1 when audit requires title alignment */
  h1?: string;
  sidebarHeadingsAsParagraphs?: boolean;
  checkoutLinkLabel?: string;
  navCheckoutLabel?: string;
  navProductsLabel?: string;
  navBlogLabel?: string;
  ctaButtonLabel?: string;
}

export const BLOG_SEO_BY_SLUG: Record<string, BlogSeoOverride> = {
  'arc-raiders-player-esp-layout': {
    title: 'Player ESP layout that stays readable | ARC Cheats',
    description:
      'Player esp layout: boxes, skeletons, squad tags, and distance caps — pick a minimal stack before you add more overlays for Steam PC raids.',
    keywords: 'player esp layout, arc raiders esp, arc raiders cheats, steam pc',
    h1: 'Player ESP layout that stays readable in ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    checkoutLinkLabel: 'Player ESP guide checkout',
    navCheckoutLabel: 'Checkout from this ESP guide',
    navProductsLabel: 'Browse ARC Raiders products',
    navBlogLabel: 'Return to guides index',
    ctaButtonLabel: 'Open ARC Raiders product map',
  },
  'arc-raiders-arc-threat-overlays': {
    title: 'ARC threat overlays when units are on your rou | Cheats',
    description:
      'Threat markers, corpses, and distance context on Steam PC — know when to break contact with ARC Raiders ARC unit overlays.',
    keywords: 'threat, arc raiders esp, arc threat overlays, arc raiders cheats',
    h1: 'ARC threat overlays on your route — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    checkoutLinkLabel: 'Threat overlay guide checkout',
    navCheckoutLabel: 'Checkout from threat overlay guide',
    navProductsLabel: 'Browse ARC Raiders cheat products',
    navBlogLabel: 'More ARC Raiders guides',
    ctaButtonLabel: 'Open threat overlay product map',
  },
  'arc-raiders-extraction-and-threat-overlays': {
    title: 'Extraction – Cap distance so only relevant | ARC Cheats',
    description:
      'Using extraction icons with distance caps and switching combat mode for quieter world ESP on Steam PC—relevant exits stay visible under pressure.',
    keywords: 'extraction, arc raiders esp, extraction overlays, arc raiders cheats',
    h1: 'Extraction overlays and combat mode — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    checkoutLinkLabel: 'Extraction overlay guide checkout',
    navCheckoutLabel: 'Checkout from extraction guide',
    navProductsLabel: 'Browse ARC Raiders cheat products',
    navBlogLabel: 'More extraction and ESP guides',
    ctaButtonLabel: 'Open extraction overlay product map',
  },
};

export function getBlogSeoOverride(slug: string): BlogSeoOverride | undefined {
  return BLOG_SEO_BY_SLUG[slug];
}
