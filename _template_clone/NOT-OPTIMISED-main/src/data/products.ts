import { t } from '../i18n';
import { checkoutForSlug } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with the product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  'arc-raiders': [
    'arc-raiders-setup-and-first-launch',
    'arc-raiders-aimbot-and-fov-settings',
    'arc-raiders-player-esp-layout',
    'arc-raiders-loot-and-world-esp-filters',
    'arc-raiders-extraction-and-threat-overlays',
    'arc-raiders-misc-camera-and-crosshair',
    'arc-raiders-raid-atmosphere-and-arc-zones',
    'arc-raiders-arc-threat-overlays',
    'arc-raiders-combat-routing-to-extract',
  ],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review access and status',
    desc: 'Check the product page and support notes on arccheats.org before purchase—especially after a game or client update.',
  },
  {
    num: '02',
    title: 'Complete checkout',
    desc: 'Use the secure checkout link to unlock access. Keep your order email ready for the operator portal.',
  },
  {
    num: '03',
    title: 'Download and verify',
    desc: 'Pull the current build from the portal, confirm Windows and Steam compatibility, then test in a safe session before serious play.',
  },
  {
    num: '04',
    title: 'Tune features gradually',
    desc: 'Enable aimbot and ESP groups one at a time. Start with conservative FOV and distance, then adjust after you are comfortable.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'ARC Raiders and anti-cheat systems change over time. Confirm current availability through your portal or support channel before you purchase or play. Overlay layout may need a refresh after patches.';

const sharedLimitations =
  'Third-party software can violate game terms and risk account action. You use it at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const arcSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: '64-bit Windows 10 or 11.' },
  { icon: 'reqSteam', text: 'ARC Raiders via Steam (Steam-only build).' },
  { icon: 'reqSettings', text: 'Administrator access where required for the loader and updates.' },
  { icon: 'reqWifi', text: 'Stable internet for portal access and updates.' },
  { icon: 'reqCpu', text: 'Hardware that meets ARC Raiders published requirements.' },
];

/** Remote WebP screenshots (Supabase CDN). */
const IMG = {
  setup1:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794008121990-ksd4fl-arctic-cheats-how-to-setup-arc-raiders-cheats-full-tutorial-ajh5udvmfaa-873x491-.webp',
  setup2:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794008037484-7fbixf-arctic-cheats-how-to-setup-arc-raiders-cheats-full-tutorial-ajh5udvmfaa-873x491-.webp',
  teammateEsp:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794007894051-jedo40-jiiago-this-arc-raiders-cheat-lets-you-give-teammates-your-esp-uo0gu7hqeva-873x4.webp',
  miscHud:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793620131347-c29bi0-zadeyo-arcraiders-3-misc.webp',
  misc2:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793619413119-xqbd8w-levo-arcraiders-3-misc.webp',
  showcase1:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793197687507-jc9xf6-arcraidersimage1.webp',
  environment:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/d668cf71-915f-4d4e-84bc-5ec0cbed3619/1793194358691-6dss8c-ancient-arc-s2.webp',
  arcaneArcS2:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866391955-mn4li4-arcane-arc-s2.webp',
  arcaneArcS3:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866372473-d20cm3-arcane-arc-s3.webp',
  arcaneArcS4:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866348754-97lv7p-arcane-arc-s4.webp',
} as const;

