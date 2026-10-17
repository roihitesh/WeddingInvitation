import { OpeningPageContent } from '../types/invitation';

/**
 * Configurable content dictionary for the Royal Wedding Invitation.
 * English is active by default; culturally nuanced Hindi is structured for future expansion.
 */
export const invitationContent: Record<'en' | 'hi', OpeningPageContent> = {
  en: {
    language: 'en',
    mantraTop: '॥ श्री गणेशाय नमः ॥',
    couple: {
      groom: 'Hitesh',
      bride: 'Shivanee',
      ampersand: '&',
    },
    lockupNames: 'Hitesh & Shivanee',
    invitationMessage:
      'With the blessings of our families, we invite you to celebrate the beginning of our forever.',
    openCtaText: 'OPEN OUR INVITATION',
    openSubtitle: 'A celebration of love, family and forever.',
    subtextAuspicious: 'A celebration of love, family, and tradition',
  },
  hi: {
    language: 'hi',
    mantraTop: '॥ ॐ श्री गणेशाय नमः ॥',
    couple: {
      groom: 'हितेश',
      bride: 'शिवानी',
      ampersand: 'संग',
    },
    lockupNames: 'हितेश एवं शिवानी',
    invitationMessage:
      'परिवार के स्नेह एवं आशीर्वाद सहित, हमारे जीवन के इस नए और पावन अध्याय के शुभारंभ में आप सादर आमंत्रित हैं।',
    openCtaText: 'मांगलिक पत्रिका खोलें',
    openSubtitle: 'प्रेम, परंपरा और नए जीवन का शुभारंभ।',
    subtextAuspicious: 'प्रेम, परंपरा और नए जीवन का शुभारंभ',
  },
};

export const defaultContent: OpeningPageContent = invitationContent.en;
