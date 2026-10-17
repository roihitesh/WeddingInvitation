import test from 'node:test';
import assert from 'node:assert/strict';

// Import configurations
import { defaultContent } from '../src/config/content.config.ts';
import { welcomePageContent } from '../src/config/welcomePage.config.ts';
import { defaultWeddingDetails } from '../src/config/weddingDetails.config.ts';
import { defaultStoryPageConfig } from '../src/config/storyPage.config.ts';
import { defaultCelebrationsConfig } from '../src/config/celebrationsPage.config.ts';
import { defaultVenueConfig } from '../src/config/venuePage.config.ts';
import { defaultRsvpConfig } from '../src/config/rsvpPage.config.ts';
import { defaultGalleryConfig } from '../src/config/galleryPage.config.ts';
import { defaultClosingConfig } from '../src/config/closingSection.config.ts';
import { submitRsvp, isBackendConfigured } from '../src/services/rsvpService.ts';

test('1. Couple Names & Royal Monogram Verification', () => {
  assert.equal(defaultWeddingDetails.groom, 'Hitesh');
  assert.equal(defaultWeddingDetails.bride, 'Shivanee');
  assert.equal(defaultContent.couple.groom, 'Hitesh');
  assert.equal(defaultContent.couple.bride, 'Shivanee');
  assert.equal(defaultClosingConfig.coupleNames, 'Hitesh & Shivanee');
});

test('2. Language Selection & Bilingual Copy Consistency', () => {
  // English Content
  const enWelcome = welcomePageContent.en;
  assert.ok(enWelcome.invitationHeading.length > 0);
  assert.equal(enWelcome.nav.welcome, 'Welcome');
  assert.equal(enWelcome.nav.ourStory, 'Our Story');
  assert.equal(enWelcome.nav.celebrations, 'Celebrations');
  assert.equal(enWelcome.nav.venue, 'Venue');

  // Hindi Content in Authentic Devanagari
  const hiWelcome = welcomePageContent.hi;
  assert.ok(hiWelcome.invitationHeading.length > 0);
  assert.equal(hiWelcome.nav.welcome, 'स्वागतम्');
  assert.equal(hiWelcome.nav.ourStory, 'हमारी कहानी');
  assert.equal(hiWelcome.nav.celebrations, 'मांगलिक कार्यक्रम');
  assert.equal(hiWelcome.nav.venue, 'विवाह स्थल');

  // Verify Hindi uses Devanagari characters (Unicode range \u0900-\u097F)
  const devanagariRegex = /[\u0900-\u097F]/;
  assert.ok(devanagariRegex.test(hiWelcome.invitationHeading), 'Hindi heading must contain Devanagari text');
  assert.ok(devanagariRegex.test(defaultClosingConfig.finalInvitationMessage.hi), 'Hindi closing must contain Devanagari text');
});

