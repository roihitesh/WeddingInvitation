import React from 'react';
import { AttendanceStatus, SupportedLanguage } from '../../types/invitation';

interface AttendanceSelectorProps {
  value: AttendanceStatus | null;
  onChange: (val: AttendanceStatus) => void;
  language: SupportedLanguage;
  acceptLabel: string;
  acceptSubtext: string;
  declineLabel: string;
  declineSubtext: string;
  questionLabel: string;
  error?: string;
}

/**
 * Attendance Choice Selector.
 * Renders two invitation-card style choices:
 * - Joyfully Accept (with gold lotus & celebratory aura)
 * - Regretfully Decline (with respectful namaste icon)
 */
export const AttendanceSelector: React.FC<AttendanceSelectorProps> = ({
  value,
  onChange,
  language,
  acceptLabel,
  acceptSubtext,
  declineLabel,
  declineSubtext,
  questionLabel,
  error,
}) => {
  const isHindi = language === 'hi';

  return (
    <fieldset className="attendance-fieldset">
      <legend className="attendance-legend">
        <span className="legend-star">✦</span>
        <span className="legend-text">{questionLabel}</span>
        <span className="legend-required">*</span>
      </legend>

      <div className="attendance-options-grid" role="radiogroup" aria-label={questionLabel}>
        {/* Card 1: Joyfully Accept */}
        <div
          className={`attendance-card card-accept ${value === 'attending' ? 'card-selected' : ''}`}
          onClick={() => onChange('attending')}
          role="radio"
          aria-checked={value === 'attending'}
          tabIndex={0}
          onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onChange('attending')}
        >
          <div className="card-radio-indicator" aria-hidden="true">
            <div className="indicator-inner" />
          </div>

          <div className="card-icon-wrap" aria-hidden="true">
            <span className="icon-main">🪔</span>
          </div>

          <div className="card-text-group">
            <h4 className={`card-title ${isHindi ? 'font-devanagari' : ''}`}>
              {acceptLabel}
            </h4>
            <p className="card-subtext">{acceptSubtext}</p>
          </div>

          {value === 'attending' && (
            <span className="selected-ribbon" aria-hidden="true">✓</span>
          )}
        </div>

        {/* Card 2: Regretfully Decline */}
        <div
          className={`attendance-card card-decline ${value === 'declined' ? 'card-selected' : ''}`}
          onClick={() => onChange('declined')}
          role="radio"
          aria-checked={value === 'declined'}
          tabIndex={0}
          onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && onChange('declined')}
        >
          <div className="card-radio-indicator" aria-hidden="true">
            <div className="indicator-inner" />
          </div>

          <div className="card-icon-wrap" aria-hidden="true">
            <span className="icon-main">🙏</span>
          </div>

          <div className="card-text-group">
            <h4 className={`card-title ${isHindi ? 'font-devanagari' : ''}`}>
              {declineLabel}
            </h4>
            <p className="card-subtext">{declineSubtext}</p>
          </div>

          {value === 'declined' && (
            <span className="selected-ribbon" aria-hidden="true">✓</span>
          )}
        </div>
      </div>

      {error && <p className="field-error-text" role="alert">{error}</p>}
    </fieldset>
  );
};
