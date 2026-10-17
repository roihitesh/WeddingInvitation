/**
 * Type definitions for Hitesh & Shivanee's Royal Wedding Invitation
 */

export type DoorTheme =
  | 'peacock-sapphire'
  | 'royal-maroon'
  | 'emerald-gold'
  | 'imperial-teak';

export interface CoupleInfo {
  groom: string;
  bride: string;
  ampersand?: string;
}

export interface OpeningPageContent {
  language: 'en' | 'hi';
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
