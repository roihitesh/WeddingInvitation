import React from 'react';

interface EventDateTimeProps {
  date?: string;
  time?: string;
  labelDate: string;
  labelTime: string;
}

/**
 * Event Date and Time Display.
 * Only renders when date or time has been configured in the wedding details.
 * Strictly avoids showing placeholder/fake date strings.
 */
export const EventDateTime: React.FC<EventDateTimeProps> = ({
  date,
  time,
  labelDate,
  labelTime,
}) => {
  if (!date && !time) {
    return null;
  }

  return (
    <div className="event-meta-datetime-strip" aria-label="Event Schedule">
      {date && (
        <div className="meta-schedule-item item-date">
          <span className="schedule-icon" aria-hidden="true">📅</span>
          <div className="schedule-text-group">
            <span className="schedule-label">{labelDate}</span>
            <span className="schedule-value">{date}</span>
          </div>
        </div>
      )}

      {date && time && <span className="meta-schedule-divider" aria-hidden="true">|</span>}

      {time && (
        <div className="meta-schedule-item item-time">
          <span className="schedule-icon" aria-hidden="true">⏰</span>
          <div className="schedule-text-group">
            <span className="schedule-label">{labelTime}</span>
            <span className="schedule-value">{time}</span>
          </div>
        </div>
      )}
    </div>
  );
};
