import React, { useState, useEffect } from 'react';
import { WeddingDetails } from '../../types/invitation';

interface CountdownLabels {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface WeddingDateCountdownProps {
  weddingDetails: WeddingDetails;
  isHindi?: boolean;
  awaitingDateTitle: string;
  awaitingDateSubtitle: string;
  countdownLabels: CountdownLabels;
  celebrationBegun: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

/**
 * WeddingDateCountdown Component:
 * - If dateISO is not configured (null/empty): Safely hides countdown and gracefully renders
 *   an authentic royal card with "Our special day awaits" / "शुभ दिन की प्रतीक्षा में".
 * - If dateISO is configured: Computes live countdown against Indian Standard Time (Asia/Kolkata)
 *   without negative values, displaying days, hours, minutes, and seconds.
 */
export const WeddingDateCountdown: React.FC<WeddingDateCountdownProps> = ({
  weddingDetails,
  isHindi = false,
  awaitingDateTitle,
  awaitingDateSubtitle,
  countdownLabels,
  celebrationBegun,
}) => {
  const { dateISO, timeZone = 'Asia/Kolkata' } = weddingDetails;

  const calculateTimeRemaining = (targetISO: string): TimeRemaining | null => {
    const target = new Date(targetISO).getTime();
    if (isNaN(target)) {
      return null;
    }
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isPassed: false };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(() => {
    return dateISO ? calculateTimeRemaining(dateISO) : null;
  });

  useEffect(() => {
    if (!dateISO) {
      setTimeRemaining(null);
      return;
    }

    // Initial calculation
    setTimeRemaining(calculateTimeRemaining(dateISO));

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(dateISO));
    }, 1000);

    return () => clearInterval(interval);
  }, [dateISO, timeZone]);

  // Safely format date string if date is configured and valid
  const formattedDate = React.useMemo(() => {
    if (!dateISO) return null;
    try {
      const parsedDate = new Date(dateISO);
      if (isNaN(parsedDate.getTime())) return null;
      return new Intl.DateTimeFormat(isHindi ? 'hi-IN' : 'en-IN', {
        dateStyle: 'full',
        timeZone,
      }).format(parsedDate);
    } catch {
      return null;
    }
  }, [dateISO, isHindi, timeZone]);

  return (
    <section className="wedding-date-countdown-card" aria-label="Wedding Date and Countdown">
      {/* Decorative Gold Arch Border Vector */}
      <div className="countdown-card-frame" aria-hidden="true">
        <svg viewBox="0 0 400 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="countdown-arch-svg">
          <defs>
            <linearGradient id="dateCardGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#966e1b" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#dfb76c" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#966e1b" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M 10 30 C 120 30 160 8 200 8 C 240 8 280 30 390 30"
            stroke="url(#dateCardGold)"
            strokeWidth="1.2"
          />
          <circle cx="200" cy="8" r="3" fill="#dfb76c" />
          <circle cx="180" cy="14" r="1.5" fill="#dfb76c" />
          <circle cx="220" cy="14" r="1.5" fill="#dfb76c" />
        </svg>
      </div>

      {/* Case 1: Wedding Date is NOT configured yet or invalid (Graceful Placeholder per specs) */}
      {(!dateISO || !timeRemaining) && (
        <div className="awaiting-date-container">
          <div className="sacred-kalash-icon" aria-hidden="true">
            <svg viewBox="0 0 44 44" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#966e1b" />
                  <stop offset="50%" stopColor="#dfb76c" />
                  <stop offset="100%" stopColor="#805710" />
                </linearGradient>
              </defs>
              {/* Sacred Kalash & Coconut with Mango Leaves */}
              <circle cx="22" cy="12" r="7" fill="url(#kalashGold)" />
              <path d="M 12 16 L 22 6 L 32 16 Z" fill="url(#kalashGold)" opacity="0.8" />
              <ellipse cx="22" cy="20" rx="9" ry="3" fill="#a07018" />
              <path d="M 13 20 C 11 30 14 36 22 36 C 30 36 33 30 31 20 Z" fill="url(#kalashGold)" />
              <ellipse cx="22" cy="36" rx="6" ry="2" fill="#520f18" />
            </svg>
          </div>

          <h3 className="awaiting-date-title">{awaitingDateTitle}</h3>
          <p className="awaiting-date-subtitle">{awaitingDateSubtitle}</p>
        </div>
      )}

      {/* Case 2: Valid Wedding Date is configured */}
      {dateISO && timeRemaining && (
        <div className="live-countdown-container">
          {formattedDate && (
            <div className="configured-date-display">
              <span className="date-display-text">{formattedDate}</span>
            </div>
          )}

          {timeRemaining.isPassed ? (
            <div className="celebration-begun-banner" role="status">
              <span className="celebration-begun-text">{celebrationBegun}</span>
            </div>
          ) : (
            <div className="countdown-tiles-deck" role="timer" aria-label="Time remaining until wedding">
              <div className="countdown-tile">
                <span className="countdown-number">{timeRemaining.days}</span>
                <span className="countdown-label">{countdownLabels.days}</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-tile">
                <span className="countdown-number">
                  {String(timeRemaining.hours).padStart(2, '0')}
                </span>
                <span className="countdown-label">{countdownLabels.hours}</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-tile">
                <span className="countdown-number">
                  {String(timeRemaining.minutes).padStart(2, '0')}
                </span>
                <span className="countdown-label">{countdownLabels.minutes}</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-tile">
                <span className="countdown-number">
                  {String(timeRemaining.seconds).padStart(2, '0')}
                </span>
                <span className="countdown-label">{countdownLabels.seconds}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
