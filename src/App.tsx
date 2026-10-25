import React, { useState, useEffect, useRef, useCallback } from 'react';
import { OpeningPage } from './components/OpeningPage/OpeningPage';
import { LanguageSelectionPage } from './components/LanguageSelection/LanguageSelectionPage';
import { WeddingNav } from './components/WelcomePage/WeddingNav';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { OurStoryPage } from './components/OurStory/OurStoryPage';
import { CelebrationsPage } from './components/Celebrations/CelebrationsPage';
import { VenuePage } from './components/Venue/VenuePage';
import { RsvpPage } from './components/RSVP/RsvpPage';
import { GalleryPage } from './components/Gallery/GalleryPage';
import { FinalInvitationClosing } from './components/FinalClosing/FinalInvitationClosing';
import { RoyalWeddingFooter } from './components/FinalClosing/RoyalWeddingFooter';
import { defaultContent } from './config/content.config';
import { SupportedLanguage, NavSection } from './types/invitation';
import { WeddingMusicProvider, useWeddingMusic } from './context/WeddingMusicContext';
import { FloatingMusicControl } from './components/Music/FloatingMusicControl';
import { MobileQuickDock } from './components/Navigation/MobileQuickDock';

export type ScreenState = 'opening' | 'language' | 'invitation';

const VALID_SECTIONS: NavSection[] = ['welcome', 'story', 'celebrations', 'venue', 'rsvp', 'gallery'];

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam === 'hi' || langParam === 'en') {
    return langParam;
  }
  const stored = localStorage.getItem('hs_wedding_lang');
  if (stored === 'hi' || stored === 'en') {
    return stored;
  }
  return 'en';
}

/**
 * Inner Application Content Component with Scroll-Snap Section Navigation.
 *
 * Requirements:
 * - With every reload, the application ALWAYS starts from the start (royal palace doors).
 * - Once inside the invitation, scrolling automatically snaps and fits the next frame cleanly.
 * - Single sticky royal navigation bar and floating quick dock track the active chapter.
 * - An IntersectionObserver detects which frame is in view, updating activeSection and
 *   seamlessly synchronizing the background musical theme for each chapter.
 */
