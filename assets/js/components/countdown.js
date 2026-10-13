import { t } from "../core/i18n.js";

const units = ["days", "hours", "minutes", "seconds"];
export function startCountdown(dateTime) {
  const target = new Date(dateTime).getTime();
  const root = document.getElementById("countdown");
  const cells = units.map((unit) => {
    const cell = document.createElement("div");
    cell.className = "countdown-cell";
    const value = document.createElement("strong");
    value.id = `countdown-${unit}`;
    const label = document.createElement("span");
    label.dataset.countdownLabel = unit;
    cell.append(value, label);
    return cell;
  });
  root.replaceChildren(...cells.flatMap((cell, index) => {
    if (index === 0) return [cell];
    const separator = document.createElement("i");
    separator.className = "countdown-separator";
    separator.textContent = ":";
    separator.setAttribute("aria-hidden", "true");
    return [separator, cell];
  }));

  const updateLabels = () => cells.forEach((cell, index) => { cell.querySelector("span").textContent = t(units[index]); });
  updateLabels();
  window.addEventListener("wedding:language", updateLabels);
  function update() {
    const remaining = target - Date.now();
    const safe = Number.isFinite(remaining) ? Math.max(0, remaining) : 0;
    const values = [Math.floor(safe / 86_400_000), Math.floor((safe % 86_400_000) / 3_600_000), Math.floor((safe % 3_600_000) / 60_000), Math.floor((safe % 60_000) / 1_000)];
    units.forEach((unit, index) => { document.getElementById(`countdown-${unit}`).textContent = String(values[index]).padStart(2, "0"); });
    root.setAttribute("aria-label", units.map((unit, index) => `${values[index]} ${t(unit)}`).join(", "));
  }
  update();
  window.setInterval(update, 1000);
}
