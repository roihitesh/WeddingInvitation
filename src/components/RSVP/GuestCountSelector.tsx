import React from 'react';
import { SupportedLanguage } from '../../types/invitation';

interface GuestCountSelectorProps {
  count: number;
  maxGuests: number;
  onChange: (newCount: number) => void;
  language: SupportedLanguage;
  label: string;
  hint: string;
  error?: string;
  disabled?: boolean;
}

/**
 * Guest Count Selector Component.
 * Supports elegant +/- steppers and numbered count badges up to `maxGuests`.
 */
export const GuestCountSelector: React.FC<GuestCountSelectorProps> = ({
  count,
  maxGuests,
  onChange,
  language,
  label,
  hint,
  error,
  disabled = false,
}) => {
  const isHindi = language === 'hi';

  const handleDecrement = () => {
    if (count > 1) {
      onChange(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < maxGuests) {
      onChange(count + 1);
    }
  };

  return (
    <div className={`guest-count-container ${disabled ? 'guest-count-disabled' : ''}`}>
      <div className="count-label-header">
        <label htmlFor="guest-count-stepper" className="count-label">
          <span className="label-icon">👥</span>
          <span className={`label-title ${isHindi ? 'font-devanagari' : ''}`}>{label}</span>
          <span className="legend-required">*</span>
        </label>
        <span className="count-hint-text">{hint}</span>
      </div>

      <div className="guest-stepper-row" id="guest-count-stepper">
        <button
          type="button"
          className="stepper-btn btn-minus"
          onClick={handleDecrement}
          disabled={disabled || count <= 1}
          aria-label={isHindi ? 'अतिथि कम करें' : 'Decrease guest count'}
        >
          −
        </button>

        <div className="stepper-display" aria-live="polite">
          <span className="stepper-number">{count}</span>
          <span className="stepper-unit">
            {count === 1
              ? isHindi
                ? 'अतिथि (स्वयं)'
                : 'Guest (Self)'
              : isHindi
                ? 'अतिथिगण'
                : 'Guests'}
          </span>
        </div>

        <button
          type="button"
          className="stepper-btn btn-plus"
          onClick={handleIncrement}
          disabled={disabled || count >= maxGuests}
          aria-label={isHindi ? 'अतिथि बढ़ाएं' : 'Increase guest count'}
        >
          +
        </button>
      </div>

      {/* Quick Select Number Pills */}
      <div className="count-quick-pills" role="group" aria-label="Quick guest selection">
        {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            className={`count-pill-btn ${count === n ? 'pill-active' : ''}`}
            onClick={() => onChange(n)}
            disabled={disabled}
            aria-pressed={count === n}
          >
            {n}
          </button>
        ))}
      </div>

      {error && <p className="field-error-text" role="alert">{error}</p>}
    </div>
  );
};
