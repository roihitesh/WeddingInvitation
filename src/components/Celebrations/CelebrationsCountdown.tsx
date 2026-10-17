import React, { useState, useEffect } from 'react';
import { WeddingDetails, SupportedLanguage } from '../../types/invitation';

interface CelebrationsCountdownProps {
  weddingDetails?: WeddingDetails;
  language: SupportedLanguage;
  heading: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

/**
 * Top Unified Countdown to the Main Wedding Ceremony.
 *
 * Rules:
 * - If wedding date is not configured (`dateISO: null`), the countdown is completely hidden.
 * - If wedding date is configured, displays a single unified countdown in Asia/Kolkata timezone.
 * - Handles event passing without negative numbers.
 */
export const CelebrationsCountdown: React.FC<CelebrationsCountdownProps> = ({
  weddingDetails,
  language,
  heading,
  labels,
}) => {
  const dateISO = weddingDetails?.dateISO;

  const calculateTime = (): TimeRemaining | null => {
    if (!dateISO) return null;
    const target = new Date(dateISO).getTime();
    if (isNaN(target)) return null;

    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isPast: false };
  };

  const [time, setTime] = useState<TimeRemaining | null>(calculateTime);

  useEffect(() => {
    if (!dateISO) return;
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [dateISO]);

  // Gracefully hide the countdown if no date is configured
  if (!dateISO || !time) {
    return null;
  }

  const isHindi = language === 'hi';

  return (
    <aside className="celebrations-countdown-banner" aria-label="Wedding Countdown">
      <div className="countdown-ornament-header">
        <span className="countdown-pip">✦</span>
        <h3 className={`countdown-heading-text ${isHindi ? 'font-devanagari' : ''}`}>
          {time.isPast
            ? isHindi
              ? 'शुभ विवाह समारोह प्रारंभ हो चुका है'
              : 'The Wedding Festivities Have Begun!'
            : heading}
        </h3>
        <span className="countdown-pip">✦</span>
      </div>

      {!time.isPast && (
        <div className="countdown-digits-row">
          <div className="countdown-cell">
            <span className="digit-value">{time.days}</span>
            <span className="digit-label">{labels.days}</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-cell">
            <span className="digit-value">{time.hours < 10 ? `0${time.hours}` : time.hours}</span>
            <span className="digit-label">{labels.hours}</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-cell">
            <span className="digit-value">{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
            <span className="digit-label">{labels.minutes}</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-cell">
            <span className="digit-value">{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
            <span className="digit-label">{labels.seconds}</span>
          </div>
        </div>
      )}
    </aside>
  );
};
