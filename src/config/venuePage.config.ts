import { VenuePageConfig } from '../types/invitation';

/**
 * Central configuration and bilingual localization for Page 6: Wedding Venue & Directions.
 *
 * Rules:
 * - Zero invented addresses, fake phone numbers, or fabricated travel times.
 * - Unconfigured fields are set to undefined / null and hidden from the UI.
 * - Automatically generates a Google Maps URL from fullAddress if googleMapsUrl is not directly provided.
 */
export const defaultVenueConfig: VenuePageConfig = {
  heading: {
    en: 'The Wedding Venue',
    hi: 'विवाह स्थल',
  },
  subtitle: {
    en: 'We look forward to welcoming you to our celebration. Here are the details to help you join us.',
    hi: 'हमारे इस शुभ अवसर पर आपका स्वागत करने की प्रतीक्षा है। समारोह स्थल तक पहुँचने के लिए आवश्यक जानकारी यहाँ देखें।',
  },
  labels: {
    getDirections: {
      en: 'Get Directions',
      hi: 'रास्ता देखें',
    },
    fullAddress: {
      en: 'Official Address',
      hi: 'पूर्ण पता',
    },
    eventDate: {
      en: 'Auspicious Date',
      hi: 'शुभ तिथि',
    },
    timings: {
      en: 'Timings & Muhurat',
      hi: 'समय एवं मुहूर्त',
    },
    contact: {
      en: 'Venue / Guest Assistance',
      hi: 'संपर्क सूत्र',
    },
    parking: {
      en: 'Parking Facilities',
      hi: 'पार्किंग सुविधा',
    },
    accessibility: {
      en: 'Accessibility & Support',
      hi: 'सुलभता एवं सहायता',
    },
    viewGallery: {
      en: 'View Venue Gallery',
      hi: 'स्थल छायाचित्र देखें',
    },
    planVisit: {
      en: 'Plan Your Visit',
      hi: 'अपनी यात्रा की योजना बनाएँ',
    },
    venueAwaiting: {
      en: 'Sacred Venue Announcement Awaits',
      hi: 'शुभ विवाह स्थल की घोषणा शीघ्र',
    },
    venueAwaitingDesc: {
      en: 'The royal wedding venue and travel directions will be updated here as soon as details are finalized by our families.',
      hi: 'परिवार द्वारा विवाह स्थल एवं मार्ग निर्देश तय होते ही संपूर्ण जानकारी यहाँ प्रकाशित की जाएगी।',
    },
  },
  venues: [
    {
      id: 'main-wedding-venue',
      isMainVenue: true,
      name: {
        en: 'Royal Heritage Palace & Gardens',
        hi: 'रॉयल हेरिटेज पैलेस एवं उद्यान',
      },
      description: {
        en: 'An enchanting heritage destination featuring traditional Rajasthani sandstone pavilions, blooming courtyards, and starlit open-air banquet lawns.',
        hi: 'पारंपरिक राजस्थानी स्थापत्य, भव्य प्रांगण और खुले आकाश तले सजे सुरम्य उद्यान से सुशोभित एक पावन विवाह स्थल।',
      },
      eventName: {
        en: 'The Main Wedding Festivities',
        hi: 'मुख्य विवाह उत्सव एवं समारोह',
      },
      // When confirmed by the couple, supply actual address, phone, and coordinates here
      fullAddress: undefined,
      cityAndPostalCode: undefined,
      eventDate: undefined,
      timing: undefined,
      contactPerson: undefined,
      contactNumber: undefined,
      parkingInfo: {
        en: 'Valet parking and dedicated guest vehicle bays will be available at the main palace entrance.',
        hi: 'मुख्य महल प्रवेश द्वार पर अतिथियों के वाहनों के लिए वैले पार्किंग की ससम्मान व्यवस्था रहेगी।',
      },
      accessibilityInfo: {
        en: 'Wheelchair-accessible ramps, step-free pathways, and ground-level seating available throughout the venue.',
        hi: 'सम्पूर्ण स्थल पर व्हीलचेयर रैंप, सुगम पथ एवं सुविधाजनक बैठने की व्यवस्था उपलब्ध रहेगी।',
      },
      googleMapsUrl: null,
      embedMapUrl: null,
      photos: [
        {
          id: 'venue-hero-photo',
          isPrimary: true,
          alt: {
            en: 'Grand Heritage Wedding Palace Lawns',
            hi: 'भव्य हेरिटेज विवाह स्थल एवं प्रांगण',
          },
          caption: {
            en: 'The royal courtyard where our wedding vows will be solemnized',
            hi: 'शाही प्रांगण जहाँ हमारे जीवन के पावन सात फेरे संपन्न होंगे',
          },
        },
      ],
    },
  ],
  travelSection: {
    heading: {
      en: 'Plan Your Visit',
      hi: 'अपनी यात्रा की योजना बनाएँ',
    },
    subtitle: {
      en: 'Helpful travel and transit information to ensure a comfortable journey for our valued guests.',
      hi: 'हमारे सम्मानीय अतिथियों की सुगम और आरामदायक यात्रा के लिए उपयोगी मार्ग निर्देश।',
    },
    options: [
      {
        id: 'travel-airport',
        type: 'airport',
        title: {
          en: 'By Air (Nearest Airport)',
          hi: 'हवाई मार्ग (निकटतम हवाई अड्डा)',
        },
        description: {
          en: 'Prepaid taxis, app-based cabs, and dedicated rental vehicles are readily available from the arrival terminal.',
          hi: 'आगमन टर्मिनल से टैक्सी एवं कैब सेवा आसानी से उपलब्ध रहती है।',
        },
        icon: '✈️',
      },
      {
        id: 'travel-railway',
        type: 'railway',
        title: {
          en: 'By Rail (Railway Junction)',
          hi: 'रेल मार्ग (रेलवे जंक्शन)',
        },
        description: {
          en: 'Well-connected to all major cities. Taxis and local transit connect directly to the venue gates.',
          hi: 'सभी प्रमुख नगरों से सीधी रेल सेवा उपलब्ध है। स्टेशन से स्थल तक स्थानीय वाहन सुलभ हैं।',
        },
        icon: '🚆',
      },
      {
        id: 'travel-parking',
        type: 'parking',
        title: {
          en: 'Private Vehicles & Valet',
          hi: 'निजी वाहन एवं वैले पार्किंग',
        },
        description: {
          en: 'Complimentary valet parking will be active throughout all ceremonies for visiting guests.',
          hi: 'समारोह के दौरान पधारने वाले अतिथियों हेतु ससम्मान वैले पार्किंग सेवा उपलब्ध रहेगी।',
        },
        icon: '🚗',
      },
    ],
  },
  closing: {
    message: {
      en: 'We cannot wait to celebrate with you.',
      hi: 'आपके साथ इन खुशियों को बाँटने की प्रतीक्षा रहेगी।',
    },
    coupleNames: 'Hitesh & Shivanee',
    returnCta: {
      en: 'Explore Wedding Celebrations',
      hi: 'मांगलिक कार्यक्रम देखें',
    },
  },
};
