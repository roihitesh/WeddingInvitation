/**
 * Type definitions for Hitesh & Shivanee's Royal Wedding Invitation
 */

export type DoorTheme =
  | 'peacock-sapphire'
  | 'royal-maroon'
  | 'emerald-gold'
  | 'imperial-teak';

export type SupportedLanguage = 'en' | 'hi';

export interface CoupleInfo {
  groom: string;
  bride: string;
  ampersand?: string;
}

export interface OpeningPageContent {
  language: SupportedLanguage;
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

export interface LanguageCardConfig {
  code: SupportedLanguage;
  title: string;
  tagline: string;
  label: string;
  ctaText: string;
  mantraSnippet?: string;
  scriptDescription?: string;
}

export interface LanguageSelectionConfig {
  heading: string;
  subheading: string;
  promptNote: string;
  cards: {
    en: LanguageCardConfig;
    hi: LanguageCardConfig;
  };
}

export interface LanguageSelectionPageProps {
  onSelectLanguage: (language: SupportedLanguage) => void;
  onBackToOpening?: () => void;
  config?: LanguageSelectionConfig;
}

export type NavSection = 'welcome' | 'story' | 'celebrations' | 'venue' | 'rsvp' | 'gallery';

export interface WeddingDetails {
  groom: string;
  bride: string;
  ampersand?: string;
  dateISO: string | null;
  timeZone: string;
  venueName?: string | null;
  city?: string | null;
}

export interface WelcomePageContent {
  nav: {
    welcome: string;
    ourStory: string;
    celebrations: string;
    venue: string;
    switchLangTooltip: string;
    switchLangTarget: string;
  };
  invitationHeading: string;
  invitationMessage: string;
  dateSection: {
    awaitingDateTitle: string;
    awaitingDateSubtitle: string;
    countdownLabels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    celebrationBegun: string;
  };
  actions: {
    primary: string;
    secondary: string;
  };
  placeholderFeedback: {
    story: string;
    celebrations: string;
    venue: string;
    wishes: string;
  };
}

export interface WelcomePageProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onBackToLanguageSelection?: () => void;
  weddingDetails?: WeddingDetails;
  onExploreWedding?: () => void;
  onSendWishes?: () => void;
  onNavigateSection?: (section: NavSection) => void;
  hideNav?: boolean;
  hideFooter?: boolean;
  hideClosing?: boolean;
}

export type TimelineMarkerType =
  | 'floral'
  | 'heart'
  | 'intertwined'
  | 'travel'
  | 'lotus'
  | 'wedding-knot';

export interface StoryPhotoItem {
  id?: string;
  src?: string;
  alt: { en: string; hi: string };
  caption?: { en?: string; hi?: string };
  symbolicType: 'first-meeting' | 'first-crush' | 'sharing-feelings' | 'trip-main' | 'trip-snapshot-1' | 'trip-snapshot-2' | 'family-blessings' | 'tying-knot';
}

export interface StoryMilestoneItem {
  id: string;
  order: number;
  markerType: TimelineMarkerType;
  heading: { en: string; hi: string };
  story: { en: string; hi: string };
  date?: { en?: string; hi?: string };
  location?: { en?: string; hi?: string };
  primaryPhoto: StoryPhotoItem;
  additionalPhotos?: StoryPhotoItem[];
  isVisible?: boolean;
}

export interface StoryPageConfig {
  title: { en: string; hi: string };
  intro: { en: string; hi: string };
  milestones: StoryMilestoneItem[];
  closing: {
    quote: { en: string; hi: string };
    coupleNames: string;
    ctaText: { en: string; hi: string };
    celebrationFeedback: { en: string; hi: string };
  };
}

export interface OurStoryPageProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateSection: (section: NavSection) => void;
  onBackToWelcome?: () => void;
  onBackToLanguageSelection?: () => void;
  onExploreCelebrations?: () => void;
  hideNav?: boolean;
  hideFooter?: boolean;
}

export type CelebrationEventType =
  | 'haldi'
  | 'mehendi'
  | 'sangeet'
  | 'wedding'
  | 'reception';

