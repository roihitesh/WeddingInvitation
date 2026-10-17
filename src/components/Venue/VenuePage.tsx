import React, { useState } from 'react';
import {
  VenuePageProps,
  NavSection,
  VenuePhoto,
  VenueInfo,
} from '../../types/invitation';
import { defaultVenueConfig } from '../../config/venuePage.config';
import { WeddingNav } from '../WelcomePage/WeddingNav';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';
import { VenueHero } from './VenueHero';
import { VenueDetailsCard } from './VenueDetailsCard';
import { VenueMapDirections } from './VenueMapDirections';
import { VenueTravelPlan } from './VenueTravelPlan';
import { VenueGallery } from './VenueGallery';
import { VenueArtwork } from './VenueArtwork';
import './VenuePage.css';

/**
 * Page 6: Wedding Venue & Directions — Hitesh & Shivanee.
 * Comprehensive, accessible, and elegant wedding venue destination page.
 *
 * Features:
 * - H&S royal monogram branding
 * - Hero showcase with antique-gold framed palace architecture
 * - Logistics details card (zero fake data; unconfigured fields hidden)
 * - Working Google Maps directions generator
 * - "Plan Your Visit" travel assistance (airport, railway, transit)
 * - Multi-venue support (single or distinct venues per event)
 * - Responsive venue gallery with full-screen lightbox
 * - Emotional closing and return to celebrations
 */
