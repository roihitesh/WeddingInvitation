import React from 'react';
import { SupportedLanguage } from '../../types/invitation';
import { defaultCelebrationsConfig } from '../../config/celebrationsPage.config';

interface EventsAttendingSelectorProps {
  selectedEvents: string[];
  onChange: (events: string[]) => void;
  language: SupportedLanguage;
  label: string;
  hint: string;
}

/**
 * Events Attending Multi-Select Component.
 * Dynamically displays enabled wedding ceremonies (Haldi, Mehendi, Sangeet, Wedding, Reception)
 * with celebratory checkbox cards.
 */
export const EventsAttendingSelector: React.FC<EventsAttendingSelectorProps> = ({
  selectedEvents,
  onChange,
  language,
  label,
  hint,
}) => {
  const isHindi = language === 'hi';
  const availableEvents = defaultCelebrationsConfig.events.filter((e) => e.isEnabled);

  const toggleEvent = (eventId: string) => {
    if (selectedEvents.includes(eventId)) {
      onChange(selectedEvents.filter((id) => id !== eventId));
    } else {
      onChange([...selectedEvents, eventId]);
    }
  };

  const getEventEmoji = (type: string) => {
    switch (type) {
      case 'haldi': return '🟡';
      case 'mehendi': return '🌿';
      case 'sangeet': return '🎵';
      case 'wedding': return '🪔';
      case 'reception': return '🥂';
      default: return '✦';
    }
  };

  return (
    <div className="events-attending-group">
      <div className="events-label-header">
        <label className="events-group-title">
          <span className="title-icon">🪷</span>
          <span className={`title-text ${isHindi ? 'font-devanagari' : ''}`}>{label}</span>
        </label>
        <span className="events-hint-text">{hint}</span>
      </div>

      <div className="events-checkbox-grid" role="group" aria-label={label}>
        {availableEvents.map((event) => {
          const isChecked = selectedEvents.includes(event.id);
          const eventTitle = event.title[language] || event.title.en;

          return (
            <div
              key={event.id}
              className={`event-check-card ${isChecked ? 'event-check-selected' : ''}`}
              onClick={() => toggleEvent(event.id)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && toggleEvent(event.id)}
            >
              <div className="check-box-indicator" aria-hidden="true">
                {isChecked && <span className="check-mark">✓</span>}
              </div>

              <span className="event-emoji" aria-hidden="true">
                {getEventEmoji(event.type)}
              </span>

              <span className={`event-name-text ${isHindi ? 'font-devanagari' : ''}`}>
                {eventTitle}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
