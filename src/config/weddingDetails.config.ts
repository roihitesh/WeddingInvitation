import { WeddingDetails } from '../types/invitation';

/**
 * Wedding Details Configuration for Hitesh & Shivanee.
 * 
 * Configurable parameters:
 * - groom & bride names
 * - dateISO: When null, the countdown is hidden and the graceful "Our Special Day Awaits"
 *   card is displayed. When set to an ISO 8601 string (e.g. "2026-11-28T10:00:00+05:30"),
 *   the live countdown displays real days, hours, minutes, and seconds in Asia/Kolkata timezone.
 * - timeZone: Indian Standard Time (Asia/Kolkata).
 * - venueName & city: Optional venue details (null when unannounced).
 */
export const defaultWeddingDetails: WeddingDetails = {
  groom: 'Hitesh',
  bride: 'Shivanee',
  ampersand: '&',
  dateISO: null, // Set to null as required: no invented fake dates
  timeZone: 'Asia/Kolkata',
  venueName: null,
  city: null,
};
