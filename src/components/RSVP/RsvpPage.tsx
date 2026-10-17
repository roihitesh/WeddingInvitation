import React, { useState } from 'react';
import {
  RsvpPageProps,
  NavSection,
  RsvpFormData,
  RsvpRecord,
} from '../../types/invitation';
import { defaultRsvpConfig } from '../../config/rsvpPage.config';
import { defaultWeddingDetails } from '../../config/weddingDetails.config';
import { submitRsvp, isBackendConfigured } from '../../services/rsvpService';
import { WeddingNav } from '../WelcomePage/WeddingNav';
import { RsvpIntro } from './RsvpIntro';
import { AttendanceSelector } from './AttendanceSelector';
import { GuestCountSelector } from './GuestCountSelector';
import { EventsAttendingSelector } from './EventsAttendingSelector';
import { RsvpConfirmationCard } from './RsvpConfirmationCard';
import { RoyalWeddingFooter } from '../FinalClosing/RoyalWeddingFooter';
import '../FinalClosing/FinalClosing.css';
import './RsvpPage.css';

/**
 * Page 7: RSVP & Guest Confirmation — Hitesh & Shivanee.
 * A royal Indian digital response card.
 *
 * Capabilities:
 * - Guest name validation
 * - Attendance choice (Accept / Decline)
 * - Guest count selector (configurable max)
 * - Ceremony attendance multi-select
 * - Optional heartfelt blessing/message
 * - Supabase backend persistence with anti-spam and loading states
 * - Elegant post-submission confirmation card
 */
