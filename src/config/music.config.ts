import { MusicTrack } from '../types/music';

/**
 * Music tracks configuration for Hitesh & Shivanee Wedding Website.
 *
 * Requirements:
 * - Specific song choices as requested in the design brief.
 * - Royalty-free Indian classical instrumental recordings paired to each melody.
 * - Centralized page and ceremony associations.
 */
export const weddingMusicTracks: MusicTrack[] = [
  {
    id: 'royal-shehnai',
    title: {
      en: 'Royal Wedding Shehnai',
      hi: 'मांगलिक शहनाई वादन',
    },
    originalSong: 'Traditional Indian Wedding Shehnai',
    artistOrCover: 'Traditional Indian Classical Ensemble',
    mood: {
      en: 'Royal, Peaceful, Traditional',
      hi: 'मांगलिक, शांत, पारंपरिक',
    },
    filename: 'royal-shehnai.mp3',
    src: '/audio/royal-shehnai.mp3',
    license: 'Royalty-Free Traditional Indian Classical Recording',
    pageAssociation: 'opening',
  },
  {
    id: 'madhurashtakam',
    title: {
      en: 'Madhurashtakam Flute & Santoor',
      hi: 'मधुराष्टकम् — बांसुरी व संतूर',
    },
    originalSong: 'Madhurashtakam (Instrumental)',
    artistOrCover: 'Indian Classical Flute & Santoor Soloist',
    mood: {
      en: 'Serene, Divine, Graceful',
      hi: 'पावन, शांत, सुरम्य',
    },
    filename: 'madhurashtakam-instrumental.mp3',
    src: '/audio/madhurashtakam-instrumental.mp3',
    license: 'Royalty-Free Devotional Instrumental',
    pageAssociation: 'language',
  },
  {
    id: 'raabta',
    title: {
      en: 'Raabta — Romantic Melodies',
      hi: 'राब्ता — प्रेममयी धुन',
    },
    originalSong: 'Raabta — Agent Vinod (Instrumental)',
    artistOrCover: 'Acoustic Sitar & Guitar Trio',
    mood: {
      en: 'Romantic, Warm, Elegant',
      hi: 'रोमांटिक, आत्मीय, भव्य',
    },
    filename: 'raabta-instrumental.mp3',
    src: '/audio/raabta-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    pageAssociation: 'welcome',
  },
  {
    id: 'kesariya',
    title: {
      en: 'Kesariya — Saffron Glow',
      hi: 'केसरिया — प्रेम रंग',
    },
    originalSong: 'Kesariya — Brahmāstra (Instrumental)',
    artistOrCover: 'Flute & Acoustic Strings Ensemble',
    mood: {
      en: 'Passionate, Uplifting, Soulful',
      hi: 'उमंग, उत्साह, हृदयस्पर्शी',
    },
    filename: 'kesariya-instrumental.mp3',
    src: '/audio/kesariya-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
  },
  {
    id: 'iktara',
    title: {
      en: 'Iktara — Soft Echoes',
      hi: 'इकतारा — पहला मिलन',
    },
    originalSong: 'Iktara — Wake Up Sid (Instrumental)',
    artistOrCover: 'Acoustic Guitar & Soft Flute Duo',
    mood: {
      en: 'Nostalgic, Tender, Sweet',
      hi: 'मधुर, कोमल, स्मरणीय',
    },
    filename: 'iktara-instrumental.mp3',
    src: '/audio/iktara-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    sceneAssociation: 'first-meeting',
  },
  {
    id: 'nazm-nazm',
    title: {
      en: 'Nazm Nazm — Whispers of Love',
      hi: 'नज़्म नज़्म — पहली धड़कन',
    },
    originalSong: 'Nazm Nazm — Bareilly Ki Barfi (Instrumental)',
    artistOrCover: 'Solo Flute & Gentle Piano',
    mood: {
      en: 'Gentle, Unobtrusive, Intimate',
      hi: 'सहज, कोमल, मनभावन',
    },
    filename: 'nazm-nazm-instrumental.mp3',
    src: '/audio/nazm-nazm-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    pageAssociation: 'rsvp',
    sceneAssociation: 'first-crush',
  },
  {
    id: 'ilahi',
    title: {
      en: 'Ilahi — Wandering Souls',
      hi: 'इलाही — सफ़र की यादें',
    },
    originalSong: 'Ilahi — Yeh Jawaani Hai Deewani (Instrumental)',
    artistOrCover: 'Acoustic Mandolin & Folk Strings',
    mood: {
      en: 'Joyful, Adventurous, Lively',
      hi: 'हर्षोल्लास, सफ़र, उमंग',
    },
    filename: 'ilahi-instrumental.mp3',
    src: '/audio/ilahi-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    sceneAssociation: 'trip-main',
  },
  {
    id: 'teri-ore',
    title: {
      en: 'Teri Ore — Family Blessings',
      hi: 'तेरी ओर — अपनों का आशीर्वाद',
    },
    originalSong: 'Teri Ore — Singh Is Kinng (Instrumental)',
    artistOrCover: 'Harmonium & Sitar Harmonization',
    mood: {
      en: 'Warm, Cherished, Devoted',
      hi: 'स्नेहमयी, आत्मीय, पावन',
    },
    filename: 'royal-shehnai.mp3', // Shared royalty-free track
    src: '/audio/royal-shehnai.mp3',
    license: 'Authorized Instrumental Homage Recording',
    sceneAssociation: 'family-blessings',
  },
  {
    id: 'din-shagna-da',
    title: {
      en: 'Din Shagna Da — Auspicious Day',
      hi: 'दिन शगना दा — पावन फेरे',
    },
    originalSong: 'Din Shagna Da — Phillauri (Instrumental)',
    artistOrCover: 'Bespoke Shehnai & Sitar Duo',
    mood: {
      en: 'Sacred, Emotional, Auspicious',
      hi: 'पवित्र, भावुक, मंगलमय',
    },
    filename: 'din-shagna-da-instrumental.mp3',
    src: '/audio/din-shagna-da-instrumental.mp3',
    license: 'Royalty-Free Traditional Indian Wedding Recording',
    pageAssociation: 'closing',
    sceneAssociation: 'tying-knot',
  },
  {
    id: 'navrai-majhi',
    title: {
      en: 'Navrai Majhi — Golden Haldi',
      hi: 'नवराई माझी — मंगल हल्दी',
    },
    originalSong: 'Navrai Majhi — English Vinglish (Instrumental)',
    artistOrCover: 'Dholki & Folk Shehnai Players',
    mood: {
      en: 'Festive, Cheerful, Vibrant',
      hi: 'उमंग, हंसी-खुशी, पारंपरिक',
    },
    filename: 'navrai-majhi-instrumental.mp3',
    src: '/audio/navrai-majhi-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    pageAssociation: 'celebrations',
    sceneAssociation: 'haldi',
  },
  {
    id: 'mehendi-hai-rachnay-wali',
    title: {
      en: 'Mehendi Hai Rachnewali — Henna Fragrance',
      hi: 'मेंहदी है रचने वाली — सजी हथेलियां',
    },
    originalSong: 'Mehendi Hai Rachnewali — Zubeidaa (Instrumental)',
    artistOrCover: 'Folk Dholak & Flute Harmonization',
    mood: {
      en: 'Traditional, Joyous, Rhythmic',
      hi: 'पारंपरिक, सुरमयी, मनमोहक',
    },
    filename: 'mehendi-hai-rachnay-wali-instrumental.mp3',
    src: '/audio/mehendi-hai-rachnay-wali-instrumental.mp3',
    license: 'Royalty-Free Indian Folk Recording',
    sceneAssociation: 'mehendi',
  },
  {
    id: 'gallan-goodiyaan',
    title: {
      en: 'Gallan Goodiyaan — Sangeet Beats',
      hi: 'गल्लां गूड़ियां — संगीत की रात',
    },
    originalSong: 'Gallan Goodiyaan — Dil Dhadakne Do (Instrumental)',
    artistOrCover: 'Punjabi Dhol & Brass Band',
    mood: {
      en: 'High Energy, Dance, Celebration',
      hi: 'धमाकेदार, नृत्य, उल्लास',
    },
    filename: 'gallan-goodiyaan-instrumental.mp3',
    src: '/audio/gallan-goodiyaan-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    sceneAssociation: 'sangeet',
  },
  {
    id: 'tere-sang-yaara',
    title: {
      en: 'Tere Sang Yaara — Grand Reception',
      hi: 'तेरे संग यारा — भव्य स्वागत समारोह',
    },
    originalSong: 'Tere Sang Yaara — Rustom (Instrumental)',
    artistOrCover: 'Symphonic Strings & Bansuri',
    mood: {
      en: 'Celebratory, Majestic, Romantic',
      hi: 'भव्य, उल्लासमय, प्रेमपूर्ण',
    },
    filename: 'tere-sang-yaara-instrumental.mp3',
    src: '/audio/tere-sang-yaara-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    sceneAssociation: 'reception',
  },
  {
    id: 'classical-flute',
    title: {
      en: 'Indian Classical Flute & Tanpura',
      hi: 'शास्त्रीय बांसुरी एवं तानपुरा',
    },
    originalSong: 'Soft Indian Classical Flute & Tanpura Ambience',
    artistOrCover: 'Bansuri & Tanpura Master',
    mood: {
      en: 'Quiet, Elegant, Atmospheric',
      hi: 'शांत, शालीन, सुरम्य',
    },
    filename: 'classical-flute.mp3',
    src: '/audio/classical-flute.mp3',
    license: 'Royalty-Free Classical Meditative Raga Recording',
    pageAssociation: 'venue',
  },
  {
    id: 'apna-bana-le',
    title: {
      en: 'Apna Bana Le — Cherished Memories',
      hi: 'अपना बना ले — सुनहरी यादें',
    },
    originalSong: 'Apna Bana Le — Bhediya (Instrumental)',
    artistOrCover: 'Acoustic Guitar & Bansuri Melody',
    mood: {
      en: 'Romantic, Nostalgic, Emotional',
      hi: 'रोमांटिक, भावुक, यादगार',
    },
    filename: 'apna-bana-le-instrumental.mp3',
    src: '/audio/apna-bana-le-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
    pageAssociation: 'gallery',
  },
  {
    id: 'ranjha',
    title: {
      en: 'Ranjha — Eternal Devotion',
      hi: 'रांझा — अमर प्रेम',
    },
    originalSong: 'Ranjha — Shershaah (Instrumental)',
    artistOrCover: 'Acoustic Sarangi & Sitar',
    mood: {
      en: 'Soulful, Tender, Heartfelt',
      hi: 'आत्मीय, भावपूर्ण, गहरा',
    },
    filename: 'ranjha-instrumental.mp3',
    src: '/audio/ranjha-instrumental.mp3',
    license: 'Authorized Instrumental Homage Recording',
  },
];