export const VenuePage: React.FC<VenuePageProps> = ({
  language,
  onLanguageChange,
  onNavigateSection,
  onBackToWelcome,
  onBackToCelebrations,
  onBackToLanguageSelection,
  weddingDetails: _weddingDetails,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState<VenuePhoto | null>(null);

  const config = defaultVenueConfig;
  const isHindi = language === 'hi';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4500);
  };

  const handleNavSection = (section: NavSection) => {
    if (section === 'venue') {
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
      onNavigateSection('story');
      return;
    }

    if (section === 'celebrations') {
      if (onBackToCelebrations) {
        onBackToCelebrations();
      } else {
        onNavigateSection('celebrations');
      }
      return;
    }

    onNavigateSection(section);
  };

  const handleDirectionsFallback = () => {
    showToast(
      isHindi
        ? 'विवाह स्थल का आधिकारिक मार्ग निर्देश तय होते ही गूगल मैप्स लिंक सक्रिय कर दिया जाएगा।'
        : 'Official Google Maps directions link will be activated as soon as venue details are finalized!'
    );
  };

  const mainVenue: VenueInfo = config.venues.find((v) => v.isMainVenue) || config.venues[0];
  const additionalVenues = config.venues.filter((v) => !v.isMainVenue);

  return (
    <div className="venue-page-root" role="main">
      {/* Top Royal Navigation Bar */}
      <WeddingNav
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={handleNavSection}
        activeSection="venue"
        onBackToLanguageSelection={onBackToLanguageSelection}
      />

      {/* Floating Royal Toast */}
      {toastMessage && (
        <aside className="royal-venue-toast" role="status" aria-live="polite">
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

      {/* Ambient background layers */}
      <div className="venue-ambient-bg" aria-hidden="true">
        <div className="venue-paper-texture" />
        <div className="venue-jaali-watermark" />
        <div className="venue-warm-lighting-top" />
        <div className="venue-warm-lighting-bottom" />
      </div>

      <div className="venue-inner-container">
        {/* Section 1: Page Header */}
        <header className="venue-page-intro-header">
          <div className="venue-monogram-wrap">
            <WeddingLogo
              className="venue-intro-logo"
              namesText=""
              hideLockupNames={true}
              hideSubtitle={true}
            />
          </div>

          <div className="venue-chapter-pill">
            <span className="pill-star">✦</span>
            <span className="pill-text">
              {isHindi ? 'विवाह स्थल एवं मार्ग निर्देश' : 'Destination & Directions'}
            </span>
            <span className="pill-star">✦</span>
          </div>

          <h1 className={`venue-main-heading ${isHindi ? 'font-devanagari' : ''}`}>
            {config.heading[language] || config.heading.en}
          </h1>

          <p className={`venue-main-subtitle ${isHindi ? 'font-devanagari' : ''}`}>
            “{config.subtitle[language] || config.subtitle.en}”
          </p>

          <div className="venue-header-divider">
            <LotusDivider />
          </div>
        </header>

        {/* Section 2: Main Venue Hero */}
        {mainVenue && (
          <VenueHero
            venue={mainVenue}
            language={language}
            onPhotoClick={() => {
              if (mainVenue.photos[0]) {
                setActivePhoto(mainVenue.photos[0]);
              }
            }}
          />
        )}

        {/* Section 3: Venue Information Details Card */}
        {mainVenue && (
          <div className="venue-card-section-wrap">
            <VenueDetailsCard
              venue={mainVenue}
              language={language}
              labels={{
                fullAddress: config.labels.fullAddress[language] || config.labels.fullAddress.en,
                eventDate: config.labels.eventDate[language] || config.labels.eventDate.en,
                timings: config.labels.timings[language] || config.labels.timings.en,
                contact: config.labels.contact[language] || config.labels.contact.en,
                parking: config.labels.parking[language] || config.labels.parking.en,
                accessibility: config.labels.accessibility[language] || config.labels.accessibility.en,
                venueAwaiting: config.labels.venueAwaiting[language] || config.labels.venueAwaiting.en,
                venueAwaitingDesc: config.labels.venueAwaitingDesc[language] || config.labels.venueAwaitingDesc.en,
              }}
            />
          </div>
        )}

        {/* Section 4: Google Maps Directions Action & Preview */}
        {mainVenue && (
          <VenueMapDirections
            venue={mainVenue}
            language={language}
            labelGetDirections={config.labels.getDirections[language] || config.labels.getDirections.en}
            onDirectionsFallbackClick={handleDirectionsFallback}
          />
        )}

        {/* Section 5: Multiple Event Venues (If configured) */}
        {additionalVenues.length > 0 && (
          <section className="additional-venues-section" aria-label="Additional Event Locations">
            <h3 className={`additional-venues-title ${isHindi ? 'font-devanagari' : ''}`}>
              {isHindi ? 'अन्य समारोह स्थल' : 'Additional Ceremony Locations'}
            </h3>
            <div className="additional-venues-grid">
              {additionalVenues.map((v) => (
                <VenueDetailsCard
                  key={v.id}
                  venue={v}
                  language={language}
                  labels={{
                    fullAddress: config.labels.fullAddress[language] || config.labels.fullAddress.en,
                    eventDate: config.labels.eventDate[language] || config.labels.eventDate.en,
                    timings: config.labels.timings[language] || config.labels.timings.en,
                    contact: config.labels.contact[language] || config.labels.contact.en,
                    parking: config.labels.parking[language] || config.labels.parking.en,
                    accessibility: config.labels.accessibility[language] || config.labels.accessibility.en,
                    venueAwaiting: config.labels.venueAwaiting[language] || config.labels.venueAwaiting.en,
                    venueAwaitingDesc: config.labels.venueAwaitingDesc[language] || config.labels.venueAwaitingDesc.en,
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Plan Your Visit (Transit & Travel) */}
        <VenueTravelPlan
          heading={config.travelSection.heading}
          subtitle={config.travelSection.subtitle}
          options={config.travelSection.options}
          language={language}
        />

        {/* Section 7: Venue Photo Gallery */}
        {mainVenue && mainVenue.photos.length > 1 && (
          <VenueGallery
            photos={mainVenue.photos}
            language={language}
            venueName={mainVenue.name[language] || mainVenue.name.en}
            onPhotoClick={(p) => setActivePhoto(p)}
          />
        )}

        {/* Section 8: Emotional Closing & Return to Celebrations */}
        <section className="venue-closing-blessing">
          <div className="blessing-divider">
            <LotusDivider />
          </div>

          <h3 className={`blessing-quote ${isHindi ? 'font-devanagari' : ''}`}>
            “{config.closing.message[language] || config.closing.message.en}”
          </h3>

          <div className="blessing-couple-names">
            <span>{config.closing.coupleNames}</span>
          </div>

          <div className="venue-return-actions">
            <button
              type="button"
              className="venue-return-celebrations-btn"
              onClick={() => handleNavSection('celebrations')}
              aria-label={config.closing.returnCta[language] || config.closing.returnCta.en}
            >
              <span className="btn-shimmer" aria-hidden="true" />
              <span className="btn-icon">🪔</span>
              <span className="btn-text">
                {config.closing.returnCta[language] || config.closing.returnCta.en}
              </span>
            </button>
          </div>
        </section>
      </div>

      {/* Lightbox for Venue Photographs */}
      {activePhoto && (
        <div
          className="royal-venue-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
        >
          <div className="lightbox-dialog-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActivePhoto(null)}
              aria-label={isHindi ? 'बंद करें' : 'Close viewer'}
            >
              ✕
            </button>

            <div className="lightbox-art-wrapper">
              <VenueArtwork
                altText={activePhoto.alt[language] || activePhoto.alt.en}
                imageSrc={activePhoto.src}
                className="lightbox-full-view"
              />
            </div>

            <div className="lightbox-caption-bar">
              <h4>{activePhoto.alt[language] || activePhoto.alt.en}</h4>
              {activePhoto.caption && (
                <p>{activePhoto.caption[language] || activePhoto.caption.en}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sacred Traditional Footer */}
      <footer className="venue-sacred-footer" role="contentinfo">
        <p className="footer-copyright">
          {isHindi
            ? 'हितेश एवं शिवानी का शुभ विवाह · आपका सस्नेह स्वागत है'
            : 'Hitesh & Shivanee Wedding · Destination & Directions · With Gratitude'}
        </p>
      </footer>
    </div>
  );
};
