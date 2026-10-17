import React from 'react';
import { NavSection, SupportedLanguage, WeddingDetails } from '../../types/invitation';
import { defaultClosingConfig } from '../../config/closingSection.config';
import { defaultVenueConfig } from '../../config/venuePage.config';
import { defaultWeddingDetails } from '../../config/weddingDetails.config';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface FinalInvitationClosingProps {
  language: SupportedLanguage;
  onNavigateSection: (section: NavSection) => void;
  weddingDetails?: WeddingDetails;
}

/**
 * Page 9: Final Wedding Invitation & Closing Section — Hitesh & Shivanee.
 *
 * Visual Concept:
 * - Emotional, warm, and memorable royal stationery conclusion.
 * - Centered H&S royal monogram with delicate Mughal palace arch.
 * - Heartfelt bilingual invitation message from the couple.
 * - Compact summary of configured wedding details (strictly zero invented information).
 * - Direct action links to Wedding Celebrations and Photo Gallery.
 */
export const FinalInvitationClosing: React.FC<FinalInvitationClosingProps> = ({
  language,
  onNavigateSection,
  weddingDetails = defaultWeddingDetails,
}) => {
  const isHindi = language === 'hi';
  const config = defaultClosingConfig;
  const mainVenue = defaultVenueConfig.venues?.find((v) => v.isMainVenue) || defaultVenueConfig.venues?.[0];

  const invitationMessage = config.finalInvitationMessage[language] || config.finalInvitationMessage.en;
  const exploreLabel = config.actions.exploreCelebrations[language] || config.actions.exploreCelebrations.en;
  const memoriesLabel = config.actions.viewMemories[language] || config.actions.viewMemories.en;

  // Format configured wedding date if present (IST timezone)
  const formattedDate = React.useMemo(() => {
    if (!weddingDetails?.dateISO) return null;
    try {
      const date = new Date(weddingDetails.dateISO);
      return new Intl.DateTimeFormat(isHindi ? 'hi-IN' : 'en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: weddingDetails.timeZone || 'Asia/Kolkata',
      }).format(date);
    } catch {
      return null;
    }
  }, [weddingDetails?.dateISO, weddingDetails?.timeZone, isHindi]);

  // Read configured ceremony time if provided
  const ceremonyTime = mainVenue?.timing ? (mainVenue.timing[language] || mainVenue.timing.en) : null;

  // Read configured venue name
  const venueName = mainVenue?.name
    ? (mainVenue.name[language] || mainVenue.name.en)
    : weddingDetails?.venueName || null;

  // Read configured venue address
  const venueAddress = mainVenue?.fullAddress
    ? (mainVenue.fullAddress[language] || mainVenue.fullAddress.en)
    : weddingDetails?.city || null;

  // Check if any valid directions URL exists
  const directionsUrl = mainVenue?.googleMapsUrl || null;

  // Check if at least one detail is configured
  const hasConfiguredDetails = Boolean(formattedDate || ceremonyTime || venueName || venueAddress);

  return (
    <section
      className="final-invitation-section"
      aria-label={isHindi ? 'अंतिम आमंत्रण संदेश' : 'Final Wedding Invitation'}
    >
      <div className="final-invitation-container">
        {/* Decorative Royal Palace Arch Outer Frame */}
        <div className="final-invitation-card">
          {/* Top Palace Arch Ornament */}
          <div className="final-card-top-arch" aria-hidden="true">
            <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="arch-flourish-svg">
              <path
                d="M 0 60 Q 150 10 250 10 Q 350 10 500 60"
                fill="none"
                stroke="url(#finalGoldGrad)"
                strokeWidth="2.5"
              />
              <path
                d="M 50 60 Q 170 25 250 25 Q 330 25 450 60"
                fill="none"
                stroke="url(#finalGoldGrad)"
                strokeWidth="1.2"
                strokeDasharray="4,4"
              />
              <circle cx="250" cy="18" r="4" fill="#dfb76c" />
              <defs>
                <linearGradient id="finalGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#dfb76c" stopOpacity="0" />
                  <stop offset="25%" stopColor="#dfb76c" />
                  <stop offset="50%" stopColor="#fdf0cd" />
                  <stop offset="75%" stopColor="#dfb76c" />
                  <stop offset="100%" stopColor="#dfb76c" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Centered Monogram Emblem */}
          <div className="final-monogram-wrapper">
            <WeddingLogo
              className="final-invitation-logo"
              namesText=""
              hideLockupNames={true}
              hideSubtitle={true}
            />
          </div>

          {/* Couple Names */}
          <div className="final-couple-names-wrap">
            <h2 className="final-couple-names cursive-display">
              {config.coupleNames}
            </h2>
            <div className="final-couple-subtext">
              <span className="star-sparkle">✦</span>
              <span className="invitation-tagline">
                {isHindi ? 'सस्नेह विवाह निमंत्रण' : 'Cordial Wedding Invitation'}
              </span>
              <span className="star-sparkle">✦</span>
            </div>
          </div>

          {/* Golden Lotus Divider */}
          <div className="final-divider-wrap">
            <LotusDivider />
          </div>

          {/* Heartfelt Invitation Message */}
          <div className="final-message-container">
            <p className={`final-invitation-quote ${isHindi ? 'font-devanagari quote-hindi' : ''}`}>
              “{invitationMessage}”
            </p>
          </div>

          {/* Configured Wedding Details Summary (Only display configured fields) */}
          {hasConfiguredDetails && (
            <div className="final-details-summary-card">
              <div className="summary-card-inner">
                <div className="summary-card-header">
                  <span className="summary-gold-line" />
                  <span className={`summary-title ${isHindi ? 'font-devanagari' : ''}`}>
                    {isHindi ? 'शुभ विवाह विवरण' : 'Wedding Particulars'}
                  </span>
                  <span className="summary-gold-line" />
                </div>

                <div className="summary-details-grid">
                  {/* Wedding Date */}
                  {formattedDate && (
                    <div className="summary-detail-item">
                      <span className="detail-icon" aria-hidden="true">📅</span>
                      <div className="detail-content">
                        <span className="detail-label">
                          {config.detailsLabels.weddingDate[language] || config.detailsLabels.weddingDate.en}
                        </span>
                        <span className={`detail-value ${isHindi ? 'font-devanagari' : ''}`}>
                          {formattedDate}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Main Ceremony Time */}
                  {ceremonyTime && (
                    <div className="summary-detail-item">
                      <span className="detail-icon" aria-hidden="true">🪔</span>
                      <div className="detail-content">
                        <span className="detail-label">
                          {config.detailsLabels.ceremonyTime[language] || config.detailsLabels.ceremonyTime.en}
                        </span>
                        <span className={`detail-value ${isHindi ? 'font-devanagari' : ''}`}>
                          {ceremonyTime}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Venue Name */}
                  {venueName && (
                    <div className="summary-detail-item">
                      <span className="detail-icon" aria-hidden="true">🏰</span>
                      <div className="detail-content">
                        <span className="detail-label">
                          {config.detailsLabels.mainVenue[language] || config.detailsLabels.mainVenue.en}
                        </span>
                        <span className={`detail-value ${isHindi ? 'font-devanagari' : ''}`}>
                          {venueName}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Venue Address */}
                  {venueAddress && (
                    <div className="summary-detail-item">
                      <span className="detail-icon" aria-hidden="true">📍</span>
                      <div className="detail-content">
                        <span className="detail-label">
                          {config.detailsLabels.venueAddress[language] || config.detailsLabels.venueAddress.en}
                        </span>
                        <span className={`detail-value ${isHindi ? 'font-devanagari' : ''}`}>
                          {venueAddress}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Directions Action (Only when URL is valid) */}
                {directionsUrl && (
                  <div className="summary-directions-row">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="summary-directions-link"
                    >
                      <span>{config.detailsLabels.getDirections[language] || config.detailsLabels.getDirections.en}</span>
                      <span className="arrow-icon">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Main Action Buttons */}
          <div className="final-actions-row">
            <button
              type="button"
              className="final-action-btn celebrations-btn"
              onClick={() => onNavigateSection('celebrations')}
            >
              <span className="btn-sparkle">🌸</span>
              <span className={`btn-text ${isHindi ? 'font-devanagari' : ''}`}>{exploreLabel}</span>
            </button>

            <button
              type="button"
              className="final-action-btn memories-btn"
              onClick={() => onNavigateSection('gallery')}
            >
              <span className="btn-sparkle">✨</span>
              <span className={`btn-text ${isHindi ? 'font-devanagari' : ''}`}>{memoriesLabel}</span>
            </button>
          </div>

          {/* Corner Filigrees */}
          <span className="final-corner-flourish corner-tl" aria-hidden="true" />
          <span className="final-corner-flourish corner-tr" aria-hidden="true" />
          <span className="final-corner-flourish corner-bl" aria-hidden="true" />
          <span className="final-corner-flourish corner-br" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