export const RsvpPage: React.FC<RsvpPageProps> = ({
  language,
  onLanguageChange,
  onNavigateSection,
  onBackToWelcome,
  onBackToLanguageSelection,
  weddingDetails: _weddingDetails = defaultWeddingDetails,
}) => {
  const config = defaultRsvpConfig;
  const isHindi = language === 'hi';

  // Form State
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    attendance: null,
    guestCount: 1,
    selectedEvents: ['wedding'],
    message: '',
  });

  // UI / Submission State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [confirmedRecord, setConfirmedRecord] = useState<RsvpRecord | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const handleNavSection = (section: NavSection) => {
    if (section === 'rsvp') {
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

    onNavigateSection(section);
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = config.validation.nameRequired[language] || config.validation.nameRequired.en;
    }

    if (!formData.attendance) {
      newErrors.attendance = config.validation.attendanceRequired[language] || config.validation.attendanceRequired.en;
    }

    if (formData.attendance === 'attending' && formData.guestCount < 1) {
      newErrors.guestCount = config.validation.guestCountInvalid[language] || config.validation.guestCountInvalid.en;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const record: RsvpRecord = {
      guestName: formData.fullName.trim(),
      attendance: formData.attendance!,
      guestCount: formData.attendance === 'attending' ? formData.guestCount : 0,
      selectedEvents: formData.attendance === 'attending' ? formData.selectedEvents : [],
      message: formData.message.trim() || undefined,
    };

    try {
      const result = await submitRsvp(record);

      if (result.success) {
        setConfirmedRecord(record);
        setIsDemoMode(Boolean(result.isDemoMode));
        window.scrollTo({ top: 120, behavior: 'smooth' });
      } else {
        setServerError(result.message);
      }
    } catch (err) {
      console.error('RSVP submission failure:', err);
      setServerError(
        isHindi
          ? 'नेटवर्क समस्या के कारण जवाब दर्ज नहीं हो सका। कृपया पुनः प्रयास करें।'
          : 'Unable to submit response due to a network error. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rsvp-page-root" role="main">
      {/* Top Royal Navigation Bar */}
      <WeddingNav
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={handleNavSection}
        activeSection="rsvp"
        onBackToLanguageSelection={onBackToLanguageSelection}
      />

      {/* Ambient background layers */}
      <div className="rsvp-ambient-bg" aria-hidden="true">
        <div className="rsvp-paper-texture" />
        <div className="rsvp-jaali-watermark" />
        <div className="rsvp-warm-lighting-top" />
        <div className="rsvp-warm-lighting-bottom" />
      </div>

      <div className="rsvp-inner-container">
        {/* Section 1: Page Introduction */}
        <RsvpIntro
          language={language}
          heading={config.heading}
          message={config.message}
        />

        {/* Section 2: Form or Confirmation Card */}
        {confirmedRecord ? (
          <RsvpConfirmationCard
            guestName={confirmedRecord.guestName}
            attendance={confirmedRecord.attendance}
            guestCount={confirmedRecord.guestCount}
            language={language}
            onReturnWelcome={() => handleNavSection('welcome')}
            successAccepted={config.labels.successAccepted[language] || config.labels.successAccepted.en}
            successDeclined={config.labels.successDeclined[language] || config.labels.successDeclined.en}
            successNote={config.labels.successNote[language] || config.labels.successNote.en}
            returnHomeLabel={config.labels.returnHome[language] || config.labels.returnHome.en}
            isDemoMode={isDemoMode}
          />
        ) : (
          <div className="rsvp-form-stage">
            {/* Grand Scalloped Mughal Arch Framing the Card */}
            <div className="rsvp-palace-arch-frame" aria-hidden="true">
              <svg viewBox="0 0 800 120" className="arch-svg-top">
                <path
                  d="M0 120 L0 50 Q400 0 800 50 L800 120"
                  fill="none"
                  stroke="#dfb76c"
                  strokeWidth="2"
                />
                <path
                  d="M30 120 Q400 20 770 120"
                  fill="none"
                  stroke="#dfb76c"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            <form
              className="rsvp-response-card-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="RSVP Response Form"
            >
              {/* Backend Storage Readiness Status Notice */}
              {!isBackendConfigured() && (
                <aside className="rsvp-backend-status-banner" role="status">
                  <span className="notice-icon">ℹ️</span>
                  <div className="notice-content">
                    <strong className="notice-title">
                      {isHindi ? 'ऑनलाइन स्टोरेज सेटअप मोड' : 'RSVP Backend Setup Notice'}
                    </strong>
                    <p className={`notice-text ${isHindi ? 'font-devanagari' : ''}`}>
                      {isHindi
                        ? 'आरएसवीपी स्टोरेज अभी कॉन्फ़िगर नहीं है (डेटाबेस सेटअप अपेक्षित है)। कृपया व्यवस्थापक से संपर्क करें।'
                        : 'RSVP storage is not ready: database backend credentials are awaiting configuration.'}
                    </p>
                  </div>
                </aside>
              )}

              {/* Server / Network Error Banner */}
              {serverError && (
                <aside className="rsvp-server-error-banner" role="alert">
                  <span className="error-icon">⚠️</span>
                  <span className="error-text">{serverError}</span>
                </aside>
              )}

              {/* Field 1: Full Name */}
              <div className="rsvp-field-group">
                <label htmlFor="rsvp-full-name" className="field-label">
                  <span className="label-icon">✍️</span>
                  <span className={`label-text ${isHindi ? 'font-devanagari' : ''}`}>
                    {config.labels.fullName[language] || config.labels.fullName.en}
                  </span>
                  <span className="legend-required">*</span>
                </label>
                <input
                  id="rsvp-full-name"
                  type="text"
                  className={`rsvp-text-input ${errors.fullName ? 'input-has-error' : ''}`}
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  placeholder={config.labels.fullNamePlaceholder[language] || config.labels.fullNamePlaceholder.en}
                  disabled={isSubmitting}
                  autoComplete="name"
                  required
                />
                {errors.fullName && (
                  <p className="field-error-text" role="alert">{errors.fullName}</p>
                )}
              </div>

              {/* Field 2: Attendance Confirmation (Accept / Decline) */}
              <div className="rsvp-field-group">
                <AttendanceSelector
                  value={formData.attendance}
                  onChange={(val) => {
                    setFormData({ ...formData, attendance: val });
                    if (errors.attendance) setErrors({ ...errors, attendance: '' });
                  }}
                  language={language}
                  acceptLabel={config.labels.acceptOption[language] || config.labels.acceptOption.en}
                  acceptSubtext={config.labels.acceptSubtext[language] || config.labels.acceptSubtext.en}
                  declineLabel={config.labels.declineOption[language] || config.labels.declineOption.en}
                  declineSubtext={config.labels.declineSubtext[language] || config.labels.declineSubtext.en}
                  questionLabel={config.labels.attendanceQuestion[language] || config.labels.attendanceQuestion.en}
                  error={errors.attendance}
                />
              </div>

              {/* Conditional Fields: Only displayed when attending */}
              {formData.attendance === 'attending' && (
                <div className="rsvp-attending-subfields-anim">
                  {/* Field 3: Number of Guests */}
                  <div className="rsvp-field-group">
                    <GuestCountSelector
                      count={formData.guestCount}
                      maxGuests={config.maxGuests}
                      onChange={(newCount) => setFormData({ ...formData, guestCount: newCount })}
                      language={language}
                      label={config.labels.guestCountLabel[language] || config.labels.guestCountLabel.en}
                      hint={config.labels.guestCountHint[language] || config.labels.guestCountHint.en}
                      error={errors.guestCount}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Field 4: Ceremonies Attending (If enabled in config) */}
                  {config.eventsAttendanceEnabled && (
                    <div className="rsvp-field-group">
                      <EventsAttendingSelector
                        selectedEvents={formData.selectedEvents}
                        onChange={(events) => setFormData({ ...formData, selectedEvents: events })}
                        language={language}
                        label={config.labels.eventsLabel[language] || config.labels.eventsLabel.en}
                        hint={config.labels.eventsHint[language] || config.labels.eventsHint.en}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Field 5: Message for the Couple */}
              <div className="rsvp-field-group">
                <label htmlFor="rsvp-message" className="field-label">
                  <span className="label-icon">💌</span>
                  <span className={`label-text ${isHindi ? 'font-devanagari' : ''}`}>
                    {config.labels.messageLabel[language] || config.labels.messageLabel.en}
                  </span>
                </label>
                <textarea
                  id="rsvp-message"
                  className="rsvp-textarea-input"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={config.labels.messagePlaceholder[language] || config.labels.messagePlaceholder.en}
                  disabled={isSubmitting}
                  maxLength={500}
                />
                <span className="textarea-char-count">
                  {formData.message.length} / 500
                </span>
              </div>

              {/* Submit Button */}
              <div className="rsvp-submit-action-row">
                <button
                  type="submit"
                  className="rsvp-submit-btn"
                  disabled={isSubmitting}
                  aria-label={config.labels.submitCta[language] || config.labels.submitCta.en}
                >
                  <span className="btn-shimmer" aria-hidden="true" />
                  <span className="btn-icon">{isSubmitting ? '⏳' : '🪔'}</span>
                  <span className="btn-text">
                    {isSubmitting
                      ? config.labels.submitting[language] || config.labels.submitting.en
                      : config.labels.submitCta[language] || config.labels.submitCta.en}
                  </span>
                  {!isSubmitting && <span className="btn-arrow" aria-hidden="true">→</span>}
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="rsvp-privacy-notice">
                {isHindi
                  ? '🔒 आपकी जानकारी पूर्णतः गोपनीय है तथा केवल विवाह व्यवस्थापक परिवार द्वारा ही देखी जा सकेगी।'
                  : '🔒 Your response is strictly private and accessible only to Hitesh & Shivanee’s host family.'}
              </p>
            </form>
          </div>
        )}
      </div>

      {/* Sacred Traditional Footer */}
      <RoyalWeddingFooter
        language={language}
        onLanguageChange={onLanguageChange}
        onNavigateSection={onNavigateSection}
        activeSection="rsvp"
      />
    </div>
  );
};
