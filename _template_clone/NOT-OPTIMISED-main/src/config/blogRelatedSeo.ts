/** Unique sidebar “related guide” anchors per article pair (blog posts only). */

const CURATED: Record<string, string> = {
  'arc-raiders-combat-routing-to-extract|arc-raiders-extraction-and-threat-overlays':
    'Exit marker caps companion',
  'arc-raiders-combat-routing-to-extract|arc-raiders-arc-threat-overlays':
    'ARC unit threat overlays note',
  'arc-raiders-combat-routing-to-extract|arc-raiders-setup-and-first-launch':
    'Portal-first setup reference',
  'arc-raiders-setup-and-first-launch|arc-raiders-aimbot-and-fov-settings':
    'Aim smoothing after setup',
  'arc-raiders-setup-and-first-launch|arc-raiders-player-esp-layout':
    'ESP layout after portal launch',
  'arc-raiders-extraction-and-threat-overlays|arc-raiders-combat-routing-to-extract':
    'Combat peel routing follow-up',
  'arc-raiders-extraction-and-threat-overlays|arc-raiders-arc-threat-overlays':
    'Threat markers under pressure',
  'arc-raiders-extraction-and-threat-overlays|arc-raiders-player-esp-layout':
    'Readable ESP baseline',
  'arc-raiders-arc-threat-overlays|arc-raiders-extraction-and-threat-overlays':
    'Quiet world ESP pairing',
  'arc-raiders-arc-threat-overlays|arc-raiders-combat-routing-to-extract':
    'Routing when threat spikes',
  'arc-raiders-player-esp-layout|arc-raiders-aimbot-and-fov-settings':
    'Aim cone after ESP caps',
  'arc-raiders-player-esp-layout|arc-raiders-loot-and-world-esp-filters':
    'Loot filters after player boxes',
  'arc-raiders-aimbot-and-fov-settings|arc-raiders-setup-and-first-launch':
    'Overlay enable order',
  'arc-raiders-aimbot-and-fov-settings|arc-raiders-player-esp-layout':
    'ESP clutter control',
};

export function getBlogRelatedLinkLabel(fromSlug: string, toSlug: string): string {
  const curated = CURATED[`${fromSlug}|${toSlug}`];
  if (curated) return curated;
  const toShort = toSlug.replace(/^arc-raiders-/, '').replace(/-/g, ' ');
  const fromShort = fromSlug.replace(/^arc-raiders-/, '').replace(/-/g, ' ');
  return `From ${fromShort} → ${toShort}`;
}
