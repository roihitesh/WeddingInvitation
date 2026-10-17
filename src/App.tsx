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
 * Root Application Component — Hitesh & Shivanee Royal Indian Wedding Invitation.
 */
export const App: React.FC = () => {
  const initialHashSection = getInitialSectionFromHash();
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(() => {
    // If a guest deep-links to a hash section, take them straight to invitation
    if (initialHashSection) return 'invitation';
    return 'opening';
  });
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>(getInitialLanguage);
  const [activeSection, setActiveSection] = useState<NavSection>(() => {
    return initialHashSection || 'welcome';
  });

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
    setCurrentScreen('language');
  };

  const handleSelectLanguage = (lang: SupportedLanguage) => {
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
        </>
      )}
    </div>
  );
};

export default App;