const galleryRaw = {
  gpSetup1: {
    src: IMG.setup1,
    alt: 'ARC Raiders cheat setup tutorial screen on PC',
    caption: 'Setup walkthrough',
    captionDesc: 'Portal and loader steps covered in the setup guide.',
  },
  gpTeammate: {
    src: IMG.teammateEsp,
    alt: 'ARC Raiders ESP overlay highlighting squad and world information',
    caption: 'ESP overview',
    captionDesc: 'Player and squad readouts with distance and threat context.',
  },
  gpMisc: {
    src: IMG.miscHud,
    alt: 'ARC Raiders misc options including FOV and quality-of-life settings',
    caption: 'Misc & camera',
    captionDesc: 'FOV changer, zoom, crosshair, and related toggles.',
  },
  gpShowcase: {
    src: IMG.showcase1,
    alt: 'ARC Raiders gameplay with overlay features visible',
    caption: 'In-raid readability',
    captionDesc: 'Balanced layout for combat and loot routing.',
  },
  gpWorld: {
    src: IMG.environment,
    alt: 'ARC Raiders world visuals with markers and distance cues',
    caption: 'World & ARC markers',
    captionDesc: 'ARC icons, containers, and distance caps in the world loop.',
  },
  gpSetup2: {
    src: IMG.setup2,
    alt: 'ARC Raiders cheat configuration panel during setup',
    caption: 'Configuration',
    captionDesc: 'Feature groups and filters in the operator menu.',
  },
  gpMisc2: {
    src: IMG.misc2,
    alt: 'ARC Raiders misc feature panel with brightness and UI options',
    caption: 'Display helpers',
    captionDesc: 'Full bright, flashlight tweaks, and combat mode options.',
  },
  gpArcaneS2: {
    src: IMG.arcaneArcS2,
    alt: 'ARC Raiders in-world scene with ARC threat and overlay context',
    caption: 'Raid atmosphere',
    captionDesc: 'In-raid world read with ARC-focused overlays.',
  },
  gpArcaneS3: {
    src: IMG.arcaneArcS3,
    alt: 'ARC Raiders gameplay highlighting ARC units and navigation cues',
    caption: 'ARC threats',
    captionDesc: 'Threat markers and distance context during exploration.',
  },
  gpArcaneS4: {
    src: IMG.arcaneArcS4,
    alt: 'ARC Raiders combat zone with extraction and world ESP visibility',
    caption: 'Combat & extract',
    captionDesc: 'Fight routing with world markers still readable.',
  },
};

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'arc-raiders';
}

