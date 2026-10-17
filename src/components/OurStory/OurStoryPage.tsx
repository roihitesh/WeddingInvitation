import React, { useState } from 'react';
import {
  OurStoryPageProps,
  NavSection,
  StoryPhotoItem,
} from '../../types/invitation';
import { defaultStoryPageConfig } from '../../config/storyPage.config';
import { WeddingNav } from '../WelcomePage/WeddingNav';
import { StoryIntro } from './StoryIntro';
import { VerticalTimeline } from './VerticalTimeline';
import { StoryClosing } from './StoryClosing';
import { ImageLightbox } from './ImageLightbox';
import './OurStoryPage.css';

/**
 * Page 4: Our Love Story — Hitesh & Shivanee.
 * A luxury hybrid photo album and continuous vertical timeline.
 * Connects all 6 relationship milestones with authentic royal Indian wedding artistry,
 * editorial alternating layouts, bilingual narrative, and full lightbox interaction.
 */
export const OurStoryPage: React.FC<OurStoryPageProps> = ({
  language,
  onLanguageChange,
  onNavigateSection,
  onBackToWelcome,
  onBackToLanguageSelection,
  onExploreCelebrations,
}) => {
  const [activePhoto, setActivePhoto] = useState<StoryPhotoItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const config = defaultStoryPageConfig;
  const isHindi = language === 'hi';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4500);
  };

  const handleNavSection = (section: NavSection) => {
    if (section === 'story') {
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

    if (section === 'celebrations') {
      if (onExploreCelebrations) {
        onExploreCelebrations();
      } else {
        showToast(config.closing.celebrationFeedback[language] || config.closing.celebrationFeedback.en);
      }
      return;
    }

    if (section === 'venue') {
      showToast(
        isHindi
          ? 'विवाह स्थल एवं मार्ग निर्देश शीघ्र ही साझा किए जाएंगे।'
          : 'Royal venue details and travel directions will be announced soon.'
      );
      return;
    }

    onNavigateSection(section);
  };

  const handleContinueCelebrations = () => {
    if (onExploreCelebrations) {
      onExploreCelebrations();
    } else {
      showToast(config.closing.celebrationFeedback[language] || config.closing.celebrationFeedback.en);
    }
  };

  return (
    <div className="our-story-page-root" role="main">
      {/* Top Royal Navigation Bar */}
      <WeddingNav
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={handleNavSection}
        activeSection="story"
        onBackToLanguageSelection={onBackToLanguageSelection}
      />

      {/* Floating Royal Toast Notification for placeholder callbacks */}
      {toastMessage && (
        <aside
          className="royal-story-toast-notification"
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
      <div className="story-ambient-bg" aria-hidden="true">
        <div className="story-paper-texture" />
        <div className="story-jaali-watermark" />
        <div className="story-warm-lighting-top" />
        <div className="story-warm-lighting-bottom" />
      </div>

      <div className="our-story-inner-container">
        {/* Section 1: Opening of the Story */}
        <StoryIntro
          language={language}
          title={config.title}
          intro={config.intro}
        />

        {/* Section 2: Continuous Vertical Gold Timeline & Milestones */}
        <VerticalTimeline
          milestones={config.milestones}
          language={language}
          onPhotoClick={(photo) => setActivePhoto(photo)}
        />

        {/* Section 3: Final Emotional Closing */}
        <StoryClosing
          language={language}
          quote={config.closing.quote}
          coupleNames={config.closing.coupleNames}
          ctaText={config.closing.ctaText}
          onExploreCelebrations={handleContinueCelebrations}
        />
      </div>

      {/* Full-Screen Image Lightbox */}
      <ImageLightbox
        photo={activePhoto}
        language={language}
        onClose={() => setActivePhoto(null)}
      />

      {/* Sacred Traditional Footer */}
      <footer className="story-sacred-footer" role="contentinfo">
        <div className="footer-mantra">
          <span className="footer-flourish">꧁</span>
          <span className="footer-text">
            {isHindi
              ? '॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥'
              : '॥ May the Divine Grace Bless This Holy Union ॥'}
          </span>
          <span className="footer-flourish">꧂</span>
        </div>
        <p className="footer-credit">Hitesh &amp; Shivanee • Forever &amp; Always</p>
      </footer>
    </div>
  );
};
