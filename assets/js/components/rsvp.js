import { t, text } from "../core/i18n.js";

export function setupRSVP(wedding) {
  const form = document.getElementById("rsvp-form");
  const endpoint = wedding.rsvp.googleSheetEndpoint?.trim();
  const preview = document.getElementById("rsvp-preview");
  const submit = document.getElementById("rsvp-submit");
  const checks = document.getElementById("event-checkboxes");
  const toast = document.getElementById("toast");
  const strings = { responseSuccess: "responseSuccess", responseFailure: "responseFailure", responsePreview: "responsePreview", responseNeedsEndpoint: "responseNeedsEndpoint", rsvpEventsRequired: "rsvpEventsRequired", sending: "sending", submit: "submit" };
  const guestName = document.getElementById("guest-name");
  const guestCount = document.getElementById("guest-count");
  const guestPills = document.querySelectorAll(".guest-pill");
  const quickSelectAll = document.getElementById("quick-select-all");
  const progressSteps = document.querySelectorAll(".rsvp-progress-step");
  const steps = document.querySelectorAll(".rsvp-step");
  const celebration = document.getElementById("rsvp-celebration");

  let currentStep = 1;

  const goToStep = (stepNumber) => {
    currentStep = Math.max(1, Math.min(3, stepNumber));
    progressSteps.forEach((indicator) => {
      const idx = Number(indicator.dataset.stepIndicator);
      indicator.classList.toggle("active", idx === currentStep);
      indicator.classList.toggle("completed", idx < currentStep);
    });
    steps.forEach((step) => {
      const idx = Number(step.dataset.step);
      step.classList.toggle("active", idx === currentStep);
    });
    const activeStep = document.querySelector(`.rsvp-step[data-step="${currentStep}"]`);
    const firstInput = activeStep?.querySelector("input, select, textarea, button");
    firstInput?.focus();
  };

  // Quick guest count pills
  guestPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      guestPills.forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      if (guestCount) {
        guestCount.value = pill.dataset.count;
      }
    });
  });

  // Step 1 -> Step 2
  document.getElementById("rsvp-next-1")?.addEventListener("click", () => {
    if (guestName && !guestName.reportValidity()) return;
    goToStep(2);
  });

  // Step 2 navigation
  document.getElementById("rsvp-prev-2")?.addEventListener("click", () => goToStep(1));
  document.getElementById("rsvp-next-2")?.addEventListener("click", () => {
    if (!form.querySelector('input[name="ceremonies"]:checked')) {
      showToast("rsvpEventsRequired");
      return;
    }
    goToStep(3);
  });

  // Step 3 navigation
  document.getElementById("rsvp-prev-3")?.addEventListener("click", () => goToStep(2));

  // Quick select all ceremonies
  quickSelectAll?.addEventListener("click", () => {
    const inputs = [...form.querySelectorAll('input[name="ceremonies"]')];
    const allChecked = inputs.length > 0 && inputs.every((input) => input.checked);
    inputs.forEach((input) => { input.checked = !allChecked; });
  });

  const render = () => {
    preview.textContent = endpoint ? "" : t("preview");
    const fragment = document.createDocumentFragment();
    wedding.events.forEach((event) => {
      const label = document.createElement("label");
      label.className = `event-check event-${event.id}`;
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "ceremonies";
      input.value = event.id;
      input.checked = true; // default checked for guest convenience
      const badge = document.createElement("span");
      badge.className = "rsvp-event-badge";
      badge.textContent = ({ haldi: "✺", mehendi: "❧", sangeet: "♫", baraat: "✤", phere: "ॐ" })[event.id] || "✿";
      const name = document.createElement("span");
      name.className = "rsvp-event-title";
      name.textContent = text(event.title);
      label.append(input, badge, name);
      fragment.append(label);
    });
    checks.replaceChildren(fragment);
    submit.querySelector("span").textContent = t("submit");
  };

  const showCelebration = () => {
    form.hidden = true;
    if (celebration) celebration.hidden = false;
    document.getElementById("rsvp-progress")?.remove();
    burstConfetti();
  };

  const showToast = (key) => {
    toast.textContent = t(key);
    toast.hidden = false;
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => { toast.hidden = true; }, 5200);
  };

  render();
  window.addEventListener("wedding:language", render);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    navigator.vibrate?.(20);
    if (!form.querySelector('input[name="ceremonies"]:checked')) {
      showToast("rsvpEventsRequired");
      goToStep(2);
      return;
    }
    if (!endpoint) {
      showToast("responsePreview");
      showCelebration();
      return;
    }
    const data = new FormData(form);
    data.set("tenantId", wedding.id);
    data.set("language", document.documentElement.lang);
    data.set("ceremonies", [...form.querySelectorAll('input[name="ceremonies"]:checked')].map((input) => input.value).join(", "));
    const body = new URLSearchParams([...data.entries()].map(([key, value]) => [key, String(value)]));
    const label = submit.querySelector("span");
    submit.disabled = true;
    label.textContent = t(strings.sending);
    try {
      await fetch(endpoint, { method: "POST", mode: "no-cors", body });
      showToast("responseSuccess");
      showCelebration();
    } catch (error) {
      showToast("responseFailure");
    } finally {
      submit.disabled = false;
      label.textContent = t(strings.submit);
    }
  });
}

function burstConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.getElementById("confetti-canvas");
  const context = canvas.getContext("2d");
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  const colors = ["#bf953f", "#d97706", "#5e0a14", "#e6c65c"];
  const bits = Array.from({ length: 90 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 120, y: innerHeight * .72, vx: (Math.random() - .5) * 8, vy: -3 - Math.random() * 8, size: 3 + Math.random() * 5, color: colors[Math.floor(Math.random() * colors.length)], angle: Math.random() * 6 }));
  const start = performance.now();
  function frame(now) {
    context.clearRect(0, 0, innerWidth, innerHeight);
    bits.forEach((bit) => { bit.x += bit.vx; bit.y += bit.vy; bit.vy += .16; bit.angle += .12; context.save(); context.translate(bit.x, bit.y); context.rotate(bit.angle); context.fillStyle = bit.color; context.fillRect(-bit.size / 2, -bit.size / 2, bit.size, bit.size * 1.7); context.restore(); });
    if (now - start < 1900) requestAnimationFrame(frame); else context.clearRect(0, 0, innerWidth, innerHeight);
  }
  requestAnimationFrame(frame);
}