const tierAbout: Record<string, ProductPage['about']> = {
  'arc-raiders': [
    {
      type: 'p',
      text: 'ARC Raiders on Steam rewards preparation: you move through hostile zones, track threats, and decide when to fight or rotate. This build groups aimbot, player and world ESP, loot filters, and extraction markers so you can read a raid without crowding the screen.',
    },
    { type: 'h2', text: 'ARC Raiders cheats for PC — aimbot, player ESP & wallhack' },
    {
      type: 'p',
      text: 'Start with a conservative layout: enable distance caps, skeleton or box (not both at max), and tune aimbot FOV and smooth before you lean on automation. The product page lists every option so you can match the menu to what you actually use in a run.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  'arc-raiders': [
    {
      type: 'h2',
      text: 'ARC Raiders cheat features',
    },
    {
      type: 'p',
      text: 'The suite is organized into aimbot, player visuals, ARC and world visuals, loot and containers, extraction, and misc quality-of-life (FOV, camera, crosshair, combat mode). Use filters for loot rarity and type, cap max distance per category, and toggle combat mode when you want a cleaner world readout.',
    },
    {
      type: 'h2',
      text: 'Cloud DMA and compatibility',
    },
    {
      type: 'p',
      text: 'Some setups use Cloud DMA hardware with a compatible Windows rig. Confirm the exact requirement in your portal or with support before you buy—hardware and driver expectations can change with patches.',
    },
  ],
};

const arcRaidersFullFeatures: string[] = [
  'Steam only',
  'Aimbot: enable, FOV, smooth, speed, stickiness',
  'Aimbot filters, bone selection, visible check',
  'Draw FOV, draw target line',
  'Player visuals: box, head circle, skeleton, view direction',
  'Weapon & level, distance, name, squad name',
  'Health bar, shield bar, OOF arrows, max distance',
  'World: ARC icons, ARC threat level, ARC corpses',
  'Loot with rarity & type filter',
  'Player corpses, field crate, salvage, containers',
  'Extraction points & icons, max distance',
  'Custom selection for containers, loot, ARC',
  'Misc: FOV changer, camera zoom',
  'Long-distance revive & consumable assist',
  'Flashlight brightness, full bright, flashlight color',
  'Custom crosshair, custom font size',
  'Combat mode (hide world ESP)',
];

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  'arc-raiders': {
    images: slide(
      'gpShowcase',
      'gpTeammate',
      'gpWorld',
      'gpArcaneS2',
      'gpArcaneS3',
      'gpArcaneS4',
      'gpMisc',
      'gpSetup1',
    ),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: arcSystemRequirements,
    fullFeatures: arcRaidersFullFeatures,
    overview: {
      title: 'ARC Raiders cheats for PC with layered, readable overlays',
      paragraphs: [
        'This build targets Steam players who want aim assistance plus player and world ESP: boxes, skeletons, squad names, ARC and loot markers, containers, salvage, and extraction routing. Filters and distance caps help you keep only the signal you need during a fight or loot pass.',
        'Misc options cover FOV, zoom, crosshair, flashlight tweaks, and combat mode when you want overlays tuned for aggressive combat. Check arccheats.org support notes after patches before you rely on the same profile in a new build.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('gpSetup1', 'gpSetup2', 'gpMisc'),
    goodToKnow:
      'Cloud DMA expectations can change with firmware, Windows builds, and game patches. Read the portal checklist and contact support before you commit to hardware.',
    limitations: sharedLimitations,
    systemRequirements: [
      { icon: 'reqWindows', text: 'Supported 64-bit Windows build (see portal).' },
      { icon: 'compareCloudBackup', text: 'Compatible Cloud DMA hardware as listed in the operator portal.' },
      { icon: 'reqSettings', text: 'Administrator access for drivers and loader steps where required.' },
      { icon: 'reqWifi', text: 'Stable internet for portal access, updates, and validation.' },
    ],
    fullFeatures: [
      'Hardware category for supported DMA setups',
      'Portal documentation for drivers and firmware',
      'Windows compatibility matrix',
      'Pairs with eligible ARC Raiders builds',
      'Support channel for setup questions',
    ],
    overview: {
      title: 'Cloud DMA access for supported Windows setups',
      paragraphs: [
        'Cloud DMA is a hardware-assisted path documented in the operator portal. This listing is for operators who already understand DMA requirements and want checkout tied to the Cloud DMA product on the storefront.',
        'Before you buy, confirm chipset, firmware, and Windows versions against the latest portal notes. arccheats.org does not replace that checklist—we link you to the correct checkout and summarize what the product category covers.',
      ],
    },
  },
  ugc: {
    images: slide('gpMisc', 'gpMisc2', 'gpSetup2'),
    goodToKnow:
      'UGC tool scope and license terms are defined in the portal after purchase. Keep your order email handy for activation.',
    limitations: sharedLimitations,
    systemRequirements: [
      { icon: 'reqWindows', text: '64-bit Windows 10 or 11.' },
      { icon: 'reqSettings', text: 'Administrator access where the tool installer requires it.' },
      { icon: 'reqWifi', text: 'Internet for checkout, portal login, and updates.' },
    ],
    fullFeatures: [
      'UGC-focused utility build',
      'Portal download after checkout',
      'One-time access plan available',
      'Windows workflow',
      'Discord support for access issues',
    ],
    overview: {
      title: 'UGC tool — standalone utility access',
      paragraphs: [
        'The UGC tool is a separate utility product from the main ARC Raiders cheat build. Use this page to review what is included at a high level, then complete checkout to unlock portal instructions.',
        'Pricing may differ from cheat subscriptions—see the plan selector on this page when available. For activation problems, use the support page or Discord.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(cheat.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

/** Homepage hero only — keep the carousel short; full gallery stays on the product page. */
export const heroSlides = slide(
  'gpShowcase',
  'gpTeammate',
  'gpArcaneS2',
  'gpWorld',
  'gpMisc',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'ARC Raiders cheats for PC on Steam, plus Cloud DMA hardware access and the UGC tool — overview pages and secure checkout for each product.',
  buyUrl: checkoutForSlug('arc-raiders'),
};
