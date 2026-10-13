import { tenants, themePresets } from "../../../config/tenants.js";
import { weddingData as fallbackWedding, sharedInterface } from "../../../config/weddings/demo-wedding.js";

export function requestedTenantId(location = window.location) {
  const query = new URLSearchParams(location.search).get("id");
  const hash = decodeURIComponent(location.hash.replace(/^#/, "").trim());
  return (query || hash || "demo-wedding").toLowerCase();
}

function isValidWedding(wedding) {
  return Boolean(
    wedding && typeof wedding.id === "string" &&
    wedding.meta && wedding.theme && wedding.supportedLanguages?.length && wedding.ui &&
    wedding.blessings?.invokingDeity && wedding.blessings?.shloka &&
    wedding.couple?.bride?.name && wedding.couple?.groom?.name &&
    wedding.muhurat?.dateTime && Array.isArray(wedding.events) && Array.isArray(wedding.gallery) &&
    wedding.rsvp && typeof wedding.rsvp.googleSheetEndpoint === "string"
  );
}

export async function resolveTenant(location = window.location) {
  const requestedId = requestedTenantId(location);
  const requestedWedding = tenants[requestedId];
  const wedding = requestedWedding && isValidWedding(requestedWedding) ? requestedWedding : fallbackWedding;
  const ui = Object.fromEntries(["en", "hi"].map((language) => [
    language,
    { ...(sharedInterface[language] || sharedInterface.en), ...(wedding.ui[language] || {}) },
  ]));
  const loadTheme = themePresets[wedding.theme.preset] || themePresets["royal-maroon-gold"];
  const { theme } = await loadTheme();
  const overrides = wedding.theme.customOverrides || {};
  Object.entries({ ...theme, ...overrides }).forEach(([name, value]) => {
    if (/^--[a-z0-9-]+$/i.test(name) && typeof value === "string") {
      document.documentElement.style.setProperty(name, value);
    }
  });

  return { ...wedding, ui, requestedId, notFound: requestedId !== wedding.id && requestedId !== "demo-wedding" };
}