export interface CelebrationEvent {
  id: string;
  type: CelebrationEventType;
  title: { en: string; hi: string };
  subtitle?: { en?: string; hi?: string };
  description: { en: string; hi: string };
  date?: { en?: string; hi?: string };
  dateISO?: string | null;
  time?: { en?: string; hi?: string };
  venueName?: { en?: string; hi?: string };
  venueAddress?: { en?: string; hi?: string };
  mapUrl?: string | null;
  dressCode?: { en?: string; hi?: string };
  imageSrc?: string;
  isProminent?: boolean;
  isEnabled: boolean;
}

export interface CelebrationsPageConfig {
  heading: { en: string; hi: string };
  intro: { en: string; hi: string };
  events: CelebrationEvent[];
  labels: {
    date: { en: string; hi: string };
    time: { en: string; hi: string };
    venue: { en: string; hi: string };
    dressCode: { en: string; hi: string };
    viewMap: { en: string; hi: string };
    eventDetails: { en: string; hi: string };
    days: { en: string; hi: string };
    hours: { en: string; hi: string };
    minutes: { en: string; hi: string };
    seconds: { en: string; hi: string };
    countdownHeading: { en: string; hi: string };
  };
}

export interface CelebrationsPageProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateSection: (section: NavSection) => void;
  onBackToWelcome?: () => void;
  onBackToStory?: () => void;
  onBackToLanguageSelection?: () => void;
  weddingDetails?: WeddingDetails;
  onViewVenue?: () => void;
  hideNav?: boolean;
  hideFooter?: boolean;
}

export interface VenuePhoto {
  id: string;
  src?: string;
  alt: { en: string; hi: string };
  caption?: { en?: string; hi?: string };
  isPrimary?: boolean;
}

export type TravelTransportType =
  | 'airport'
  | 'railway'
  | 'bus'
  | 'local'
  | 'parking'
  | 'shuttle';

export interface TravelOption {
  id: string;
  type: TravelTransportType;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  distanceOrTime?: { en?: string; hi?: string };
  icon?: string;
}

export interface VenueInfo {
  id: string;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  eventName?: { en?: string; hi?: string };
  fullAddress?: { en?: string; hi?: string };
  cityAndPostalCode?: { en?: string; hi?: string };
  eventDate?: { en?: string; hi?: string };
  timing?: { en?: string; hi?: string };
  contactPerson?: { en?: string; hi?: string };
  contactNumber?: string;
  parkingInfo?: { en?: string; hi?: string };
  accessibilityInfo?: { en?: string; hi?: string };
  googleMapsUrl?: string | null;
  embedMapUrl?: string | null;
  photos: VenuePhoto[];
  isMainVenue?: boolean;
}

export interface VenuePageConfig {
  heading: { en: string; hi: string };
  subtitle: { en: string; hi: string };
  venues: VenueInfo[];
  travelSection: {
    heading: { en: string; hi: string };
    subtitle: { en: string; hi: string };
    options: TravelOption[];
  };
  closing: {
    message: { en: string; hi: string };
    coupleNames: string;
    returnCta: { en: string; hi: string };
  };
  labels: {
    getDirections: { en: string; hi: string };
    fullAddress: { en: string; hi: string };
    eventDate: { en: string; hi: string };
    timings: { en: string; hi: string };
    contact: { en: string; hi: string };
    parking: { en: string; hi: string };
    accessibility: { en: string; hi: string };
    viewGallery: { en: string; hi: string };
    planVisit: { en: string; hi: string };
    venueAwaiting: { en: string; hi: string };
    venueAwaitingDesc: { en: string; hi: string };
  };
}

export interface VenuePageProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateSection: (section: NavSection) => void;
  onBackToWelcome?: () => void;
  onBackToCelebrations?: () => void;
  onBackToLanguageSelection?: () => void;
  weddingDetails?: WeddingDetails;
  hideNav?: boolean;
  hideFooter?: boolean;
}

export type AttendanceStatus = 'attending' | 'declined';

export interface RsvpFormData {
  fullName: string;
  attendance: AttendanceStatus | null;
  guestCount: number;
  selectedEvents: string[];
  message: string;
}

export interface RsvpRecord {
  id?: string;
  guestName: string;
  attendance: AttendanceStatus;
  guestCount: number;
  selectedEvents: string[];
  message?: string;
  createdAt?: string;
}

