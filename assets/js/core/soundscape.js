import { t } from "./i18n.js";

export function initSoundscape(wedding = {}) {
  const button = document.getElementById("audio-toggle");
  const introAudio = wedding.audio?.introMusic ? new Audio(wedding.audio.introMusic) : null;
  const backgroundAudio = wedding.audio?.backgroundMusic ? new Audio(wedding.audio.backgroundMusic) : null;
  if (introAudio) {
    introAudio.preload = "auto";
    introAudio.volume = 0.44;
  }
  if (backgroundAudio) {
    backgroundAudio.loop = true;
    backgroundAudio.preload = "auto";
    backgroundAudio.volume = 0.28;
  }

  let ceremonyAudio;
  let ceremonyTrackActive = false;
  let enabled = false;

  const label = () => {
    button.setAttribute("aria-pressed", String(enabled));
    button.setAttribute("aria-label", `${t("audioLabel")}: ${enabled ? t("soundOn") : t("soundOff")}`);
    button.title = enabled ? t("soundOn") : t("soundOff");
  };
  label();
  window.addEventListener("wedding:language", label);

  async function setEnabled(next) {
    if (next === enabled) return;
    if (next) {
      const activeAudio = ceremonyTrackActive ? ceremonyAudio : backgroundAudio;
      if (activeAudio) {
        await activeAudio.play();
      } else {
        button.setAttribute("aria-label", t("soundUnavailable"));
        return;
      }
      enabled = true;
    } else {
      backgroundAudio?.pause();
      ceremonyAudio?.pause();
      enabled = false;
    }
    label();
  }

  const playIntro = async () => {
    if (!introAudio || (!introAudio.paused && !introAudio.ended)) return;
    try { await introAudio.play(); } catch { /* Audio may wait for the guest's next tap. */ }
  };
  const stopIntro = () => {
    if (!introAudio) return;
    introAudio.pause();
    introAudio.currentTime = 0;
  };

  const startCeremonyMusic = async (musicUrl) => {
    // Any tile opens with music. Non-Mehendi tiles retain the overall invitation score.
    if (!enabled) await setEnabled(true);
    if (!musicUrl) return;

    if (ceremonyAudio) {
      ceremonyAudio.pause();
      ceremonyAudio.currentTime = 0;
    }
    backgroundAudio?.pause();
    ceremonyAudio = new Audio(musicUrl);
    ceremonyAudio.loop = true;
    ceremonyAudio.preload = "auto";
    ceremonyAudio.volume = 0.38;
    ceremonyTrackActive = true;
    await ceremonyAudio.play();
  };

  const stopCeremonyMusic = async () => {
    if (!ceremonyTrackActive) return;
    ceremonyTrackActive = false;
    ceremonyAudio?.pause();
    if (ceremonyAudio) ceremonyAudio.currentTime = 0;
    ceremonyAudio = undefined;
    if (enabled && backgroundAudio) await backgroundAudio.play();
  };

  button.addEventListener("click", () => {
    setEnabled(!enabled).catch(() => { enabled = false; label(); });
  });
  return { setEnabled, playIntro, stopIntro, startCeremonyMusic, stopCeremonyMusic };
}
