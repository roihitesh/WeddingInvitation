import { GalleryPageConfig } from '../types/invitation';

/**
 * Configuration and bilingual localization for Page 8: Our Memories (Wedding Photo Gallery).
 *
 * Designed around luxury Indian wedding stationery aesthetics:
 * - Editorial masonry layout with natural photo aspect ratios (landscape, portrait, square).
 * - Smooth category filtering: All, Our Journey, Travel Diaries, Special Moments, Celebrations.
 * - Prominent Featured Memory capability.
 * - Cultural placeholders with royal art folios for pending couple photos (no fake stock models).
 * - Immersive lightbox modal viewer with keyboard & touch navigation.
 */
export const defaultGalleryConfig: GalleryPageConfig = {
  heading: {
    en: 'Our Memories',
    hi: 'हमारी खूबसूरत यादें',
  },
  intro: {
    en: 'Every smile, every little adventure, and every moment together has become part of our story. Here are a few memories we will always treasure.',
    hi: 'हर मुस्कान, हर छोटा-सा सफ़र और साथ बिताया हर पल हमारी कहानी का हिस्सा बन गया। आइए, इन प्यारी यादों को फिर से जीते हैं।',
  },
  categories: [
    {
      id: 'all',
      label: { en: 'All Memories', hi: 'सभी यादें' },
      icon: '✨',
    },
    {
      id: 'journey',
      label: { en: 'Our Journey', hi: 'हमारा सफ़र' },
      icon: '💫',
    },
    {
      id: 'travel',
      label: { en: 'Travel Diaries', hi: 'सफ़रनामा' },
      icon: '🌿',
    },
    {
      id: 'moments',
      label: { en: 'Special Moments', hi: 'खास पल' },
      icon: '🪔',
    },
    {
      id: 'celebrations',
      label: { en: 'Celebrations', hi: 'मांगलिक खुशियाँ' },
      icon: '🌸',
    },
  ],
  featuredPhotoId: 'mem-celebrations-roka',
  photos: [
    {
      id: 'mem-celebrations-roka',
      category: 'celebrations',
      order: 1,
      isFeatured: true,
      aspectRatio: 'landscape',
      symbolicType: 'sacred-ceremony',
      alt: {
        en: 'Hitesh and Shivanee with sacred blessings during auspicious beginning',
        hi: 'हितेश एवं शिवांगी का मांगलिक आरम्भ व आशीर्वाद',
      },
      caption: {
        en: 'Our families uniting in sacred blessings and traditional sweets',
        hi: 'दो परिवारों का मधुर मिलन, पवित्र आशीर्वाद और मंगल मिठास',
      },
      story: {
        en: 'The momentous day when both our families came together under one roof to bless our union and celebrate the beginning of our forever.',
        hi: 'वह पावन दिन जब दोनों परिवारों ने एक साथ मिलकर हमारे रिश्ते को अपना स्नेहमयी आशीर्वाद दिया और खुशियों की नई शुरुआत की।',
      },
    },
    {
      id: 'mem-journey-coffee',
      category: 'journey',
      order: 2,
      aspectRatio: 'portrait',
      symbolicType: 'first-coffee',
      alt: {
        en: 'A peaceful conversation over warm coffee',
        hi: 'कॉफ़ी के साथ सुकून भरी मुलाक़ात',
      },
      caption: {
        en: 'A quiet coffee conversation that gently turned into forever',
        hi: 'कॉफ़ी की एक सहज मुलाक़ात जो धीरे-धीरे उम्रभर के साथ में बदल गई',
      },
      story: {
        en: 'What started as a simple afternoon talk quietly blossomed into hours of effortless laughter, deep understanding, and shared dreams.',
        hi: 'एक दोपहर की साधारण सी बात कब घंटों की सहज हंसी और दिल के गहरे जुड़ाव में बदल गई, हमें पता ही नहीं चला।',
      },
    },
    {
      id: 'mem-travel-lake',
      category: 'travel',
      order: 3,
      aspectRatio: 'landscape',
      symbolicType: 'palace-sunset',
      alt: {
        en: 'Golden twilight over the royal lakeside pavilions',
        hi: 'शाही झील के किनारों पर ढलते सूरज का मनोहारी दृश्य',
      },
      caption: {
        en: 'Golden hour by the serene waters of Lake Pichola',
        hi: 'पिछोला झील के शांत किनारों पर ढलते सूरज की सुनहरी आभा',
      },
      story: {
        en: 'Strolling hand in hand along ancient palace archways as the city of lakes turned to dusk in shimmering golden hues.',
        hi: 'शाम के नर्म उजाले में शाही महलों के आंगनों में एक-दूजे का हाथ थामे चलना और झील पर सुनहरी किरणों को निहारना।',
      },
    },
    {
      id: 'mem-moments-diwali',
      category: 'moments',
      order: 4,
      aspectRatio: 'square',
      symbolicType: 'festival-lights',
      alt: {
        en: 'Traditional clay diyas and festive marigold decorations',
        hi: 'मिट्टी के पारंपरिक दीपक और गेंदे के फूलों से सजी दीवाली',
      },
      caption: {
        en: 'Lighting the first diyas of our first Diwali together',
        hi: 'साथ मनाई गई पहली दीवाली पर आशाओं के दीप जलाते हुए',
      },
      story: {
        en: 'Surrounded by the comforting warmth of oil lamps, sweet aromas of cardamom mithai, and heartfelt laughter shared with loved ones.',
        hi: 'दीपकों की मनमोहक रौशनी, इलायची की खुशबू से महकती मिठाइयाँ और परिवार के साथ खिलखिलाती अनमोल खुशियाँ।',
      },
    },
    {
      id: 'mem-journey-promise',
      category: 'journey',
      order: 5,
      aspectRatio: 'portrait',
      symbolicType: 'starlit-promise',
      alt: {
        en: 'A serene starlit terrace with eternal promises',
        hi: 'तारों की छाँव में जीवनभर साथ निभाने का वादा',
      },
      caption: {
        en: 'Under a tranquil canopy of stars, a heartfelt promise was made',
        hi: 'तारों की शांत छाँव में, एक सच्चा और अटूट वादा',
      },
      story: {
        en: 'Two hearts, one lifelong commitment. In that quiet starlit silence, the world melted away, leaving only gratitude and love.',
        hi: 'तारों से सजी रात, एक निश्चल संकल्प और एक-दूसरे के लिए धड़कते दिल। उस मौन में केवल असीम कृतज्ञता और प्रेम था।',
      },
    },
    {
      id: 'mem-travel-hills',
      category: 'travel',
      order: 6,
      aspectRatio: 'landscape',
      symbolicType: 'mountain-mist',
      alt: {
        en: 'Misty pine mountain trail amidst the morning breeze',
        hi: 'पहाड़ों की ठंडी हवा और देवदार के रास्तों पर सुकून',
      },
      caption: {
        en: 'Crisp mountain air, whispering pine trees, and peaceful morning walks',
        hi: 'पहाड़ों की ताज़ी हवा, देवदार के दरख्त और सुबह की सुकून भरी सैर',
      },
      story: {
        en: 'Escaping the bustling city to breathe the pure pine-scented morning air where every mountain curve brought a fresh memory.',
        hi: 'शहर की दौड़धूप से दूर, जहाँ हर मोड़ पर कुदरत का नया रंग और हर कदम पर एक ताज़ा अहसास था।',
      },
    },
    {
      id: 'mem-moments-monsoon',
      category: 'moments',
      order: 7,
      aspectRatio: 'portrait',
      symbolicType: 'monsoon-tea',
      alt: {
        en: 'Gentle raindrops tapping on windowpanes with warm herbal tea',
        hi: 'रिमझिम बारिश की फुहारें और गरमा-गरम चाय की चुस्कियाँ',
      },
      caption: {
        en: 'Raindrops on the veranda and steaming cups of ginger masala chai',
        hi: 'बरामदे में रिमझिम फुहारें और अदरक वाली कड़क चाय का आनंद',
      },
      story: {
        en: 'Listening to the rhythm of monsoon rain touching dry earth while exchanging childhood tales and joyful dreams of the future.',
        hi: 'मिट्टी की सोंधी महक के बीच बचपन के अनसुने किस्से और आने वाले कल के हसीन सपने बुनना।',
      },
    },
    {
      id: 'mem-celebrations-rings',
      category: 'celebrations',
      order: 8,
      aspectRatio: 'square',
      symbolicType: 'ring-exchange',
      alt: {
        en: 'Sacred rings resting upon fresh jasmine and rose petals',
        hi: 'गुलाब और चमेली की पंखुड़ियों पर सजी पवित्र अंगूठियां',
      },
      caption: {
        en: 'Exchanging rings of eternal devotion and unyielding trust',
        hi: 'प्रेम और अटूट विश्वास के प्रतीक पावन छल्लों का आदान-प्रदान',
      },
      story: {
        en: 'A circle of gold with no end and no beginning — an eternal reflection of two souls becoming partners for lifetimes to come.',
        hi: 'सोने की वह पवित्र अंगूठी जो अनादि और अनंत प्रेम का प्रतीक है—दो आत्माओं का एक अटूट संगम।',
      },
    },
  ],
  closing: {
    quote: {
      en: '“Some moments become memories. Some memories become forever.”',
      hi: '“कुछ पल यादें बन जाते हैं, और कुछ यादें उम्रभर साथ रहती हैं।”',
    },
    coupleNames: 'Hitesh & Shivanee',
    returnCta: {
      en: 'Return to Welcome',
      hi: 'स्वागत पृष्ठ पर जाएँ',
    },
  },
  labels: {
    allCategories: {
      en: 'All Memories',
      hi: 'सभी यादें',
    },
    featuredBadge: {
      en: 'Featured Memory',
      hi: 'विशेष संस्मरण',
    },
    photoCount: {
      en: 'Memories',
      hi: 'यादें',
    },
    prevPhoto: {
      en: 'Previous Photo',
      hi: 'पिछली तस्वीर',
    },
    nextPhoto: {
      en: 'Next Photo',
      hi: 'अगली तस्वीर',
    },
    closeViewer: {
      en: 'Close Full-Screen View',
      hi: 'तस्वीर बंद करें',
    },
    emptyTitle: {
      en: 'No Memories in this Category',
      hi: 'इस श्रेणी में अभी कोई संस्मरण नहीं है',
    },
    emptyDesc: {
      en: 'Please select another category to view our cherished moments.',
      hi: 'कृपया अन्य श्रेणी चुनकर हमारे खूबसूरत पलों को देखें।',
    },
  },
};
