import { DoorTheme } from '../types/invitation';

export interface DoorThemeConfig {
  id: DoorTheme;
  name: string;
  subtitle: string;
  doorGradStops: [string, string, string, string];
  recessedUpper: string;
  recessedCenter: string;
  recessedLower: string;
  recessedDepthBase: string;
  portalFrameBg: string;
  textHeadline: string;
  textMessage: string;
  ctaGradient: string;
  accentPillBg: string;
}

export const doorThemes: Record<DoorTheme, DoorThemeConfig> = {
  'peacock-sapphire': {
    id: 'peacock-sapphire',
    name: 'Peacock Sapphire & Gold',
    subtitle: 'Jodhpur Meherangarh Fort Palace',
    doorGradStops: ['#162d4a', '#102239', '#0a1626', '#050c17'],
    recessedUpper: '#091523',
    recessedCenter: '#07101c',
    recessedLower: '#07101c',
    recessedDepthBase: '#040a12',
    portalFrameBg: '#050c17',
    textHeadline: '#0c1f36',
    textMessage: '#142b4a',
    ctaGradient: 'linear-gradient(135deg, #173458 0%, #0c1c30 100%)',
    accentPillBg: 'rgba(7, 16, 28, 0.88)',
  },
  'royal-maroon': {
    id: 'royal-maroon',
    name: 'Royal Maroon & Antique Gold',
    subtitle: 'Udaipur City Palace Gateway',
    doorGradStops: ['#4a0f18', '#3b0a12', '#29040a', '#1f0207'],
    recessedUpper: '#2b0409',
    recessedCenter: '#240307',
    recessedLower: '#240307',
    recessedDepthBase: '#0a0102',
    portalFrameBg: '#1f0207',
    textHeadline: '#3b060d',
    textMessage: '#451017',
    ctaGradient: 'linear-gradient(135deg, #520f18 0%, #29040a 100%)',
    accentPillBg: 'rgba(41, 4, 10, 0.88)',
  },
  'emerald-gold': {
    id: 'emerald-gold',
    name: 'Royal Emerald & Antique Gold',
    subtitle: 'Jaipur Sheesh Mahal',
    doorGradStops: ['#123d2e', '#0d2e22', '#081f17', '#04120e'],
    recessedUpper: '#0a2219',
    recessedCenter: '#071912',
    recessedLower: '#071912',
    recessedDepthBase: '#020b08',
    portalFrameBg: '#04120e',
    textHeadline: '#0b291e',
    textMessage: '#133b2c',
    ctaGradient: 'linear-gradient(135deg, #124030 0%, #071f16 100%)',
    accentPillBg: 'rgba(6, 22, 16, 0.88)',
  },
  'imperial-teak': {
    id: 'imperial-teak',
    name: 'Imperial Teak & Temple Brass',
    subtitle: 'Royal Haveli & Chettinad Gateway',
    doorGradStops: ['#3d2315', '#2f1b10', '#22120a', '#180b06'],
    recessedUpper: '#24140c',
    recessedCenter: '#1c0f08',
    recessedLower: '#1c0f08',
    recessedDepthBase: '#0f0603',
    portalFrameBg: '#180b06',
    textHeadline: '#2e1a0f',
    textMessage: '#402416',
    ctaGradient: 'linear-gradient(135deg, #422616 0%, #1f1008 100%)',
    accentPillBg: 'rgba(30, 14, 7, 0.88)',
  },
};

export const defaultDoorTheme: DoorTheme = 'peacock-sapphire';