export interface RsvpPageConfig {
  heading: { en: string; hi: string };
  message: { en: string; hi: string };
  maxGuests: number;
  eventsAttendanceEnabled: boolean;
  labels: {
    fullName: { en: string; hi: string };
    fullNamePlaceholder: { en: string; hi: string };
    attendanceQuestion: { en: string; hi: string };
    acceptOption: { en: string; hi: string };
    acceptSubtext: { en: string; hi: string };
    declineOption: { en: string; hi: string };
    declineSubtext: { en: string; hi: string };
    guestCountLabel: { en: string; hi: string };
    guestCountHint: { en: string; hi: string };
    eventsLabel: { en: string; hi: string };
    eventsHint: { en: string; hi: string };
    messageLabel: { en: string; hi: string };
    messagePlaceholder: { en: string; hi: string };
    submitCta: { en: string; hi: string };
    submitting: { en: string; hi: string };
    successAccepted: { en: string; hi: string };
    successDeclined: { en: string; hi: string };
    successNote: { en: string; hi: string };
    returnHome: { en: string; hi: string };
    backendNotice?: { en: string; hi: string };
  };
  validation: {
    nameRequired: { en: string; hi: string };
    attendanceRequired: { en: string; hi: string };
    guestCountInvalid: { en: string; hi: string };
  };
}

export interface RsvpSubmissionResult {
  success: boolean;
  message: string;
  responseId?: string;
  isDemoMode?: boolean;
}

export interface RsvpPageProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateSection: (section: NavSection) => void;
  onBackToWelcome?: () => void;
  onBackToLanguageSelection?: () => void;
  weddingDetails?: WeddingDetails;
  hideNav?: boolean;
  hideFooter?: boolean;
}

export interface GalleryCategory {
  id: string;
  label: { en: string; hi: string };
  icon?: string;
}

export type GalleryAspectRatio = 'landscape' | 'portrait' | 'square';

export interface GalleryPhoto {
  id: string;
  src?: string;
  alt: { en: string; hi: string };
  caption?: { en?: string; hi?: string };
  story?: { en?: string; hi?: string };
  category: string;
  order: number;
  isFeatured?: boolean;
  aspectRatio?: GalleryAspectRatio;
  symbolicType?: string;
}

export interface GalleryPageConfig {
  heading: { en: string; hi: string };
  intro: { en: string; hi: string };
  categories: GalleryCategory[];
  photos: GalleryPhoto[];
  featuredPhotoId?: string | null;
  closing: {
    quote: { en: string; hi: string };
    coupleNames: string;
    returnCta: { en: string; hi: string };
  };
  labels: {
    allCategories: { en: string; hi: string };
    featuredBadge: { en: string; hi: string };
    photoCount: { en: string; hi: string };
    prevPhoto: { en: string; hi: string };
    nextPhoto: { en: string; hi: string };
    closeViewer: { en: string; hi: string };
    emptyTitle: { en: string; hi: string };
    emptyDesc: { en: string; hi: string };
  };
}

export interface GalleryPageProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateSection: (section: NavSection) => void;
  onBackToWelcome?: () => void;
  onBackToLanguageSelection?: () => void;
  weddingDetails?: WeddingDetails;
  hideNav?: boolean;
  hideFooter?: boolean;
}

export interface FinalClosingConfig {
  coupleNames: string;
  finalInvitationMessage: {
    en: string;
    hi: string;
  };
  actions: {
    exploreCelebrations: {
      en: string;
      hi: string;
    };
    viewMemories: {
      en: string;
      hi: string;
    };
  };
  detailsLabels: {
    weddingDate: { en: string; hi: string };
    ceremonyTime: { en: string; hi: string };
    mainVenue: { en: string; hi: string };
    venueAddress: { en: string; hi: string };
    getDirections: { en: string; hi: string };
  };
  footer: {
    closingMessage: {
      en: string;
      hi: string;
    };
    navLinks: {
      welcome: { en: string; hi: string };
      story: { en: string; hi: string };
      celebrations: { en: string; hi: string };
      venue: { en: string; hi: string };
      rsvp: { en: string; hi: string };
      gallery: { en: string; hi: string };
    };
    switchLanguage: {
      en: string;
      hi: string;
    };
    copyright: {
      en: string;
      hi: string;
    };
  };
}