test('3. Wedding Date & Countdown Safety Logic', () => {
  // Helper simulating calculateTimeRemaining
  const calculateCountdown = (targetISO: string | null) => {
    if (!targetISO) return null;
    const target = new Date(targetISO).getTime();
    if (isNaN(target)) return null;
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

  // Case A: Unconfigured date (null)
  assert.equal(calculateCountdown(null), null, 'Unconfigured date must return null');

  // Case B: Invalid date string (must not crash, must return null)
  assert.equal(calculateCountdown('invalid-date-string'), null, 'Invalid date must return null');

  // Case C: Past date (must return zeroed countdown with isPassed=true, never negative numbers)
  const pastResult = calculateCountdown('2020-01-01T00:00:00+05:30');
  assert.ok(pastResult);
  assert.equal(pastResult.isPassed, true);
  assert.equal(pastResult.days, 0);
  assert.equal(pastResult.hours, 0);
  assert.equal(pastResult.minutes, 0);
  assert.equal(pastResult.seconds, 0);

  // Case D: Future date (must return positive countdown)
  const futureISO = new Date(Date.now() + 10 * 86400000).toISOString();
  const futureResult = calculateCountdown(futureISO);
  assert.ok(futureResult);
  assert.equal(futureResult.isPassed, false);
  assert.ok(futureResult.days >= 9 && futureResult.days <= 10);
});

test('4. Our Story: Order of 6 Relationship Milestones', () => {
  const milestones = defaultStoryPageConfig.milestones;
  assert.equal(milestones.length, 6, 'Must contain exactly 6 relationship milestones');

  const expectedTypes = [
    'first-meeting',
    'first-crush',
    'sharing-feelings',
    'trip-main',
    'family-blessings',
    'tying-knot',
  ];

  milestones.forEach((m, idx) => {
    assert.equal(m.order, idx + 1, `Milestone order must be consecutive (${idx + 1})`);
    assert.equal(m.primaryPhoto.symbolicType, expectedTypes[idx], `Milestone ${idx + 1} symbolic type match`);
    assert.ok(m.heading.en.length > 0);
    assert.ok(m.heading.hi.length > 0);
    assert.ok(m.story.en.length > 0);
    assert.ok(m.story.hi.length > 0);
  });
});

test('5. Celebrations & Venue: Zero Invented Data & Conditional Visibility', () => {
  const events = defaultCelebrationsConfig.events;
  assert.ok(events.length >= 4, 'Must have wedding events configured');

  // Wedding Ceremony must have prominent styling flag
  const weddingEvent = events.find((e) => e.id === 'wedding');
  assert.ok(weddingEvent, 'Wedding Ceremony event must exist');
  assert.equal(weddingEvent.type, 'wedding', 'Wedding event must be of type wedding');

  // Venue details: verify unconfigured details are undefined/null (no invented fake details)
  const mainVenue = defaultVenueConfig.venues.find((v) => v.isMainVenue);
  assert.ok(mainVenue, 'Main wedding venue must be configured');
  assert.equal(mainVenue.fullAddress, undefined, 'Unconfirmed fullAddress must remain undefined');
  assert.equal(mainVenue.eventDate, undefined, 'Unconfirmed eventDate must remain undefined');
  assert.equal(mainVenue.timing, undefined, 'Unconfirmed timing must remain undefined');
  assert.equal(mainVenue.googleMapsUrl, null, 'Unconfirmed googleMapsUrl must remain null');
});

test('6. RSVP Form Validation & Storage Readiness', async () => {
  // Case A: Missing or short guest name
  const invalidNameResult = await submitRsvp({
    guestName: ' ',
    attendance: 'attending',
    guestCount: 2,
  });
  assert.equal(invalidNameResult.success, false);
  assert.match(invalidNameResult.message, /valid full name/i);

  // Case B: Attendance attending with invalid guest count (0)
  const invalidCountResult = await submitRsvp({
    guestName: 'Ramesh Sharma',
    attendance: 'attending',
    guestCount: 0,
  });
  assert.equal(invalidCountResult.success, false);
  assert.match(invalidCountResult.message, /guest count/i);

  // Case C: When backend credentials are not provided, indicates storage is not ready
  if (!isBackendConfigured()) {
    const unconfiguredResult = await submitRsvp({
      guestName: 'Ramesh Sharma',
      attendance: 'attending',
      guestCount: 2,
    });
    assert.equal(unconfiguredResult.success, false);
    assert.match(unconfiguredResult.message, /storage is not ready/i);
  }
});

test('7. Photo Gallery: Categories & Editorial Layout', () => {
  const categories = defaultGalleryConfig.categories;
  assert.equal(categories.length, 5, 'Must have 5 categories');
  assert.equal(categories[0].id, 'all');
  assert.equal(categories[1].id, 'journey');
  assert.equal(categories[2].id, 'travel');
  assert.equal(categories[3].id, 'moments');
  assert.equal(categories[4].id, 'celebrations');

  // Filter verification
  const photos = defaultGalleryConfig.photos;
  assert.ok(photos.length >= 6, 'Must contain photo memories');

  const journeyPhotos = photos.filter((p) => p.category === 'journey');
  assert.ok(journeyPhotos.length > 0, 'Must have journey photos');

  // Natural aspect ratios
  const allowedRatios = ['landscape', 'portrait', 'square'];
  photos.forEach((p) => {
    assert.ok(allowedRatios.includes(p.aspectRatio || 'landscape'), 'Must use natural aspect ratio');
    assert.ok(p.symbolicType, 'Pending couple photos must use symbolic royal art type');
  });
});

test('8. Final Closing Section & Refined Footer Links', () => {
  const footer = defaultClosingConfig.footer;
  assert.equal(footer.navLinks.welcome.en, 'Welcome');
  assert.equal(footer.navLinks.story.en, 'Our Story');
  assert.equal(footer.navLinks.celebrations.en, 'Celebrations');
  assert.equal(footer.navLinks.venue.en, 'Venue');
  assert.equal(footer.navLinks.rsvp.en, 'RSVP');
  assert.equal(footer.navLinks.gallery.en, 'Memories');

  // Closing quote
  assert.equal(
    defaultClosingConfig.footer.closingMessage.en,
    'Made with love, shared with family, remembered forever.'
  );
  assert.equal(
    defaultClosingConfig.footer.closingMessage.hi,
    'प्यार से सजा यह सफ़र, अपनों के साथ और यादों में हमेशा।'
  );
});
