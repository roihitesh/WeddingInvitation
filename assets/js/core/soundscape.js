import { t } from "./i18n.js";

export function initSoundscape() {
  const button = document.getElementById("audio-toggle");
  let audioContext;
  let master;
  let voices = [];
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
      const AudioContextType = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextType) {
        button.setAttribute("aria-label", t("soundUnavailable"));
        return;
      }
      audioContext ||= new AudioContextType();
      await audioContext.resume();
      if (!enabled) playOpeningChime(audioContext);
      master = audioContext.createGain();
      master.gain.setValueAtTime(0, audioContext.currentTime);
      master.gain.linearRampToValueAtTime(0.055, audioContext.currentTime + 1.8);
      master.connect(audioContext.destination);

      const droneFilter = audioContext.createBiquadFilter();
      droneFilter.type = "lowpass";
      droneFilter.frequency.value = 1100;
      droneFilter.connect(master);
      [73.42, 110, 146.83, 220].forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = index === 2 ? "triangle" : "sine";
        oscillator.frequency.value = frequency;
        gain.gain.value = [0.34, 0.23, 0.13, 0.08][index];
        oscillator.connect(gain).connect(droneFilter);
        oscillator.start();
        voices.push(oscillator);
      });

      // A very quiet, breathy upper tone adds a gentle shehnai-like colour to the drone.
      const reed = audioContext.createOscillator();
      const reedGain = audioContext.createGain();
      const reedFilter = audioContext.createBiquadFilter();
      reed.type = "triangle";
      reed.frequency.value = 293.66;
      reedFilter.type = "lowpass";
      reedFilter.frequency.value = 760;
      reedGain.gain.value = 0.018;
      reed.connect(reedFilter).connect(reedGain).connect(master);
      reed.start();
      voices.push(reed);
      enabled = true;
    } else {
      if (master && audioContext) {
        master.gain.cancelScheduledValues(audioContext.currentTime);
        master.gain.setTargetAtTime(0, audioContext.currentTime, 0.12);
        window.setTimeout(() => {
          voices.forEach((voice) => { try { voice.stop(); } catch {} });
          voices = [];
        }, 600);
      }
      enabled = false;
    }
    label();
  }

  button.addEventListener("click", () => { setEnabled(!enabled).catch(() => { enabled = false; label(); }); });
  return { setEnabled };
}

function playOpeningChime(context) {
  const now = context.currentTime;
  [659.25, 880, 1174.66].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const delay = context.createDelay(.6);
    const feedback = context.createGain();
    const filter = context.createBiquadFilter();
    oscillator.type = index === 0 ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(frequency, now + index * .075);
    filter.type = "lowpass";
    filter.frequency.value = 4200;
    gain.gain.setValueAtTime(.0001, now + index * .075);
    gain.gain.exponentialRampToValueAtTime(.035 / (index + 1), now + index * .075 + .025);
    gain.gain.exponentialRampToValueAtTime(.0001, now + 1.1);
    delay.delayTime.value = .22;
    feedback.gain.value = .2;
    oscillator.connect(filter).connect(gain).connect(context.destination);
    gain.connect(delay).connect(feedback).connect(delay);
    delay.connect(context.destination);
    oscillator.start(now + index * .075);
    oscillator.stop(now + 1.15);
  });
  const pluck = context.createOscillator();
  const pluckGain = context.createGain();
  pluck.type = "triangle";
  pluck.frequency.setValueAtTime(392, now + .04);
  pluck.frequency.exponentialRampToValueAtTime(293.66, now + .32);
  pluckGain.gain.setValueAtTime(.0001, now + .04);
  pluckGain.gain.exponentialRampToValueAtTime(.02, now + .06);
  pluckGain.gain.exponentialRampToValueAtTime(.0001, now + .45);
  pluck.connect(pluckGain).connect(context.destination);
  pluck.start(now + .04);
  pluck.stop(now + .46);
}
