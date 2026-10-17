import React, { useState } from 'react';
import {
  WelcomePageProps,
  NavSection,
} from '../../types/invitation';
import { defaultWeddingDetails } from '../../config/weddingDetails.config';
import { welcomePageContent } from '../../config/welcomePage.config';
import { OrnamentalBorder } from '../OpeningPage/OrnamentalBorder';
import { WeddingNav } from './WeddingNav';
import { WelcomeHero } from './WelcomeHero';
import { FinalInvitationClosing } from '../FinalClosing/FinalInvitationClosing';
import { RoyalWeddingFooter } from '../FinalClosing/RoyalWeddingFooter';
import '../FinalClosing/FinalClosing.css';
import './WelcomePage.css';

/**
 * Page 3: The Royal Wedding Welcome Page — Hitesh & Shivanee.
 * The primary invitation landing experience revealed after language choice.
 * Features:
 * - Minimal royal navigation with language switch control
 * - Grand palace hero section with couple's names, H&S monogram, and heartfelt invitation
 * - Configurable wedding date and live countdown area
 * - Primary & secondary call-to-action buttons
 * - Complete localization support for English and Hindi
 */
export const WelcomePage: React.FC<WelcomePageProps> = ({
  language,
  onLanguageChange,
  onBackToLanguageSelection,
  weddingDetails = defaultWeddingDetails,
  onExploreWedding,
  onSendWishes,
  onNavigateSection,
}) => {
  const [activeSection, setActiveSection] = useState<NavSection>('welcome');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isHindi = language === 'hi';
  const content = welcomePageContent[language];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4500);
  };

  const handleNavSection = (section: NavSection) => {
    setActiveSection(section);
    if (onNavigateSection) {
      onNavigateSection(section);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplore = () => {
    if (onExploreWedding) {
      onExploreWedding();
    } else {
      showToast(content.placeholderFeedback.celebrations);
    }
  };

  const handleWishes = () => {
    if (onSendWishes) {
      onSendWishes();
    } else {
      showToast(content.placeholderFeedback.wishes);
    }
  };

  return (
    <div
      className={`welcome-page-viewport ${isHindi ? 'lang-hindi-mode' : 'lang-english-mode'}`}
      role="region"
      aria-label="Hitesh & Shivanee Wedding Welcome"
    >
      {/* 1. Viewport Perimeter Antique Gold Ornamental Border */}
      <OrnamentalBorder />

      {/* 2. Ambient Golden Sanctum Glow Aura */}
      <div className="welcome-ambient-glow" aria-hidden="true" />

      {/* 3. Top Royal Navigation Bar */}
      <WeddingNav
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={handleNavSection}
        activeSection={activeSection}
        onBackToLanguageSelection={onBackToLanguageSelection}
      />

      {/* 4. Main Welcome Page Body Container */}
      <main className="welcome-page-main-container">
        <WelcomeHero
          content={content}
          weddingDetails={weddingDetails}
          isHindi={isHindi}
          onExplore={handleExplore}
          onWishes={handleWishes}
        />

        {/* Page 9: Final Wedding Invitation & Closing Section */}
        <FinalInvitationClosing
          language={language}
          onNavigateSection={handleNavSection}
          weddingDetails={weddingDetails}
        />
      </main>

      {/* Page 9: Refined Royal Wedding Footer */}
      <RoyalWeddingFooter
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={handleNavSection}
        activeSection={activeSection}
      />

      {/* Graceful Toast Feedback for Placeholder Destinations */}
      {toastMessage && (
        <aside className="welcome-graceful-toast" role="status" aria-live="polite">
          <div className="toast-inner-card">
            <span className="toast-lotus-icon" aria-hidden="true">𑁍</span>
            <p className="toast-text-content">{toastMessage}</p>
            <button
              type="button"
              className="toast-dismiss-btn"
              onClick={() => setToastMessage(null)}
              aria-label="Dismiss notification"
            >
              ✕
            </button>
          </div>
        </aside>
      )}
    </div>
  );
};
