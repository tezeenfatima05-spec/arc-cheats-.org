/** Unique sidebar “related guide” anchors per article pair (blog posts only). */

const CURATED: Record<string, string> = {
  'arc-raiders-combat-routing-to-extract|arc-raiders-extraction-and-threat-overlays':
    'Exit marker caps companion',
  'arc-raiders-combat-routing-to-extract|arc-raiders-arc-threat-overlays':
    'Unit pressure overlays note',
  'arc-raiders-combat-routing-to-extract|arc-raiders-setup-and-first-launch':
    'Portal-first setup reference',
  'arc-raiders-combat-routing-to-extract|arc-raiders-misc-camera-and-crosshair':
    'Camera comfort misc reference',
  'arc-raiders-setup-and-first-launch|arc-raiders-aimbot-and-fov-settings':
    'Aim smoothing after setup',
  'arc-raiders-setup-and-first-launch|arc-raiders-player-esp-layout':
    'ESP layout after portal launch',
  'arc-raiders-setup-and-first-launch|arc-raiders-misc-camera-and-crosshair':
    'Crosshair tweaks after portal',
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
  'arc-raiders-arc-threat-overlays|arc-raiders-setup-and-first-launch':
    'Enable order before threat markers',
  'arc-raiders-player-esp-layout|arc-raiders-aimbot-and-fov-settings':
    'Aim cone after ESP caps',
  'arc-raiders-player-esp-layout|arc-raiders-loot-and-world-esp-filters':
    'Loot filters after player boxes',
  'arc-raiders-player-esp-layout|arc-raiders-setup-and-first-launch':
    'Portal habits before ESP stacks',
  'arc-raiders-aimbot-and-fov-settings|arc-raiders-setup-and-first-launch':
    'Overlay enable order',
  'arc-raiders-aimbot-and-fov-settings|arc-raiders-player-esp-layout':
    'ESP clutter control',
  'arc-raiders-aimbot-and-fov-settings|arc-raiders-combat-routing-to-extract':
    'Peel timing after FOV caps',
  'arc-raiders-loot-and-world-esp-filters|arc-raiders-player-esp-layout':
    'Player ESP stack before filters',
  'arc-raiders-loot-and-world-esp-filters|arc-raiders-arc-threat-overlays':
    'ARC threat spacing with loot icons',
  'arc-raiders-loot-and-world-esp-filters|arc-raiders-setup-and-first-launch':
    'Portal order before world ESP',
  'arc-raiders-loot-and-world-esp-filters|arc-raiders-extraction-and-threat-overlays':
    'Exit caps after loot filters',
  'arc-raiders-misc-camera-and-crosshair|arc-raiders-setup-and-first-launch':
    'Portal habits before misc profiles',
  'arc-raiders-misc-camera-and-crosshair|arc-raiders-combat-routing-to-extract':
    'Peel routing after crosshair tweaks',
  'arc-raiders-misc-camera-and-crosshair|arc-raiders-raid-atmosphere-and-arc-zones':
    'Zone atmosphere after misc tuning',
  'arc-raiders-arc-threat-overlays|arc-raiders-extraction-and-threat-overlays':
    'Exit marker follow-up from unit guide',
  'arc-raiders-arc-threat-overlays|arc-raiders-combat-routing-to-extract':
    'Peel routing when markers spike',
  'arc-raiders-arc-threat-overlays|arc-raiders-loot-and-world-esp-filters':
    'Loot filters after unit caps',
};

export function getBlogRelatedLinkLabel(fromSlug: string, toSlug: string): string {
  const curated = CURATED[`${fromSlug}|${toSlug}`];
  if (curated) return curated;
  const id = `${fromSlug}-${toSlug}`.replace(/^arc-raiders-/, '');
  return `Related read ${id.replace(/-/g, ' ')}`;
}
