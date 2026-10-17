import React from 'react';
import { AttendanceStatus, SupportedLanguage } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface RsvpConfirmationCardProps {
  guestName: string;
  attendance: AttendanceStatus;
  guestCount: number;
  language: SupportedLanguage;
  onReturnWelcome?: () => void;
  successAccepted: string;
  successDeclined: string;
  successNote: string;
  returnHomeLabel: string;
  isDemoMode?: boolean;
}

/**
 * RSVP Success Confirmation Card.
 * Replaces the response form upon successful persistence.
 * Shows warm congratulations or respectful appreciation.
 */
export const RsvpConfirmationCard: React.FC<RsvpConfirmationCardProps> = ({
  guestName,
  attendance,
  guestCount,
  language,
  onReturnWelcome,
  successAccepted,
  successDeclined,
  successNote,
  returnHomeLabel,
  isDemoMode = false,
}) => {
  const isHindi = language === 'hi';
  const isAttending = attendance === 'attending';

  return (
    <article className="rsvp-confirmation-card" aria-label="RSVP Confirmation">
      {/* Monogram Seal */}
      <div className="confirmation-monogram-wrap">
        <WeddingLogo
          className="confirmation-monogram-logo"
          namesText=""
          hideLockupNames={true}
          hideSubtitle={true}
        />
      </div>

      {/* Decorative Gold Frame Corner Flourishes */}
      <div className="conf-corner corner-tl" aria-hidden="true" />
      <div className="conf-corner corner-tr" aria-hidden="true" />
      <div className="conf-corner corner-bl" aria-hidden="true" />
      <div className="conf-corner corner-br" aria-hidden="true" />

      {/* Auspicious Status Ribbon */}
      <div className={`confirmation-status-pill ${isAttending ? 'pill-attending' : 'pill-declined'}`}>
        <span className="pill-icon">{isAttending ? '🪔' : '🙏'}</span>
        <span className="pill-text">
          {isAttending
            ? isHindi
              ? 'उपस्थिति सस्नेह पुष्ट'
              : 'Attendance Confirmed'
            : isHindi
              ? 'जवाब सादर प्राप्त'
              : 'Response Recorded'}
        </span>
      </div>

      <h3 className={`confirmation-guest-title ${isHindi ? 'font-devanagari' : ''}`}>
        {isHindi ? `प्रिय ${guestName}` : `Dear ${guestName}`}
      </h3>

      <p className={`confirmation-message-text ${isHindi ? 'font-devanagari' : ''}`}>
        “{isAttending ? successAccepted : successDeclined}”
      </p>

      {/* Summary Details Badge */}
      <div className="confirmation-summary-strip">
        <div className="summary-item">
          <span className="summary-label">{isHindi ? 'अतिथि' : 'Guest'}</span>
          <span className="summary-value">{guestName}</span>
        </div>
        <span className="summary-sep">•</span>
        <div className="summary-item">
          <span className="summary-label">{isHindi ? 'स्थिति' : 'Status'}</span>
          <span className="summary-value">
            {isAttending
              ? isHindi
                ? 'उपस्थित'
                : 'Attending'
              : isHindi
                ? 'अनुपस्थित'
                : 'Declined'}
          </span>
        </div>
        {isAttending && (
          <>
            <span className="summary-sep">•</span>
            <div className="summary-item">
              <span className="summary-label">{isHindi ? 'संख्या' : 'Seats'}</span>
              <span className="summary-value">
                {guestCount} {isHindi ? 'अतिथि' : 'Guests'}
              </span>
            </div>
          </>
        )}
      </div>

      {isAttending && (
        <p className="confirmation-note-subtext">
          {successNote}
        </p>
      )}

      {isDemoMode && (
        <aside className="confirmation-demo-banner" role="status">
          <span className="demo-icon">ℹ️</span>
          <span>
            {isHindi
              ? 'डेमो मोड: सुपरबेस एनवायरनमेंट कीज़ सक्रिय होने पर सीधे डेटाबेस में स्थायी रूप से सहेजा जाएगा।'
              : 'Note: Database integration is ready. Configure Supabase credentials in .env to save permanently.'}
          </span>
        </aside>
      )}

      <div className="confirmation-divider">
        <LotusDivider />
      </div>

      <div className="confirmation-actions">
        <button
          type="button"
          className="confirmation-return-btn"
          onClick={onReturnWelcome}
          aria-label={returnHomeLabel}
        >
          <span className="btn-shimmer" aria-hidden="true" />
          <span className="btn-icon">🏛️</span>
          <span className="btn-text">{returnHomeLabel}</span>
        </button>
      </div>
    </article>
  );
};
