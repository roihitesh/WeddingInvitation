import React from 'react';
import { SupportedLanguage } from '../../types/invitation';
import './PlaceholderNextScreen.css';

interface PlaceholderNextScreenProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onBack: () => void;
}

/**
 * Placeholder component for the next screen following language choice.
 * Displays invitation details placeholder in the chosen language (English / Hindi),
 * with an elegant language toggle bar allowing guests to change language at any time.
 */
export const PlaceholderNextScreen: React.FC<PlaceholderNextScreenProps> = ({
  language,
  onLanguageChange,
  onBack,
}) => {
  const isHindi = language === 'hi';

  return (
    <section
      className="placeholder-screen-container"
      aria-label="Invitation Details Preview"
    >
      {/* Top Language Control Bar */}
      <nav className="subsequent-lang-bar" aria-label="Language Switcher">
        <span className="subsequent-lang-label">
          {isHindi ? 'भाषा:' : 'Language:'}
        </span>
        <div className="subsequent-lang-toggle">
          <button
            type="button"
            className={`lang-pill ${language === 'en' ? 'active-lang' : ''}`}
            onClick={() => onLanguageChange('en')}
            aria-pressed={language === 'en'}
          >
            English
          </button>
          <span className="lang-separator">|</span>
          <button
            type="button"
            className={`lang-pill ${language === 'hi' ? 'active-lang' : ''}`}
            onClick={() => onLanguageChange('hi')}
            aria-pressed={language === 'hi'}
          >
            हिंदी
          </button>
        </div>
      </nav>

      <div className="placeholder-card">
        <span className="placeholder-lotus-icon" aria-hidden="true">
          🪷
        </span>

        <h2 className="placeholder-heading">
          {isHindi ? 'शुभ विवाह उत्सव एवं कार्यक्रम' : 'Shubh Vivah Festivities'}
        </h2>

        <p className="placeholder-subheading">
          {isHindi
            ? 'हितेश एवं शिवानी के शुभ विवाह का निमंत्रण'
            : 'Wedding Celebration of Hitesh & Shivanee'}
        </p>

        <p className="placeholder-message">
          {isHindi
            ? 'आपकी चुनी हुई भाषा (हिंदी) सफलतापूर्वक सुरक्षित कर ली गई है। समस्त मांगलिक कार्यक्रम, शुभ मुहूर्त एवं परिवार के स्नेहपूर्ण संदेश इस स्क्रीन पर प्रदर्शित होंगे।'
            : 'Your selected language (English) has been preserved. The complete wedding ceremonies, muhurat timings, and celebratory events will be revealed here.'}
        </p>

        <button
          type="button"
          className="placeholder-back-btn"
          onClick={onBack}
          aria-label={
            isHindi
              ? 'भाषा चयन स्क्रीन पर वापस जाएं'
              : 'Return to language selection'
          }
        >
          {isHindi ? '← भाषा चयन पर वापस जाएं' : '← Return to Language Choice'}
        </button>
      </div>
    </section>
  );
};
