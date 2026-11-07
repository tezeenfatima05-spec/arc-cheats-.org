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
  imageAlt?: string;
  sidebarEliteLabel?: string;
  sidebarHubLabel?: string;
  toolbarBackLabel?: string;
  srOnlyAnchors?: { href: string; label: string }[];
}

export const BLOG_SEO_BY_SLUG: Record<string, BlogSeoOverride> = {
  'arc-raiders-player-esp-layout': {
    title: 'Player ESP layout that stays readable | ARC Cheats',
    description:
      'Player esp layout: boxes, skeletons, squad tags, and distance caps — pick a minimal stack before you add more overlays for Steam PC raids.',
    keywords: 'player esp layout, arc raiders esp, arc raiders cheats, steam pc',
    h1: 'Player ESP layout that stays readable in ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Guides hub link from ESP layout article',
    checkoutLinkLabel: 'Checkout at end of ESP layout guide',
    navCheckoutLabel: 'Access checkout after ESP layout tips',
    navProductsLabel: 'Player ESP tier product listing link',
    navBlogLabel: 'More layout and ESP articles',
    ctaButtonLabel: 'Feature map opened from ESP layout',
    sidebarEliteLabel: 'Elite Raiders hub in ESP sidebar',
    sidebarHubLabel: 'Whole catalog in ESP layout sidebar',
    srOnlyAnchors: [
      { href: '/support/', label: 'Loader tickets from ESP layout article' },
      { href: '/faq/', label: 'Policy answers for ESP readers' },
      { href: '/about/', label: 'Publisher notes for ESP readers' },
    ],
  },
  'arc-raiders-aimbot-and-fov-settings': {
    title: 'ARC Raiders aimbot: FOV, smooth, and filters e | Cheats',
    description:
      'What each aim slider does, when to tighten FOV, and how visible check and bones interact on Steam PC ARC Raiders aimbot guides.',
    keywords: 'fov, arc raiders aimbot, arc raiders cheats, steam pc',
    h1: 'ARC Raiders aimbot: FOV, smooth, and filters explained — cheats',
    imageAlt: 'ARC Raiders aimbot and smoothing settings reference',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Guides index from aimbot FOV article',
    checkoutLinkLabel: 'Checkout after aimbot FOV section',
    navCheckoutLabel: 'Portal access from aimbot FOV guide',
    navProductsLabel: 'Aimbot groups on product listing',
    navBlogLabel: 'Aim and ESP sibling articles',
    ctaButtonLabel: 'Aimbot feature map from FOV guide',
    sidebarEliteLabel: 'Raiders aimbot hub sidebar entry',
    sidebarHubLabel: 'Software listings sidebar on FOV guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-setup-and-first-launch/', label: 'Portal setup before FOV tuning' },
      { href: '/privacy/', label: 'Privacy policy from aimbot guide' },
      { href: '/forum/', label: 'Forum sample from aimbot guide' },
    ],
  },
  'arc-raiders-setup-and-first-launch': {
    title: 'Arc Raiders – and a safe order for enabling overlays on',
    description:
      'Arc Raiders portal access, first launch, and a safe order for enabling overlays on Steam PC before you stack aimbot or ESP groups.',
    keywords: 'arc raiders, arc raiders setup, arc raiders cheats, steam pc',
    h1: 'Arc Raiders setup: safe order for enabling overlays on PC (portal first)',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return to guides index from setup article',
    checkoutLinkLabel: 'Secure checkout after setup steps',
    navCheckoutLabel: 'Portal checkout when setup is done',
    navProductsLabel: 'Raiders software hub from setup guide',
    navBlogLabel: 'Additional overlay setup articles',
    ctaButtonLabel: 'Raiders map opened from setup guide',
    sidebarEliteLabel: 'Elite hub linked in setup sidebar',
    sidebarHubLabel: 'Full software catalog sidebar link',
    srOnlyAnchors: [
      { href: '/support/', label: 'Install help tickets for setup readers' },
      { href: '/terms/', label: 'Purchase terms linked from setup guide' },
      { href: '/products/cloud-dma/', label: 'Cloud DMA hardware mentioned in setup' },
    ],
  },
  'arc-raiders-arc-threat-overlays': {
    title: 'ARC threat overlays when units are on your rou | Cheats',
    description:
      'Threat markers, corpses, and distance context on Steam PC — know when to break contact with ARC Raiders ARC unit overlays.',
    keywords: 'threat, arc raiders esp, arc threat overlays, arc raiders cheats',
    h1: 'ARC threat overlays when units are on your route — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Guides index from ARC threat article',
    checkoutLinkLabel: 'Checkout after threat overlay section',
    navCheckoutLabel: 'Secure access from threat overlay guide',
    navProductsLabel: 'Threat marker product listing link',
    navBlogLabel: 'Threat and ESP companion articles',
    ctaButtonLabel: 'Threat overlay map from this guide',
    sidebarEliteLabel: 'Raiders hub sidebar on threat guide',
    sidebarHubLabel: 'Catalog sidebar on threat overlay guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Extraction caps paired with threat markers' },
      { href: '/forum/', label: 'Community forum sample for threat readers' },
      { href: '/privacy/', label: 'Privacy policy from threat overlay guide' },
    ],
  },
  'arc-raiders-extraction-and-threat-overlays': {
    title: 'Extraction – Cap distance so only relevant | ARC Cheats',
    description:
      'Using extraction icons with distance caps and switching combat mode for quieter world ESP on Steam PC—relevant exits stay visible under pressure.',
    keywords: 'extraction, arc raiders esp, extraction overlays, arc raiders cheats',
    h1: 'Extraction – cap distance so only relevant exits — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Guides hub from extraction overlay article',
    checkoutLinkLabel: 'Checkout after extraction overlay section',
    navCheckoutLabel: 'Portal checkout on extraction guide',
    navProductsLabel: 'Extraction overlay product browse link',
    navBlogLabel: 'Extraction and ESP sibling articles',
    ctaButtonLabel: 'Overlay map from extraction guide',
    sidebarEliteLabel: 'Raiders hub on extraction sidebar',
    sidebarHubLabel: 'Full catalog on extraction sidebar',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-combat-routing-to-extract/', label: 'Combat peel routing sibling article' },
      { href: '/products/cloud-dma/', label: 'Cloud DMA listing from extraction guide' },
      { href: '/support/', label: 'Support desk from extraction guide' },
    ],
  },
  'arc-raiders-combat-routing-to-extract': {
    title: 'Extract – balance combat overlays with exit icons on Steam',
    description:
      'Extract clean under pressure: balance combat overlays with exit icons on Steam PC so you peel without guessing the route out.',
    keywords: 'extract, arc raiders esp, extraction routing, arc raiders cheats',
    h1: 'Extract – balance combat overlays with exit icons on Steam — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Guides index return from extract article',
    checkoutLinkLabel: 'Checkout tied to extract routing guide',
    navCheckoutLabel: 'Get access after extract routing tips',
    navProductsLabel: 'Combat overlay product browse link',
    navBlogLabel: 'Sibling extract and combat articles',
    ctaButtonLabel: 'Product map from extract routing guide',
    sidebarEliteLabel: 'Raiders hub in extract routing sidebar',
    sidebarHubLabel: 'Wider catalog in extract routing sidebar',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Misc camera follow-up after extract routing' },
      { href: '/about/', label: 'Publisher about page from extract routing' },
      { href: '/faq/', label: 'Checkout FAQ from extract routing article' },
    ],
  },
};

export function getBlogSeoOverride(slug: string): BlogSeoOverride | undefined {
  return BLOG_SEO_BY_SLUG[slug];
}