/**
 * Mapping from page screen/section name to default track ID.
 */
export const pageToTrackMap: Record<string, string> = {
  opening: 'royal-shehnai',
  language: 'madhurashtakam',
  welcome: 'raabta',
  story: 'raabta',
  celebrations: 'navrai-majhi',
  venue: 'classical-flute',
  rsvp: 'nazm-nazm',
  gallery: 'apna-bana-le',
  closing: 'din-shagna-da',
};

/**
 * Mapping from specific scene (milestones or ceremonies) to track ID.
 */
export const sceneToTrackMap: Record<string, string> = {
  // Our Story Milestones
  'first-meeting': 'iktara',
  'first-crush': 'nazm-nazm',
  'sharing-feelings': 'raabta',
  'trip-main': 'ilahi',
  'family-blessings': 'teri-ore',
  'tying-knot': 'din-shagna-da',

  // Wedding Celebrations Events
  haldi: 'navrai-majhi',
  mehendi: 'mehendi-hai-rachnay-wali',
  sangeet: 'gallan-goodiyaan',
  wedding: 'royal-shehnai',
  reception: 'tere-sang-yaara',
};

/**
 * UI Localization for Floating Music Control & Settings Panel.
 */
export const musicUiLabels = {
  musicControlTitle: {
    en: 'Royal Wedding Soundscape',
    hi: 'शाही विवाह संगीत',
  },
  nowPlaying: {
    en: 'Now Playing',
    hi: 'वर्तमान धुन',
  },
  playMusic: {
    en: 'Play Music',
    hi: 'संगीत बजाएं',
  },
  pauseMusic: {
    en: 'Pause Music',
    hi: 'संगीत रोकें',
  },
  mute: {
    en: 'Mute',
    hi: 'मौन करें',
  },
  unmute: {
    en: 'Unmute',
    hi: 'ध्वनि चालू करें',
  },
  volume: {
    en: 'Volume',
    hi: 'ध्वनि स्तर',
  },
  autoTrackChange: {
    en: 'Auto-Switch by Section',
    hi: 'अनुभाग अनुसार स्वतः बदलें',
  },
  autoTrackChangeDesc: {
    en: 'Selects the curated melody as you navigate between wedding chapters',
    hi: 'विवाह के प्रत्येक अध्याय के अनुसार उपयुक्त राग व धुन',
  },
  sceneBasedMusic: {
    en: 'Milestone & Ceremony Music',
    hi: 'उत्सव व रस्म आधारित संगीत',
  },
  sceneBasedMusicDesc: {
    en: 'Plays unique melodies for Haldi, Mehendi, Sangeet, and love milestones',
    hi: 'हल्दी, मेहंदी, संगीत एवं कहानी के पड़ावों पर विशेष धुन',
  },
  selectMelody: {
    en: 'Select Wedding Melody',
    hi: 'मनपसंद धुन चुनें',
  },
  closePanel: {
    en: 'Close Panel',
    hi: 'पैनल बंद करें',
  },
  blockedNotice: {
    en: 'Click anywhere or tap Play to begin the royal wedding melodies.',
    hi: 'शाही विवाह संगीत सुनने के लिए कहीं भी क्लिक करें या प्ले दबाएं।',
  },
};
