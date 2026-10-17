import React from 'react';
import {
  StoryMilestoneItem,
  SupportedLanguage,
  StoryPhotoItem,
} from '../../types/invitation';
import { StoryMilestone } from './StoryMilestone';

interface VerticalTimelineProps {
  milestones: StoryMilestoneItem[];
  language: SupportedLanguage;
  onPhotoClick: (photo: StoryPhotoItem) => void;
}

/**
 * Continuous Vertical Gold Timeline Component.
 * Establishes a single continuous, visually unbroken golden spine from Milestone 1 to 6.
 * Features:
 * - Desktop: Central golden spine with alternating milestone branches
 * - Mobile: Left-aligned continuous golden spine with responsive stacked cards
 * - Delicate golden head & foot caps terminating the timeline
 */
export const VerticalTimeline: React.FC<VerticalTimelineProps> = ({
  milestones,
  language,
  onPhotoClick,
}) => {
  const visibleMilestones = milestones
    .filter((m) => m.isVisible !== false)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="vertical-timeline-container" role="feed" aria-label="Relationship Timeline">
      {/* Top Auspicious Gold Finial Cap */}
      <div className="timeline-top-cap" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="cap-svg">
          <circle cx="16" cy="16" r="5" fill="var(--marker-gold, #dfb76c)" />
          <path d="M16 2 L16 30 M2 16 L30 16" stroke="var(--marker-gold, #dfb76c)" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="12" fill="none" stroke="var(--marker-gold-dark, #b8861d)" strokeWidth="1" strokeDasharray="2 3" />
        </svg>
      </div>

      {/* Unbroken Continuous Golden Timeline Spine */}
      <div className="timeline-continuous-spine" aria-hidden="true">
        <div className="spine-shimmer-flow" />
      </div>

      {/* Render All Milestones Sequentially */}
      <div className="timeline-milestones-track">
        {visibleMilestones.map((milestone, idx) => (
          <StoryMilestone
            key={milestone.id}
            milestone={milestone}
            index={idx}
            language={language}
            onPhotoClick={onPhotoClick}
          />
        ))}
      </div>

      {/* Bottom Auspicious Gold Finial Cap */}
      <div className="timeline-bottom-cap" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="cap-svg">
          <circle cx="16" cy="16" r="6" fill="#721625" stroke="var(--marker-gold, #dfb76c)" strokeWidth="1.5" />
          <path d="M16 4 L16 28 M4 16 L28 16" stroke="var(--marker-gold, #dfb76c)" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
};
