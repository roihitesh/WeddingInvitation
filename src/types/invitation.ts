/**
 * Type definitions for Hitesh & Shivanee's Royal Wedding Invitation
 */

export type DoorTheme =
  | 'peacock-sapphire'
  | 'royal-maroon'
  | 'emerald-gold'
  | 'imperial-teak';

export type SupportedLanguage = 'en' | 'hi';

export interface CoupleInfo {
  groom: string;
  bride: string;
  ampersand?: string;
}

export interface OpeningPageContent {
  language: SupportedLanguage;
  mantraTop: string;
  couple: CoupleInfo;
  lockupNames: string;
  invitationMessage: string;
  openCtaText: string;
  openSubtitle: string;
  subtextAuspicious?: string;
}

export interface OpeningPageProps {
  content?: OpeningPageContent;
  initialTheme?: DoorTheme;
  onOpenInvitation?: () => void;
}

export interface LanguageCardConfig {
  code: SupportedLanguage;
  title: string;
  tagline: string;
  label: string;
  ctaText: string;
  mantraSnippet?: string;
  scriptDescription?: string;
}

export interface LanguageSelectionConfig {
  heading: string;
  subheading: string;
  promptNote: string;
  cards: {
    en: LanguageCardConfig;
    hi: LanguageCardConfig;
  };
}

export interface LanguageSelectionPageProps {
  onSelectLanguage: (language: SupportedLanguage) => void;
  onBackToOpening?: () => void;
  config?: LanguageSelectionConfig;
}
