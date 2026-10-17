import React from 'react';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface InvitationMessageProps {
  heading: string;
  message: string;
  isHindi?: boolean;
}

/**
 * InvitationMessage Component:
 * Displays the sacred invitation heading and heart-touching message,
 * followed by a delicate gold LotusDivider.
 */
export const InvitationMessage: React.FC<InvitationMessageProps> = ({
  heading,
  message,
  isHindi = false,
}) => {
  return (
    <div className={`welcome-invitation-message-block ${isHindi ? 'message-hindi' : 'message-english'}`}>
      <h2 className="welcome-families-heading">{heading}</h2>
      <p className="welcome-families-body">“{message}”</p>
      <LotusDivider className="welcome-lotus-separator" />
    </div>
  );
};
