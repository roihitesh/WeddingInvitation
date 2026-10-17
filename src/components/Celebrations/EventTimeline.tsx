import React from 'react';
import { CelebrationEvent, SupportedLanguage } from '../../types/invitation';
import { EventCard } from './EventCard';

interface EventTimelineProps {
  events: CelebrationEvent[];
  language: SupportedLanguage;
  labels: {
    date: string;
    time: string;
    venue: string;
    dressCode: string;
    viewMap: string;
    eventDetails: string;
  };
  onViewDetails?: (event: CelebrationEvent) => void;
  onMapClick?: (url: string) => void;
}

/**
 * Wedding Celebrations Event Timeline.
 * Renders only enabled events in sequence.
 * Alternates desktop orientation for an editorial magazine look,
 * while giving the main Wedding Ceremony centered prominence.
 */
export const EventTimeline: React.FC<EventTimelineProps> = ({
  events,
  language,
  labels,
  onViewDetails,
  onMapClick,
}) => {
  const enabledEvents = events.filter((e) => e.isEnabled);

  return (
    <section className="celebrations-timeline-feed" aria-label="Celebration Events Schedule">
      {enabledEvents.map((event, index) => (
        <EventCard
          key={event.id}
          event={event}
          language={language}
          labels={labels}
          isEven={index % 2 === 1}
          onViewDetails={onViewDetails}
          onMapClick={onMapClick}
        />
      ))}
    </section>
  );
};
