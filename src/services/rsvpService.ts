import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { RsvpRecord, RsvpSubmissionResult } from '../types/invitation';

/**
 * Supabase Backend Service for Hitesh & Shivanee's Wedding RSVP.
 *
 * Requirements:
 * - Uses public anonymous client with Row Level Security (RLS)
 * - Table name: 'rsvps'
 * - Expected schema:
 *     id (uuid, primary key, default: gen_random_uuid())
 *     guest_name (text, not null)
 *     attendance (text, not null) -- 'attending' | 'declined'
 *     guest_count (integer, not null)
 *     selected_events (text[], default: '{}')
 *     message (text, nullable)
 *     created_at (timestamptz, default: now())
 *
 * Security & Integrity:
 * - Anon key only; service-role keys are never exposed in frontend code.
 * - Table RLS policy: allow INSERT from anon role; disallow public SELECT (guest privacy).
 * - Identifies backend integration points clearly if credentials are not configured.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.warn('Failed to initialize Supabase client:', err);
  }
}

// In-memory duplicate submission guard (prevents rapid-fire double clicks)
const recentSubmissions = new Set<string>();

/**
 * Submits an RSVP record to Supabase backend or provides clear integration fallback.
 */
export async function submitRsvp(record: RsvpRecord): Promise<RsvpSubmissionResult> {
  const normalizedName = record.guestName.trim().toLowerCase();
  const submissionKey = `${normalizedName}_${record.attendance}`;

  // 1. Basic spam & duplicate prevention
  if (recentSubmissions.has(submissionKey)) {
    return {
      success: false,
      message: 'A response has already been submitted for this name recently. Thank you!',
    };
  }

  // 2. Validate input lengths & bounds
  if (!record.guestName || record.guestName.trim().length < 2) {
    return {
      success: false,
      message: 'Please provide a valid full name.',
    };
  }

  if (record.guestName.length > 120) {
    return {
      success: false,
      message: 'Name is too long (maximum 120 characters).',
    };
  }

  if (record.attendance === 'attending' && (record.guestCount < 1 || record.guestCount > 20)) {
    return {
      success: false,
      message: 'Please select a valid guest count (1 to 20).',
    };
  }

  // 3. If Supabase is configured, persist to database
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('rsvps')
        .insert([
          {
            guest_name: record.guestName.trim(),
            attendance: record.attendance,
            guest_count: record.attendance === 'attending' ? record.guestCount : 0,
            selected_events: record.selectedEvents || [],
            message: record.message?.trim() || null,
          },
        ])
        .select('id')
        .single();

      if (error) {
        console.error('Supabase RSVP insert error:', error);
        return {
          success: false,
          message: error.message || 'Unable to save response to database. Please try again.',
        };
      }

      recentSubmissions.add(submissionKey);
      setTimeout(() => recentSubmissions.delete(submissionKey), 60000); // 1 minute window

      return {
        success: true,
        responseId: data?.id,
        message: 'RSVP successfully confirmed and saved to database.',
      };
    } catch (err) {
      console.error('Network error during RSVP submission:', err);
      return {
        success: false,
        message: 'Network error encountered. Please check your connection and try again.',
      };
    }
  }

  // 4. Fallback when VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are not yet configured in .env
  console.info(
    '[RSVP Service Demo Mode]: Supabase credentials not detected in .env. RSVP payload logged for verification:',
    record
  );

  recentSubmissions.add(submissionKey);
  setTimeout(() => recentSubmissions.delete(submissionKey), 60000);

  // Simulate network round-trip for realistic feedback
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    isDemoMode: true,
    responseId: `demo-${Date.now()}`,
    message: 'Response verified and logged in demonstration mode.',
  };
}

/**
 * Checks whether live Supabase backend is configured and ready.
 */
export function isBackendConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}
