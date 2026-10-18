import React from 'react';
import {
  CelebrationsPageProps,
  NavSection,
} from '../../types/invitation';
import { defaultCelebrationsConfig } from '../../config/celebrationsPage.config';
import { defaultWeddingDetails } from '../../config/weddingDetails.config';
import { WeddingNav } from '../WelcomePage/WeddingNav';
import { CelebrationsIntro } from './CelebrationsIntro';
import { CelebrationsCountdown } from './CelebrationsCountdown';
import { CeremonyCardSwipe } from './CeremonyCardSwipe';
import { LotusDivider } from '../OpeningPage/LotusDivider';
import { RoyalWeddingFooter } from '../FinalClosing/RoyalWeddingFooter';
import '../FinalClosing/FinalClosing.css';
import './CelebrationsPage.css';

/**
 * Page 5: Wedding Celebrations — Hitesh & Shivanee.
 * A royal Indian wedding festivities showcase covering:
 * 1. Haldi (Golden Turmeric Beginning)
 * 2. Mehendi (Painted with Love)
 * 3. Sangeet (Music and Memories)
 * 4. The Wedding Ceremony (Our Forever Begins — Prominent)
 * 5. Reception (Celebration Banquet — Optional)
 *
 * Adheres strictly to:
 * - Zero fake/invented dates or venues
 * - Unified countdown to main wedding if date is configured (hidden if missing)
 * - Complete bilingual English & authentic Devanagari Hindi localization
 */
export const CelebrationsPage: React.FC<CelebrationsPageProps> = ({
  language,
  onLanguageChange,
  onNavigateSection,
  onBackToWelcome,
  onBackToStory,
  onBackToLanguageSelection,
  weddingDetails = defaultWeddingDetails,
  onViewVenue,
}) => {
  const config = defaultCelebrationsConfig;
  const isHindi = language === 'hi';

  const handleNavSection = (section: NavSection) => {
    if (section === 'celebrations') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (section === 'welcome') {
      if (onBackToWelcome) {
        onBackToWelcome();
      } else {
        onNavigateSection('welcome');
      }
      return;
    }

    if (section === 'story') {
      if (onBackToStory) {
        onBackToStory();
      } else {
        onNavigateSection('story');
      }
      return;
    }

    if (section === 'venue') {
      if (onViewVenue) {
        onViewVenue();
      } else {
        onNavigateSection('venue');
      }
      return;
    }

    onNavigateSection(section);
  };

  const handleMapClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="celebrations-page-root" role="main">
      {/* Top Royal Navigation Bar */}
      <WeddingNav
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={handleNavSection}
        activeSection="celebrations"
        onBackToLanguageSelection={onBackToLanguageSelection}
      />

      {/* Ambient background layers: Handmade paper texture and soft gold jaali watermark */}
      <div className="celebrations-ambient-bg" aria-hidden="true">
        <div className="celebrations-paper-texture" />
        <div className="celebrations-jaali-watermark" />
        <div className="celebrations-warm-lighting-top" />
        <div className="celebrations-warm-lighting-bottom" />
      </div>

      <div className="celebrations-inner-container">
        {/* Section 1: Page Introduction */}
        <CelebrationsIntro
          language={language}
          heading={config.heading}
          intro={config.intro}
        />

        {/* Section 2: Optional Countdown to Sacred Muhurat (Hidden if no date configured) */}
        <CelebrationsCountdown
          weddingDetails={weddingDetails}
          language={language}
          heading={config.labels.countdownHeading[language] || config.labels.countdownHeading.en}
          labels={{
            days: config.labels.days[language] || config.labels.days.en,
            hours: config.labels.hours[language] || config.labels.hours.en,
            minutes: config.labels.minutes[language] || config.labels.minutes.en,
            seconds: config.labels.seconds[language] || config.labels.seconds.en,
          }}
        />

        {/* Section 3: Interactive Ceremony Card Swipe Experience */}
        <CeremonyCardSwipe
          events={config.events}
          language={language}
          labels={{
            date: config.labels.date,
            time: config.labels.time,
            venue: config.labels.venue,
            dressCode: config.labels.dressCode,
            viewMap: config.labels.viewMap,
          }}
          onMapClick={handleMapClick}
        />

        {/* Section 4: Auspicious Closing Blessing */}
        <section className="celebrations-closing-blessing">
          <div className="blessing-divider">
            <LotusDivider />
          </div>
          <p className="blessing-mantra">
            {isHindi
              ? '॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥'
              : '॥ May All Be Blessed With Peace, Joy, and Auspicious Beginnings ॥'}
          </p>
          <div className="blessing-names-sign">
            <span>Hitesh &amp; Shivanee</span>
          </div>
        </section>
      </div>

      {/* Sacred Traditional Footer */}
      <RoyalWeddingFooter
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={handleNavSection}
        activeSection="celebrations"
      />
    </div>
  );
};
