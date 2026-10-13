import { t, text } from "../core/i18n.js";

const melodies = {
  haldi: [392, 440, 523.25, 587.33, 659.25, 587.33, 523.25, 440],
  mehendi: [329.63, 392, 440, 523.25, 587.33, 523.25, 440, 392],
  sangeet: [293.66, 349.23, 392, 440, 523.25, 587.33, 523.25, 440, 392, 349.23],
  baraat: [196, 261.63, 392, 523.25, 392, 523.25, 587.33, 523.25, 392],
  phere: [220, 261.63, 329.63, 392, 329.63, 293.66, 261.63, 220],
};

export function initCeremonyDetails(wedding, i18n) {
  const dialog = document.getElementById("ceremony-dialog");
  const title = document.getElementById("ceremony-dialog-title");
  const date = document.getElementById("ceremony-dialog-date");
  const description = document.getElementById("ceremony-dialog-description");
  const venue = document.getElementById("ceremony-dialog-venue");
  const attire = document.getElementById("ceremony-dialog-attire");
  const maps = document.getElementById("ceremony-dialog-map");
  const music = document.getElementById("ceremony-music");
  const note = document.getElementById("ceremony-music-note");
  let context;
  let activeNodes = [];
  let activeAudio;
  let activeEvent;

  const stopMusic = () => {
    activeNodes.forEach((node) => { try { node.stop(); } catch {} });
    activeNodes = [];
    if (activeAudio) { activeAudio.pause(); activeAudio.currentTime = 0; activeAudio = null; }
    music.textContent = t("ceremonyMusic");
    music.setAttribute("aria-pressed", "false");
  };

  const open = (event) => {
    stopMusic();
    activeEvent = event;
    title.textContent = text(event.title);
    date.textContent = new Intl.DateTimeFormat(i18n.getLanguage(), { dateStyle: "full", timeStyle: "short" }).format(new Date(event.dateTime));
    description.textContent = text(event.description) || text(event.tagline);
    venue.textContent = text(event.venueName);
    attire.textContent = `${t("eventAttire")}: ${text(event.dressCode)}`;
    maps.href = event.mapUrl;
    maps.textContent = t("map");
    music.textContent = t("ceremonyMusic");
    note.textContent = t("musicNotice");
    dialog.showModal();
    document.getElementById("ceremony-dialog-close").focus();
  };

  window.addEventListener("ceremony:open", (event) => {
    const match = wedding.events.find((item) => item.id === event.detail?.id);
    if (match) open(match);
  });
  window.addEventListener("wedding:language", () => {
    document.getElementById("ceremony-dialog-close").textContent = t("closeDetails");
    if (activeEvent && dialog.open) open(activeEvent);
  });
  document.getElementById("ceremony-dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", stopMusic);
  music.addEventListener("click", async () => {
    if (music.getAttribute("aria-pressed") === "true") { stopMusic(); return; }
    if (activeEvent.musicUrl) {
      activeAudio = new Audio(activeEvent.musicUrl);
      activeAudio.addEventListener("ended", stopMusic, { once: true });
      await activeAudio.play();
    } else {
      context ||= new (window.AudioContext || window.webkitAudioContext)();
      await context.resume();
      const notes = melodies[activeEvent.id] || melodies.sangeet;
      const base = context.currentTime + .04;
      notes.forEach((frequency, index) => {
        const start = base + index * (activeEvent.id === "phere" ? .46 : .31);
        ["sine", "triangle"].forEach((type, voiceIndex) => {
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          oscillator.type = type;
          oscillator.frequency.setValueAtTime(frequency * (voiceIndex ? 2 : 1), start);
          gain.gain.setValueAtTime(.0001, start);
          gain.gain.exponentialRampToValueAtTime(voiceIndex ? .012 : .045, start + .035);
          gain.gain.exponentialRampToValueAtTime(.0001, start + .24);
          oscillator.connect(gain).connect(context.destination);
          oscillator.start(start);
          oscillator.stop(start + .26);
          activeNodes.push(oscillator);
        });
      });
      window.setTimeout(stopMusic, notes.length * (activeEvent.id === "phere" ? 460 : 310) + 500);
    }
    music.textContent = t("stopMusic");
    music.setAttribute("aria-pressed", "true");
  });
}
