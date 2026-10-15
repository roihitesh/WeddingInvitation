import { resolveTenant } from "./tenant-router.js";
import { initI18n, text, t } from "./i18n.js";
import { initEnvelope } from "../components/envelope.js";
import { startCountdown } from "../components/countdown.js";
import { renderTimeline } from "../components/timeline.js";
import { initGallery } from "../components/gallery.js";
import { setupRSVP } from "../components/rsvp.js";
import { initSoundscape } from "./soundscape.js";
import { initLanguageModal } from "../components/LanguageModal.js";
import { initCeremonyDetails } from "../components/ceremony-details.js";
import { initVisualEffects } from "./visual-effects.js";

const setText = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value; };

async function bootstrap() {
  const wedding = await resolveTenant();
  const i18n = initI18n(wedding);
  const soundscape = initSoundscape(wedding);
  initLanguageModal({ wedding, i18n, confirmButton: document.getElementById("enter-invitation"), soundscape });
  initCeremonyDetails(wedding, i18n, soundscape);

  document.title = wedding.meta.title;
  document.querySelector('meta[property="og:title"]').content = wedding.meta.title;
  document.querySelector('meta[property="og:image"]').content = wedding.meta.ogImage;

  const bride = wedding.couple.bride;
  const groom = wedding.couple.groom;
  setText("entry-mantra", text(wedding.blessings.invokingDeity));
  setText("invoking-mantra", text(wedding.blessings.invokingDeity));
  setText("sanskrit-shloka", wedding.blessings.shloka.sanskrit);
  setText("shloka-meaning", wedding.blessings.shloka[`meaning_${i18n.getLanguage()}`] || wedding.blessings.shloka.meaning_en || i18n.t("shlokaMeaning"));
  renderNameLetters(document.getElementById("bride-name"), text(bride.name));
  renderNameLetters(document.getElementById("groom-name"), text(groom.name));
  setText("crest-initial-bride", text(bride.name).charAt(0));
  setText("crest-initial-groom", text(groom.name).charAt(0));
  const renderEntryDetails = (language) => {
    setText("entry-names", `${text(bride.name)} & ${text(groom.name)}`);
    setText("entry-date", new Intl.DateTimeFormat(language, { dateStyle: "long", timeZone: "Asia/Kolkata" }).format(new Date(wedding.muhurat.dateTime)));
  };
  renderEntryDetails(i18n.getLanguage());
  setText("auspicious-tithi", text(wedding.muhurat.auspiciousTithi));
  setText("rsvp-deadline", wedding.rsvp.deadline);
  setText("muhurat-date", `${new Intl.DateTimeFormat(i18n.getLanguage(), { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date(wedding.muhurat.dateTime))}`);
  setText("lineage", "");
  renderLineage(wedding, i18n);
  document.querySelectorAll(".footer-names").forEach((element) => { element.textContent = `${text(bride.name)} & ${text(groom.name)}`; });

  const petalCanvas = document.getElementById("petal-canvas");
  initEnvelope({
    wedding,
    openButton: document.getElementById("enter-invitation"),
    sealButton: document.getElementById("open-patrika"),
    gate: document.getElementById("entry-gate"),
    patrikaScreen: document.getElementById("patrika-screen"),
    main: document.getElementById("invitation"),
    header: document.getElementById("site-header"),
    controls: document.getElementById("floating-controls"),
    canvas: petalCanvas,
    onEnter: () => soundscape.playIntro(),
    onOpen: () => { soundscape.stopIntro(); soundscape.setEnabled(true).catch(() => {}); },
  });

  startCountdown(wedding.muhurat.dateTime);
  renderTimeline(wedding, i18n);
  initGallery(wedding, i18n);
  setupRSVP(wedding, i18n);
  initVisualEffects();

  window.addEventListener("wedding:language", (event) => {
    const language = event.detail.language;
    renderNameLetters(document.getElementById("bride-name"), text(bride.name));
    renderNameLetters(document.getElementById("groom-name"), text(groom.name));
    setText("crest-initial-bride", text(bride.name).charAt(0));
    setText("crest-initial-groom", text(groom.name).charAt(0));
    renderEntryDetails(language);
    setText("shloka-meaning", wedding.blessings.shloka[`meaning_${language}`] || i18n.t("shlokaMeaning"));
    setText("muhurat-date", new Intl.DateTimeFormat(language, { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date(wedding.muhurat.dateTime)));
    document.querySelectorAll(".footer-names").forEach((element) => { element.textContent = `${text(bride.name)} & ${text(groom.name)}`; });
    renderTimeline(wedding, i18n);
    // Gallery owns its single language-change listener.
  });
}

function renderNameLetters(element, value) {
  element.setAttribute("aria-label", value);
  element.setAttribute("role", "text");
  const clusters = typeof Intl.Segmenter === "function"
    ? [...new Intl.Segmenter(document.documentElement.lang, { granularity: "grapheme" }).segment(value)].map((part) => part.segment)
    : Array.from(value);
  const fragment = document.createDocumentFragment();
  clusters.forEach((cluster, index) => {
    const letter = document.createElement("span");
    letter.className = "name-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = cluster === " " ? "\u00a0" : cluster;
    letter.style.setProperty("--letter-index", String(index));
    fragment.append(letter);
  });
  element.replaceChildren(fragment);
}

function renderLineage(wedding, i18n) {
  const host = document.getElementById("lineage");
  const bride = wedding.couple.bride;
  const groom = wedding.couple.groom;
  const side = (person) => {
    const block = document.createElement("div");
    block.className = "lineage-side";
    const parents = document.createElement("strong");
    parents.textContent = text(person.parents);
    const grandparents = document.createElement("span");
    grandparents.textContent = text(person.grandParents);
    block.append(parents, grandparents);
    return block;
  };
  const center = document.createElement("span");
  center.className = "lineage-center";
  center.textContent = i18n.t("lineageTitle");
  host.append(side(bride), center, side(groom));
}

bootstrap().catch((error) => {
  console.error("Invitation setup failed", error);
  document.body.dataset.setupError = "true";
});
