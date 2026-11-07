/**
 * Per-thread forum SEO (title ≤60 chars with brand suffix applied in seo.ts).
 */

export interface ForumSeoOverride {
  title: string;
  description: string;
  keywords?: string;
}

export const FORUM_SEO_BY_SLUG: Record<string, ForumSeoOverride> = {
  'verify-portal-build-before-queue': {
    title: 'Portal status before every ARC Raiders queue',
    description:
      'Operators debate when to read portal notes before ARC Raiders cheats sessions on Steam PC—patch weeks vs stable builds.',
    keywords: 'arc raiders portal, arc raiders cheats patch, steam pc loader',
  },
  'loot-filters-vs-visual-noise': {
    title: 'Loot rarity filters vs on-screen clutter',
    description:
      'Community tips for ARC Raiders loot ESP filters—tight rarity gates, distance caps, and route learning without HUD noise.',
    keywords: 'arc raiders loot esp, loot filters, arc raiders cheats',
  },
  'how-to-enable-features-safely': {
    title: 'Safe order to enable ARC Raiders overlays',
    description:
      'Thread on enabling player ESP, aimbot, and world layers one at a time after portal download for ARC Raiders on Steam.',
    keywords: 'arc raiders setup, arc raiders esp, arc raiders cheats enable',
  },
  'what-does-combat-mode-hide': {
    title: 'Combat mode vs full world ESP',
    description:
      'What ARC Raiders combat mode hides during fights—salvage, containers, and world markers while keeping player ESP active.',
    keywords: 'arc raiders combat mode, arc raiders esp, arc raiders cheats',
  },
  'patch-day-profile-reset': {
    title: 'Reset cheat profiles after ARC Raiders patches',
    description:
      'Patch-day habits for ARC Raiders overlay profiles—portal notes, distance caps, and saved baselines on Steam PC.',
    keywords: 'arc raiders patch, arc raiders cheats profile, steam pc',
  },
  'aim-smooth-stickiness-debate': {
    title: 'Aim smooth vs stickiness for ARC Raiders',
    description:
      'Raiders compare aimbot smooth, stickiness, and FOV tuning for ARC Raiders cheats—readable motion without obvious snaps.',
    keywords: 'arc raiders aimbot, aim smooth, arc raiders cheats fov',
  },
  'skeleton-or-box-esp': {
    title: 'Box ESP or skeleton for ARC Raiders raids',
    description:
      'Which player ESP stack stays readable in ARC Raiders—boxes, skeletons, squad tags, and distance caps on Steam.',
    keywords: 'arc raiders player esp, arc raiders wallhack, arc raiders cheats',
  },
  'extraction-icons-under-fire': {
    title: 'Extraction icons when fights stack up',
    description:
      'Peel timing with extraction markers and threat overlays—ARC Raiders exit routing under pressure with cheats on Steam PC.',
    keywords: 'arc raiders extraction, arc raiders esp, arc raiders cheats',
  },
};

export function getForumSeoOverride(slug: string): ForumSeoOverride | undefined {
  return FORUM_SEO_BY_SLUG[slug];
}
