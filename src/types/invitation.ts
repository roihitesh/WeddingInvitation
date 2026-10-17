/**
 * Type definitions for Hitesh & Shivanee's Royal Wedding Invitation
 */

export interface CoupleInfo {
  groom: string;
  bride: string;
  ampersand?: string;
}

export interface OpeningPageContent {
  language: 'en' | 'hi';
  mantraTop: string;
  couple: CoupleInfo;
  invitationMessage: string;
  openCtaText: string;
  subtextAuspicious?: string;
}

export interface OpeningPageProps {
  content?: OpeningPageContent;
  onOpenInvitation?: () => void;
}
