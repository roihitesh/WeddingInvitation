import React, { useState } from 'react';
import { OpeningPage } from './components/OpeningPage/OpeningPage';
import { LanguageSelectionPage } from './components/LanguageSelection/LanguageSelectionPage';
import { PlaceholderNextScreen } from './components/PlaceholderNextScreen/PlaceholderNextScreen';
import { defaultContent } from './config/content.config';
import { SupportedLanguage } from './types/invitation';

export type ScreenState = 'opening' | 'language' | 'invitation';

/**
 * Root Application Component — Hitesh & Shivanee Royal Indian Wedding Invitation.
 * Manages screen transitions:
 * 1. Opening Palace Entrance (3D Double Doors)
 * 2. Page 3: Choose Your Invitation Language (English / Hindi Stationery Cards)
 * 3. Invitation Festivities Preview (in chosen language with language switcher)
 */
export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('opening');
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('en');

  const handleOpenPalace = () => {
    setCurrentScreen('language');
  };

  const handleSelectLanguage = (lang: SupportedLanguage) => {
    setSelectedLanguage(lang);
    setCurrentScreen('invitation');
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
        <PlaceholderNextScreen
          language={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          onBack={() => setCurrentScreen('language')}
        />
      )}
    </div>
  );
};

export default App;
