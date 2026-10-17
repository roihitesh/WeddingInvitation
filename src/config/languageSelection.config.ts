import { LanguageSelectionConfig } from '../types/invitation';

/**
 * Structured content for Page 3: Choose Your Invitation Language.
 * Supports distinct writing styles:
 * - English: elegant, modern, warm, and personal.
 * - Hindi: traditional, graceful, culturally natural, and emotionally meaningful.
 */
export const defaultLanguageSelectionConfig: LanguageSelectionConfig = {
  heading: 'A Celebration of Love, Family & Forever',
  subheading:
    'Every beautiful story deserves to be celebrated. Choose your invitation and join us in making our special day unforgettable.',
  promptNote: 'Please select your preferred invitation experience below',
  cards: {
    en: {
      code: 'en',
      title: 'ENGLISH',
      tagline: 'Celebrate our beginning',
      label: 'THE ENGLISH INVITATION',
      ctaText: 'Enter Invitation →',
      mantraSnippet: 'With the blessings of Almighty & our beloved elders',
      scriptDescription: 'Contemporary elegance with traditional warmth',
    },
    hi: {
      code: 'hi',
      title: 'हिंदी',
      tagline: 'हमारे शुभारंभ का उत्सव',
      label: 'हिंदी विवाह निमंत्रण',
      ctaText: 'निमंत्रण देखें →',
      mantraSnippet: '॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ॥',
      scriptDescription: 'पारंपरिक मांगलिक पत्रिका एवं स्नेहपूर्ण आमंत्रण',
    },
  },
};
