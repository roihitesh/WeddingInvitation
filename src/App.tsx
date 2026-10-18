import React, { useState, useEffect } from 'react';
import { OpeningPage } from './components/OpeningPage/OpeningPage';
import { LanguageSelectionPage } from './components/LanguageSelection/LanguageSelectionPage';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { OurStoryPage } from './components/OurStory/OurStoryPage';
import { CelebrationsPage } from './components/Celebrations/CelebrationsPage';
import { VenuePage } from './components/Venue/VenuePage';
import { RsvpPage } from './components/RSVP/RsvpPage';
import { GalleryPage } from './components/Gallery/GalleryPage';
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

function getInitialSectionFromHash(): NavSection | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (VALID_SECTIONS.includes(hash as NavSection)) {
    return hash as NavSection;
  }
  return null;
}

/**
 * Inner Application Content Component with Music Synchronization.
 */
const WeddingAppContent: React.FC = () => {
  const initialHashSection = getInitialSectionFromHash();
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(() => {
    if (initialHashSection) return 'invitation';
    return 'opening';
  });
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>(getInitialLanguage);
  const [activeSection, setActiveSection] = useState<NavSection>(() => {
    return initialHashSection || 'welcome';
  });

  const { notifyPageChanged, unlockAndPlay } = useWeddingMusic();

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

  const handleNavigateSection = (section: NavSection) => {
    setActiveSection(section);
    window.location.hash = `#${section}`;
  };

  // Sync with browser back/forward buttons (hashchange)
  useEffect(() => {
    const handleHashChange = () => {
      const sectionFromHash = getInitialSectionFromHash();
      if (sectionFromHash) {
        setCurrentScreen('invitation');
        setActiveSection(sectionFromHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
        <>
          {activeSection === 'welcome' && (
            <WelcomePage
              language={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              onBackToLanguageSelection={handleBackToLanguage}
              onNavigateSection={handleNavigateSection}
              onExploreWedding={() => setActiveSection('story')}
              onSendWishes={() => setActiveSection('rsvp')}
            />
          )}

          {activeSection === 'story' && (
            <OurStoryPage
              language={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              onNavigateSection={handleNavigateSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToLanguageSelection={handleBackToLanguage}
              onExploreCelebrations={() => setActiveSection('celebrations')}
            />
          )}

          {activeSection === 'celebrations' && (
            <CelebrationsPage
              language={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              onNavigateSection={handleNavigateSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToStory={() => setActiveSection('story')}
              onBackToLanguageSelection={handleBackToLanguage}
              onViewVenue={() => setActiveSection('venue')}
            />
          )}

          {activeSection === 'venue' && (
            <VenuePage
              language={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              onNavigateSection={handleNavigateSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToCelebrations={() => setActiveSection('celebrations')}
              onBackToLanguageSelection={handleBackToLanguage}
            />
          )}

          {activeSection === 'rsvp' && (
            <RsvpPage
              language={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              onNavigateSection={handleNavigateSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToLanguageSelection={handleBackToLanguage}
            />
          )}

          {activeSection === 'gallery' && (
            <GalleryPage
              language={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              onNavigateSection={handleNavigateSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToLanguageSelection={handleBackToLanguage}
            />
          )}

          {/* Mobile Bottom Quick Navigation Dock */}
          <MobileQuickDock
            language={selectedLanguage}
            activeSection={activeSection}
            onNavigateSection={handleNavigateSection}
          />
        </>
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
