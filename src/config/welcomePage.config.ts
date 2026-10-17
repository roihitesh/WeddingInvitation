import { SupportedLanguage, WelcomePageContent } from '../types/invitation';

/**
 * Structured localization content for Page 3: The Royal Wedding Welcome Page.
 * Supports distinct, culturally natural writing styles:
 * - English: Elegant, warm, contemporary royal stationery tone.
 * - Hindi: Authentic Devanagari phrasing, auspicious mangal bhavana, respectful invitation tone.
 */
export const welcomePageContent: Record<SupportedLanguage, WelcomePageContent> = {
  en: {
    nav: {
      welcome: 'Welcome',
      ourStory: 'Our Story',
      celebrations: 'Celebrations',
      venue: 'Venue',
      switchLangTooltip: 'Switch language to Hindi',
      switchLangTarget: 'हिंदी',
    },
    invitationHeading: 'Together with our families',
    invitationMessage:
      'With love in our hearts and blessings from our families, we invite you to celebrate the beginning of our forever.',
    dateSection: {
      awaitingDateTitle: 'Our special day awaits',
      awaitingDateSubtitle: 'The sacred date & celebratory events will be revealed soon.',
      countdownLabels: {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Mins',
        seconds: 'Secs',
      },
      celebrationBegun: 'The Celebration Has Begun!',
    },
    actions: {
      primary: 'Explore Our Wedding',
      secondary: 'Send Us Your Wishes',
    },
    placeholderFeedback: {
      story: 'Our Story: The journey of Hitesh & Shivanee will be revealed here soon.',
      celebrations: 'Celebrations: The complete auspicious schedule and rituals are being prepared.',
      venue: 'Venue: Location details and guest travel guide will be shared shortly.',
      wishes: 'Send Us Your Wishes: The warm wishes portal will open soon. Thank you for your love and blessings!',
    },
  },
  hi: {
    nav: {
      welcome: 'स्वागतम्',
      ourStory: 'हमारी कहानी',
      celebrations: 'मांगलिक कार्यक्रम',
      venue: 'विवाह स्थल',
      switchLangTooltip: 'भाषा बदलकर English करें',
      switchLangTarget: 'English',
    },
    invitationHeading: 'परिवार के आशीर्वाद और अपनों के स्नेह के साथ',
    invitationMessage:
      'हमारे जीवन के इस नए अध्याय की खुशियाँ बाँटने और हमारे शुभ विवाह के साक्षी बनने के लिए आपको सादर आमंत्रित करते हैं।',
    dateSection: {
      awaitingDateTitle: 'शुभ दिन की प्रतीक्षा में',
      awaitingDateSubtitle: 'शुभ मुहूर्त एवं मांगलिक कार्यक्रमों का विवरण शीघ्र ही प्रकाशित किया जाएगा।',
      countdownLabels: {
        days: 'दिन',
        hours: 'घंटे',
        minutes: 'मिनट',
        seconds: 'सेकंड',
      },
      celebrationBegun: 'मंगल उत्सव का शुभारंभ हो चुका है!',
    },
    actions: {
      primary: 'विवाह समारोह देखें',
      secondary: 'हमें अपनी शुभकामनाएँ दें',
    },
    placeholderFeedback: {
      story: 'हमारी कहानी: हितेश एवं शिवानी की सुखद यात्रा के संस्मरण शीघ्र ही यहाँ प्रकाशित होंगे।',
      celebrations: 'मांगलिक कार्यक्रम: समस्त शुभ रस्में, पूजन समय और परिधान निर्देश तैयार किए जा रहे हैं।',
      venue: 'विवाह स्थल: पावन विवाह स्थल एवं पहुँचने के निर्देश शीघ्र ही उपलब्ध होंगे।',
      wishes: 'शुभकामना संदेश: नवयुगल को स्नेहपूर्ण शुभकामनाएँ भेजने का पटल शीघ्र खुलेगा। आपके आशीर्वाद के लिए हृदय से धन्यवाद!',
    },
  },
};
