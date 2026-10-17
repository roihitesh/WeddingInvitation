import React, { useEffect, useRef, useState } from 'react';
import {
  StoryMilestoneItem,
  SupportedLanguage,
  StoryPhotoItem,
} from '../../types/invitation';
import { TimelineMarker } from './TimelineMarker';
import { PhotoFrameCollage } from './PhotoFrameCollage';

interface StoryMilestoneProps {
  milestone: StoryMilestoneItem;
  index: number;
  language: SupportedLanguage;
  onPhotoClick: (photo: StoryPhotoItem) => void;
}

/**
 * Individual Story Milestone Component.
 * Supports:
 * - Alternating desktop layout (Image Left / Text Right vs Text Left / Image Right)
 * - Single-column mobile layout with continuous timeline on left
 * - Subtle scroll-triggered entrance animation with IntersectionObserver
 * - Ornamental timeline marker node
 * - Editable bilingual text, optional dates, and editorial photo frame/collage
 */
export const StoryMilestone: React.FC<StoryMilestoneProps> = ({
  milestone,
  index,
  language,
  onPhotoClick,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const milestoneRef = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 1; // 0-based: index 0 is Milestone 1 (Odd), index 1 is Milestone 2 (Even)
  const isHindi = language === 'hi';

  const headingText = milestone.heading[language] || milestone.heading.en;
  const storyText = milestone.story[language] || milestone.story.en;
  const dateText = milestone.date?.[language] || milestone.date?.en;
  const locationText = milestone.location?.[language] || milestone.location?.en;

  useEffect(() => {
    const el = milestoneRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      ref={milestoneRef}
      id={`milestone-${milestone.id}`}
      className={`story-milestone-node ${isEven ? 'milestone-layout-even' : 'milestone-layout-odd'} ${
        isRevealed ? 'milestone-revealed' : 'milestone-hidden'
      }`}
      aria-label={`${headingText} - Milestone ${milestone.order}`}
    >
      {/* Central / Left Timeline Marker Anchor */}
      <div className="milestone-timeline-anchor">
        <TimelineMarker
          type={milestone.markerType}
          order={milestone.order}
          label={headingText}
        />
      </div>

      {/* Two Alternating Halves on Desktop */}
      <div className="milestone-content-grid">
        {/* Visual Half: Editorial Photo / Collage Frame */}
        <div className="milestone-visual-col">
          <PhotoFrameCollage
            primaryPhoto={milestone.primaryPhoto}
            additionalPhotos={milestone.additionalPhotos}
            language={language}
            milestoneTitle={headingText}
            isEven={isEven}
            onPhotoClick={onPhotoClick}
          />
        </div>

        {/* Narrative Half: Romantic Typography Card */}
        <div className="milestone-text-col">
          <div className="milestone-story-card">
            {/* Chapter Header Pill */}
            <div className="milestone-chapter-meta">
              <span className="chapter-badge">
                {isHindi ? `अध्याय ०${milestone.order}` : `Chapter 0${milestone.order}`}
              </span>
              {(dateText || locationText) && (
                <span className="milestone-date-location">
                  {dateText && <span className="meta-date">{dateText}</span>}
                  {dateText && locationText && <span className="meta-sep">•</span>}
                  {locationText && <span className="meta-location">{locationText}</span>}
                </span>
              )}
            </div>

            {/* Romantic Heading */}
            <h2 className={`milestone-title ${isHindi ? 'milestone-title-hindi' : ''}`}>
              {headingText}
            </h2>

            {/* Delicate Gold Flourish Line */}
            <div className="milestone-title-divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-gem">✦</span>
              <span className="divider-line" />
            </div>

            {/* Heartfelt Story Text */}
            <p className={`milestone-narrative ${isHindi ? 'narrative-hindi' : ''}`}>
              {storyText}
            </p>

            {/* Subtle Royal Corner Stamp */}
            <div className="card-filigree-stamp" aria-hidden="true">
              ❧
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