const WeddingAppContent: React.FC = () => {
  // Always start from the opening palace door on fresh load or browser reload
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('opening');
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>(getInitialLanguage);
  const [activeSection, setActiveSection] = useState<NavSection>('welcome');

  const { notifyPageChanged, unlockAndPlay } = useWeddingMusic();

  // Clear hash on mount so browser reload always starts from the opening screen
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Refs for scroll-snap section elements
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<NavSection, HTMLElement | null>>({
    welcome: null,
    story: null,
    celebrations: null,
    venue: null,
    rsvp: null,
    gallery: null,
  });

  // Flag to suppress observer updates during programmatic navigation scrolls
  const isProgrammaticScroll = useRef(false);

  // Synchronize background music with current screen and active section
  useEffect(() => {
    if (currentScreen === 'opening') {
      notifyPageChanged('opening');
    } else if (currentScreen === 'language') {
      notifyPageChanged('language');
    } else if (currentScreen === 'invitation') {
      notifyPageChanged(activeSection);
    }
  }, [currentScreen, activeSection, notifyPageChanged]);

  // ── IntersectionObserver: detect which frame is currently centered / visible ──
  useEffect(() => {
    if (currentScreen !== 'invitation') return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        let maxRatio = 0;
        let visibleSection: NavSection | null = null;

        entries.forEach((entry) => {
          const section = entry.target.getAttribute('data-section') as NavSection | null;
          if (section && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = section;
          }
        });

        if (visibleSection && maxRatio > 0.35) {
          setActiveSection((prev) => {
            if (prev !== visibleSection) {
              window.history.replaceState(null, '', `#${visibleSection}`);
              return visibleSection!;
            }
            return prev;
          });
        }
      },
      {
        root: container,
        threshold: [0.1, 0.35, 0.6, 0.85],
      }
    );

    // Observe all chapter snap sections
    VALID_SECTIONS.forEach((key) => {
      const el = sectionRefs.current[key];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentScreen]);

  // Persist language choice
  const handleLanguageChange = (lang: SupportedLanguage) => {
    setSelectedLanguage(lang);
    try {
      localStorage.setItem('hs_wedding_lang', lang);
    } catch {
      // Ignore localStorage errors in private browsing
    }
  };

  const handleOpenPalace = () => {
    unlockAndPlay('madhurashtakam');
    setCurrentScreen('language');
  };

  const handleSelectLanguage = (lang: SupportedLanguage) => {
    unlockAndPlay('raabta');
    handleLanguageChange(lang);
    setActiveSection('welcome');
    setCurrentScreen('invitation');
    window.location.hash = '#welcome';
  };

  const handleBackToLanguage = () => {
    setCurrentScreen('language');
  };

  // Smooth scroll-to-section navigation when clicking navbar or dock
  const handleNavigateSection = useCallback((section: NavSection) => {
    const el = sectionRefs.current[section];
    if (!el) return;

    isProgrammaticScroll.current = true;
    setActiveSection(section);
    window.history.replaceState(null, '', `#${section}`);

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 850);
  }, []);

  // Ref callback helper
  const setSectionRef = useCallback((section: NavSection) => (el: HTMLDivElement | null) => {
    sectionRefs.current[section] = el;
  }, []);

  return (
    <div className="app-root">
      {currentScreen === 'opening' && (
        <OpeningPage
          content={defaultContent}
          onOpenInvitation={handleOpenPalace}
        />
      )}

      {currentScreen === 'language' && (
        <LanguageSelectionPage
          onSelectLanguage={handleSelectLanguage}
          onBackToOpening={() => setCurrentScreen('opening')}
        />
      )}

      {currentScreen === 'invitation' && (
        <div className="invitation-screen-wrapper">
          {/* 1. Single Top Royal Navigation Bar (Sticky across all chapters) */}
          <WeddingNav
            language={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            onNavigateSection={handleNavigateSection}
            activeSection={activeSection}
            onBackToLanguageSelection={handleBackToLanguage}
          />

          {/* 2. Smooth Snap-Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="invitation-scroll-container"
          >
            {/* Chapter 1: Welcome & Muhurat Countdown */}
            <div
              ref={setSectionRef('welcome')}
              data-section="welcome"
              className="scroll-snap-section section-welcome-frame"
            >
              <WelcomePage
                language={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                onBackToLanguageSelection={handleBackToLanguage}
                onNavigateSection={handleNavigateSection}
                onExploreWedding={() => handleNavigateSection('story')}
                onSendWishes={() => handleNavigateSection('rsvp')}
                hideNav={true}
                hideFooter={true}
                hideClosing={false}
              />
            </div>

            {/* Chapter 2: Our Story (Milestones) */}
            <div
              ref={setSectionRef('story')}
              data-section="story"
              className="scroll-snap-section section-story-frame"
            >
              <OurStoryPage
                language={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                onNavigateSection={handleNavigateSection}
                onBackToWelcome={() => handleNavigateSection('welcome')}
                onBackToLanguageSelection={handleBackToLanguage}
                onExploreCelebrations={() => handleNavigateSection('celebrations')}
                hideNav={true}
                hideFooter={true}
              />
            </div>

            {/* Chapter 3: Celebrations (Swipeable ceremonies deck) */}
            <div
              ref={setSectionRef('celebrations')}
              data-section="celebrations"
              className="scroll-snap-section section-celebrations-frame"
            >
              <CelebrationsPage
                language={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                onNavigateSection={handleNavigateSection}
                onBackToWelcome={() => handleNavigateSection('welcome')}
                onBackToStory={() => handleNavigateSection('story')}
                onBackToLanguageSelection={handleBackToLanguage}
                onViewVenue={() => handleNavigateSection('venue')}
                hideNav={true}
                hideFooter={true}
              />
            </div>

            {/* Chapter 4: Venue & Directions */}
            <div
              ref={setSectionRef('venue')}
              data-section="venue"
              className="scroll-snap-section section-venue-frame"
            >
              <VenuePage
                language={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                onNavigateSection={handleNavigateSection}
                onBackToWelcome={() => handleNavigateSection('welcome')}
                onBackToCelebrations={() => handleNavigateSection('celebrations')}
                onBackToLanguageSelection={handleBackToLanguage}
                hideNav={true}
                hideFooter={true}
              />
            </div>

            {/* Chapter 5: RSVP & Guest Confirmation */}
            <div
              ref={setSectionRef('rsvp')}
              data-section="rsvp"
              className="scroll-snap-section section-rsvp-frame"
            >
              <RsvpPage
                language={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                onNavigateSection={handleNavigateSection}
                onBackToWelcome={() => handleNavigateSection('welcome')}
                onBackToLanguageSelection={handleBackToLanguage}
                hideNav={true}
                hideFooter={true}
              />
            </div>

            {/* Chapter 6: Photo Gallery / Memories */}
            <div
              ref={setSectionRef('gallery')}
              data-section="gallery"
              className="scroll-snap-section section-gallery-frame"
            >
              <GalleryPage
                language={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                onNavigateSection={handleNavigateSection}
                onBackToWelcome={() => handleNavigateSection('welcome')}
                onBackToLanguageSelection={handleBackToLanguage}
                hideNav={true}
                hideFooter={true}
              />
            </div>

            {/* Final Grand Closing Climax & Royal Footer */}
            <div className="scroll-snap-section section-closing-frame">
              <FinalInvitationClosing
                language={selectedLanguage}
                onNavigateSection={handleNavigateSection}
              />
              <RoyalWeddingFooter
                language={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                onNavigateSection={handleNavigateSection}
                activeSection={activeSection}
              />
            </div>
          </div>

          {/* Mobile Bottom Quick Navigation Dock */}
          <MobileQuickDock
            language={selectedLanguage}
            activeSection={activeSection}
            onNavigateSection={handleNavigateSection}
          />
        </div>
      )}

      {/* Floating Royal Background Music Controller & Drawer */}
      <FloatingMusicControl language={selectedLanguage} />
    </div>
  );
};

/**
 * Root Application Component wrapped with Global Wedding Music Provider.
 */
export const App: React.FC = () => {
  return (
    <WeddingMusicProvider>
      <WeddingAppContent />
    </WeddingMusicProvider>
  );
};

export default App;
