import { CelebrationsPageConfig } from '../types/invitation';

/**
 * Central configuration and bilingual localization for Page 5: Wedding Celebrations.
 *
 * Rules:
 * - Zero invented dates, timings, venues, or dress codes.
 * - Fields set to undefined / null are gracefully hidden from the UI.
 * - Events can be easily enabled, disabled, reordered, or edited here.
 */
export const defaultCelebrationsConfig: CelebrationsPageConfig = {
  heading: {
    en: 'Our Wedding Celebrations',
    hi: 'हमारे विवाह के शुभ समारोह',
  },
  intro: {
    en: 'Every celebration brings its own joy, traditions, and memories. We would love to have you with us as we begin this beautiful new chapter.',
    hi: 'हर रस्म में खुशियाँ हैं, हर परंपरा में अपनों का प्यार। हमारे जीवन के इस नए अध्याय की शुरुआत में आपकी उपस्थिति हमारे लिए अनमोल होगी।',
  },
  labels: {
    date: {
      en: 'Auspicious Date',
      hi: 'शुभ तिथि',
    },
    time: {
      en: 'Muhurat & Timing',
      hi: 'शुभ मुहूर्त एवं समय',
    },
    venue: {
      en: 'Sacred Venue',
      hi: 'स्थान',
    },
    dressCode: {
      en: 'Suggested Attire',
      hi: 'वेशभूषा',
    },
    viewMap: {
      en: 'Get Directions',
      hi: 'मार्ग निर्देश देखें',
    },
    eventDetails: {
      en: 'Ceremony Details',
      hi: 'रस्म विवरण',
    },
    days: {
      en: 'Days',
      hi: 'दिन',
    },
    hours: {
      en: 'Hours',
      hi: 'घंटे',
    },
    minutes: {
      en: 'Minutes',
      hi: 'मिनट',
    },
    seconds: {
      en: 'Seconds',
      hi: 'सेकंड',
    },
    countdownHeading: {
      en: 'Counting Down to the Sacred Muhurat',
      hi: 'शुभ विवाह के पावन मुहूर्त की प्रतीक्षा में',
    },
  },
  events: [
    {
      id: 'haldi',
      type: 'haldi',
      title: {
        en: 'Haldi — A Golden Beginning',
        hi: 'हल्दी — शुभ शुरुआत',
      },
      subtitle: {
        en: 'The auspicious turmeric ceremony blessing the bride & groom',
        hi: 'शुभता, स्नेह और मंगल कामनाओं से सजी हल्दी की रस्म',
      },
      description: {
        en: 'A joyful celebration filled with blessings, laughter, and the beautiful traditions that begin our wedding festivities.',
        hi: 'हल्दी की रस्म, अपनों का प्यार और ढेर सारी खुशियाँ। आइए, इस मंगलमय शुरुआत को मिलकर खास बनाएँ।',
      },
      // When configured, add date, time, venueName, venueAddress, dressCode, mapUrl here
      date: undefined,
      time: undefined,
      venueName: undefined,
      venueAddress: undefined,
      dressCode: {
        en: 'Shades of Marigold & Sunshine Yellow',
        hi: 'पीताम्बरी एवं सुनहरे पीले परिधान',
      },
      mapUrl: undefined,
      isEnabled: true,
    },
    {
      id: 'mehendi',
      type: 'mehendi',
      title: {
        en: 'Mehendi — Painted with Love',
        hi: 'मेहंदी — प्यार के रंग',
      },
      subtitle: {
        en: 'Intricate henna adornments, folk songs, and joyous chatter',
        hi: 'हाथों में रची मेहंदी और लोकगीतों की मधुर तान',
      },
      description: {
        en: 'An afternoon of beautiful patterns, happy conversations, and special moments shared with the people we love.',
        hi: 'मेहंदी के रंग, खुशियों की बातें और अपनों के साथ खूबसूरत पल। इस खास रस्म में आपका साथ हमारे लिए बहुत मायने रखता है।',
      },
      date: undefined,
      time: undefined,
      venueName: undefined,
      venueAddress: undefined,
      dressCode: {
        en: 'Earthy Greens, Pastels & Floral Accents',
        hi: 'हरे व बसंती रंग के पारंपरिक परिधान',
      },
      mapUrl: undefined,
      isEnabled: true,
    },
    {
      id: 'sangeet',
      type: 'sangeet',
      title: {
        en: 'Sangeet — A Night of Music and Memories',
        hi: 'संगीत — सुर, ताल और खुशियाँ',
      },
      subtitle: {
        en: 'An evening of dance performances, beats, and celebration',
        hi: 'गीत-संगीत, नृत्य की महफ़िल और अपनों की हंसी',
      },
      description: {
        en: 'A celebration of music, dance, laughter, and the people who make every moment memorable.',
        hi: 'गीतों की महफ़िल, नृत्य की धूम और अपनों की मुस्कान। आइए, इस जश्न को यादगार बनाएँ।',
      },
      date: undefined,
      time: undefined,
      venueName: undefined,
      venueAddress: undefined,
      dressCode: {
        en: 'Festive Glamour & Royal Indo-Western',
        hi: 'भव्य उत्सव परिधान',
      },
      mapUrl: undefined,
      isEnabled: true,
    },
    {
      id: 'wedding',
      type: 'wedding',
      title: {
        en: 'The Wedding Ceremony — Our Forever Begins',
        hi: 'शुभ विवाह — सात जन्मों का साथ',
      },
      subtitle: {
        en: 'Vedic mantras, holy pheras around the sacred Agni, and lifelong vows',
        hi: 'पावन वेदी, वैदिक मंत्रोच्चार और सात फेरों का पवित्र बंधन',
      },
      description: {
        en: "With our families' blessings and our hearts full of love, we invite you to witness the beginning of our life together.",
        hi: 'परिवार के आशीर्वाद और अपनों के स्नेह के साथ, हम विवाह के पवित्र बंधन में बँधने जा रहे हैं। इस शुभ अवसर पर आपकी उपस्थिति हमारे लिए सौभाग्य होगी।',
      },
      date: undefined,
      time: undefined,
      venueName: undefined,
      venueAddress: undefined,
      dressCode: {
        en: 'Royal Traditional Indian Attire',
        hi: 'पारंपरिक भारतीय शाही परिधान',
      },
      mapUrl: undefined,
      isProminent: true,
      isEnabled: true,
    },
    {
      id: 'reception',
      type: 'reception',
      title: {
        en: 'Reception — Let the Celebrations Continue',
        hi: 'स्वागत समारोह — खुशियों की शाम',
      },
      subtitle: {
        en: 'An enchanting banquet evening celebrating the newly married couple',
        hi: 'नव-दंपति के स्वागत में प्रीतिभोज एवं आशीर्वचन की शाम',
      },
      description: {
        en: 'Join us as we celebrate our new beginning with the people who mean the most to us.',
        hi: 'हमारी नई शुरुआत की खुशियाँ अपनों के साथ बाँटने के लिए आपका हार्दिक स्वागत है।',
      },
      date: undefined,
      time: undefined,
      venueName: undefined,
      venueAddress: undefined,
      dressCode: {
        en: 'Formal Evening Elegance',
        hi: 'सभ्य एवं औपचारिक शाम के परिधान',
      },
      mapUrl: undefined,
      isEnabled: true,
    },
  ],
};
