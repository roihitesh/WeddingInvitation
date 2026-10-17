import { RsvpPageConfig } from '../types/invitation';

/**
 * Central configuration and bilingual localization for Page 7: RSVP & Guest Confirmation.
 *
 * Rules:
 * - Simple, mobile-friendly invitation card response form.
 * - Guest count is configurable (`maxGuests`).
 * - Events attendance toggle (`eventsAttendanceEnabled`).
 * - Natural English and culturally authentic Hindi Devanagari copy.
 */
export const defaultRsvpConfig: RsvpPageConfig = {
  heading: {
    en: 'Will You Celebrate With Us?',
    hi: 'क्या आप हमारी खुशियों में शामिल होंगे?',
  },
  message: {
    en: 'Your presence would mean the world to us. Please let us know if you can join our special day.',
    hi: 'आपकी उपस्थिति हमारे लिए बहुत खास होगी। कृपया हमें बताएँ कि आप इस शुभ अवसर पर हमारे साथ शामिल हो पाएँगे या नहीं।',
  },
  maxGuests: 6,
  eventsAttendanceEnabled: true,
  labels: {
    fullName: {
      en: 'Your Full Name',
      hi: 'आपका पूरा नाम',
    },
    fullNamePlaceholder: {
      en: 'e.g. Ramesh Sharma & Family',
      hi: 'उदा. रमेश शर्मा एवं सपरिवार',
    },
    attendanceQuestion: {
      en: 'Will you be joining us?',
      hi: 'क्या आप हमारे विवाह में शामिल होंगे?',
    },
    acceptOption: {
      en: 'Joyfully Accept',
      hi: 'हाँ, हम ज़रूर शामिल होंगे',
    },
    acceptSubtext: {
      en: 'Can’t wait to celebrate together with love',
      hi: 'शुभ विवाह में सानंद शामिल होने की उत्सुकता है',
    },
    declineOption: {
      en: 'Regretfully Decline',
      hi: 'खेद है, हम शामिल नहीं हो पाएँगे',
    },
    declineSubtext: {
      en: 'Sending our warmest blessings from afar',
      hi: 'दूर रहकर भी दिल से मंगलकामनाएं व आशीर्वाद',
    },
    guestCountLabel: {
      en: 'Number of Guests Attending',
      hi: 'शामिल होने वाले अतिथियों की संख्या',
    },
    guestCountHint: {
      en: 'Including yourself (Maximum 6 guests per response)',
      hi: 'स्वयं सहित (प्रति आमंत्रण अधिकतम ६ अतिथि)',
    },
    eventsLabel: {
      en: 'Celebrations You Plan to Attend',
      hi: 'समारोह जिनमें आप सम्मिलित होंगे',
    },
    eventsHint: {
      en: 'Select the ceremonies you will grace with your presence',
      hi: 'जिन उत्सवों में आप पधारेंगे, कृपया उनका चयन करें',
    },
    messageLabel: {
      en: 'A Message for the Couple (Optional)',
      hi: 'जोड़े के लिए एक संदेश (वैकल्पिक)',
    },
    messagePlaceholder: {
      en: 'Share an auspicious blessing, sweet memory, or note of love for Hitesh & Shivanee...',
      hi: 'हितेश एवं शिवानी के लिए अपना स्नेहिल आशीर्वाद या मंगलकामनाएं लिखें...',
    },
    submitCta: {
      en: 'Confirm My Response',
      hi: 'अपना जवाब भेजें',
    },
    submitting: {
      en: 'Confirming Your Response...',
      hi: 'आपका जवाब दर्ज हो रहा है...',
    },
    successAccepted: {
      en: 'Thank you for being part of our story. Your response has been received with love.',
      hi: 'हमारी खुशियों का हिस्सा बनने के लिए धन्यवाद। आपका जवाब हमें मिल गया है।',
    },
    successDeclined: {
      en: 'Thank you for letting us know. You will be dearly missed, and we carry your blessings in our hearts.',
      hi: 'हमें अवगत कराने के लिए धन्यवाद। आपकी कमी महसूस होगी, और आपका आशीर्वाद सदैव हमारे साथ रहेगा।',
    },
    successNote: {
      en: 'We look forward to creating lifelong memories with you.',
      hi: 'हम आपके साथ इस पावन उत्सव को यादगार बनाने की प्रतीक्षा कर रहे हैं।',
    },
    returnHome: {
      en: 'Return to Welcome Page',
      hi: 'मुख्य पृष्ठ पर वापस जाएं',
    },
    backendNotice: {
      en: 'Tip: Connected to Supabase backend table "rsvps" when environment keys are active.',
      hi: 'सूचना: एनवायरनमेंट कीज़ सक्रिय होने पर सुपरबेस डेटाबेस से जुड़ा रहता है।',
    },
  },
  validation: {
    nameRequired: {
      en: 'Please enter your full name.',
      hi: 'कृपया अपना पूरा नाम दर्ज करें।',
    },
    attendanceRequired: {
      en: 'Please let us know whether you can attend.',
      hi: 'कृपया अपनी उपस्थिति का विकल्प चुनें।',
    },
    guestCountInvalid: {
      en: 'Please select a valid number of guests (at least 1).',
      hi: 'कृपया कम से कम १ अतिथि की संख्या चुनें।',
    },
  },
};
