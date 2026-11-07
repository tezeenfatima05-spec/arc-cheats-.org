import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  Aimbot: 'stepCrosshair',
  'Player visuals': 'featureEsp',
  'ARC & world': 'featureRadar',
  Extraction: 'featureAimbot',
  'Misc & quality of life': 'featureUtilitySuite',
  'Hardware note': 'compareCloudBackup',
  'Operator delivery': 'comparePriorityPatch',
  Readability: 'compareZoomHack',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

/** How-to / product hero step row */
export const acquisitionStepIcons = setupStepIcons;

/** Product detail “Experience” column (supports four acquisition steps). */
export const productAcquisitionStepIcons: IconName[] = [
  'acqPackage',
  'acqSettings',
  'acqCheck',
  'acqZap',
];

/** Requirements row — map internal `req*` keys to the icon shown in the well. */
export function requirementDisplayIcon(icon: IconName): IconName {
  return icon;
}

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'ESP Active' },
  { icon: 'radarOnline', label: 'Loot filters' },
  { icon: 'seasonBuild', label: 'Steam build' },
  { icon: 'undetected', label: 'Patch aware' },
  { icon: 'softAim', label: 'Aim tuning' },
  { icon: 'noRecoil', label: 'Combat mode' },
  { icon: 'streamProof', label: 'ARC markers' },
  { icon: 'lootEsp', label: 'Extraction cues' },
  { icon: 'skeletonEsp', label: 'Skeleton ESP' },
  { icon: 'uavRadar', label: 'Distance caps' },
  { icon: 'mapHack', label: 'World ESP' },
  { icon: 'support247', label: '24/7 support' },
  { icon: 'instantDelivery', label: 'Portal delivery' },
  { icon: 'rankedSafe', label: 'Readability first' },
  { icon: 'triggerBot', label: 'Filter stacks' },
  { icon: 'boneSelect', label: 'Bone select' },
  { icon: 'liveStatus', label: 'Build notes' },
  { icon: 'autoUpdates', label: 'Auto updates' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

/** Matches `t.compatibility.items` order on the homepage. */
export const compatibilityIcons: IconName[] = [
  'reqWindows',
  'reqSteam',
  'reqSettings',
  'reqWifi',
  'compareCloudBackup',
  'support247',
  'reqCpu',
  'whyShield',
];

export const cheatTierIcons: Record<string, IconName> = {
  'ARC Raiders': 'tierPro',
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
};
