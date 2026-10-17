import React, { useState } from 'react';
import { OpeningPage } from './components/OpeningPage/OpeningPage';
import { PlaceholderNextScreen } from './components/PlaceholderNextScreen/PlaceholderNextScreen';
import { defaultContent } from './config/content.config';

/**
 * Root Application Component.
 * Mounts the luxury Indian wedding invitation opening page for Hitesh and Shivanee.
 */
export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="app-root">
      {!isOpened ? (
        <OpeningPage
          content={defaultContent}
          onOpenInvitation={() => setIsOpened(true)}
        />
      ) : (
        <PlaceholderNextScreen onBack={() => setIsOpened(false)} />
      )}
    </div>
  );
};

export default App;
