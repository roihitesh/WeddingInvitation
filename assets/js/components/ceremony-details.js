import { t, text } from "../core/i18n.js";

export function initCeremonyDetails(wedding, i18n, soundscape = {}) {
  const dialog = document.getElementById("ceremony-dialog");
  const title = document.getElementById("ceremony-dialog-title");
  const date = document.getElementById("ceremony-dialog-date");
  const description = document.getElementById("ceremony-dialog-description");
  const venue = document.getElementById("ceremony-dialog-venue");
  const attire = document.getElementById("ceremony-dialog-attire");
  const maps = document.getElementById("ceremony-dialog-map");
  let activeEvent;

  const renderDetails = (event) => {
    title.textContent = text(event.title);
    date.textContent = new Intl.DateTimeFormat(i18n.getLanguage(), { dateStyle: "full", timeStyle: "short" }).format(new Date(event.dateTime));
    description.textContent = text(event.description) || text(event.tagline);
    venue.textContent = text(event.venueName);
    attire.textContent = `${t("eventAttire")}: ${text(event.dressCode)}`;
    maps.href = event.mapUrl;
    maps.textContent = t("map");
  };

  const open = (event) => {
    activeEvent = event;
    renderDetails(event);
    dialog.showModal();
    document.getElementById("ceremony-dialog-close").focus();
    // Start the looping instrumental on the ceremony card's click gesture.
    soundscape.startCeremonyMusic?.(event.musicUrl).catch(() => {});
  };

  window.addEventListener("ceremony:open", (event) => {
    const match = wedding.events.find((item) => item.id === event.detail?.id);
    if (match) open(match);
  });
  window.addEventListener("wedding:language", () => {
    document.getElementById("ceremony-dialog-close").textContent = t("closeDetails");
    if (activeEvent && dialog.open) renderDetails(activeEvent);
  });
  document.getElementById("ceremony-dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => soundscape.stopCeremonyMusic?.().catch(() => {}));
}
