import React, { useState } from 'react';
import { OpeningPage } from './components/OpeningPage/OpeningPage';
import { LanguageSelectionPage } from './components/LanguageSelection/LanguageSelectionPage';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { OurStoryPage } from './components/OurStory/OurStoryPage';
import { CelebrationsPage } from './components/Celebrations/CelebrationsPage';
import { VenuePage } from './components/Venue/VenuePage';
import { defaultContent } from './config/content.config';
import { SupportedLanguage, NavSection } from './types/invitation';

export type ScreenState = 'opening' | 'language' | 'invitation';

/**
 * Root Application Component — Hitesh & Shivanee Royal Indian Wedding Invitation.
 * Manages screen transitions:
 * 1. Opening Palace Entrance (3D Double Doors)
 * 2. Page 2: Choose Your Invitation Language (English / Hindi Stationery Cards)
 * 3. Page 3: The Royal Wedding Welcome Page (in chosen language with language switcher)
 * 4. Page 4: Our Love Story (Editorial photo album + continuous vertical timeline)
 * 5. Page 5: Wedding Celebrations (Haldi, Mehendi, Sangeet, Wedding Ceremony, Reception)
 * 6. Page 6: Wedding Venue & Directions (Palace destination, Google Maps navigation, transit)
 */
export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('opening');
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('en');
  const [activeSection, setActiveSection] = useState<NavSection>('welcome');

  const handleOpenPalace = () => {
    setCurrentScreen('language');
  };

  const handleSelectLanguage = (lang: SupportedLanguage) => {
    setSelectedLanguage(lang);
    setActiveSection('welcome');
    setCurrentScreen('invitation');
  };

  const handleBackToLanguage = () => {
    setCurrentScreen('language');
  };

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
              onLanguageChange={setSelectedLanguage}
              onBackToLanguageSelection={handleBackToLanguage}
              onNavigateSection={setActiveSection}
              onExploreWedding={() => setActiveSection('story')}
            />
          )}

          {activeSection === 'story' && (
            <OurStoryPage
              language={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              onNavigateSection={setActiveSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToLanguageSelection={handleBackToLanguage}
              onExploreCelebrations={() => setActiveSection('celebrations')}
            />
          )}

          {activeSection === 'celebrations' && (
            <CelebrationsPage
              language={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              onNavigateSection={setActiveSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToStory={() => setActiveSection('story')}
              onBackToLanguageSelection={handleBackToLanguage}
              onViewVenue={() => setActiveSection('venue')}
            />
          )}

          {activeSection === 'venue' && (
            <VenuePage
              language={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              onNavigateSection={setActiveSection}
              onBackToWelcome={() => setActiveSection('welcome')}
              onBackToCelebrations={() => setActiveSection('celebrations')}
              onBackToLanguageSelection={handleBackToLanguage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;

