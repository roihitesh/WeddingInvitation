import React, { useState, useEffect } from 'react';
import {
  CelebrationsPageProps,
  NavSection,
  CelebrationEvent,
} from '../../types/invitation';
import { defaultCelebrationsConfig } from '../../config/celebrationsPage.config';
import { defaultWeddingDetails } from '../../config/weddingDetails.config';
import { useWeddingMusic } from '../../context/WeddingMusicContext';
import { WeddingNav } from '../WelcomePage/WeddingNav';
import { CelebrationsIntro } from './CelebrationsIntro';
import { CelebrationsCountdown } from './CelebrationsCountdown';
import { EventTimeline } from './EventTimeline';
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
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { notifySceneChanged, sceneBased } = useWeddingMusic();

  const config = defaultCelebrationsConfig;
  const isHindi = language === 'hi';

  // Scene-based music observer for celebrations events
  useEffect(() => {
    if (!sceneBased) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const eventId = entry.target.id.replace('celebration-', '');
            if (eventId) {
              notifySceneChanged(eventId);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll('[id^="celebration-"]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sceneBased, notifySceneChanged]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4500);
  };

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
        showToast(
          isHindi
            ? 'विवाह स्थल एवं मार्ग निर्देश शीघ्र ही साझा किए जाएंगे।'
            : 'Royal venue details and travel directions will be announced soon.'
        );
      }
      return;
    }

    onNavigateSection(section);
  };

  const handleViewDetails = (event: CelebrationEvent) => {
    const title = event.title[language] || event.title.en;
    showToast(
      isHindi
        ? `${title} के विस्तृत समय एवं रस्मों की जानकारी अतिशीघ्र उपलब्ध होगी।`
        : `Detailed itinerary and ceremonies for ${title} will be announced soon!`
    );
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

      {/* Floating Royal Toast Notification for placeholder callbacks */}
      {toastMessage && (
        <aside
          className="royal-celebrations-toast"
          role="status"
          aria-live="polite"
        >
          <div className="toast-gold-frame">
            <span className="toast-icon">🪔</span>
            <span className="toast-msg">{toastMessage}</span>
            <button
              type="button"
              className="toast-close"
              onClick={() => setToastMessage(null)}
              aria-label={isHindi ? 'हटाएं' : 'Dismiss'}
            >
              ✕
            </button>
          </div>
        </aside>
      )}

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

        {/* Section 3: Event Overview & Sequence */}
        <EventTimeline
          events={config.events}
          language={language}
          labels={{
            date: config.labels.date[language] || config.labels.date.en,
            time: config.labels.time[language] || config.labels.time.en,
            venue: config.labels.venue[language] || config.labels.venue.en,
            dressCode: config.labels.dressCode[language] || config.labels.dressCode.en,
            viewMap: config.labels.viewMap[language] || config.labels.viewMap.en,
            eventDetails: config.labels.eventDetails[language] || config.labels.eventDetails.en,
          }}
          onViewDetails={handleViewDetails}
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
