import { t, text } from "../core/i18n.js";

function safeDate(value, language) {
  return new Intl.DateTimeFormat(language, { weekday: "short", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata", timeZoneName: "short" }).format(new Date(value));
}

function calendarDate(date) { return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z"); }
function escapeIcs(value) { return String(value).replaceAll("\\", "\\\\").replaceAll("\r\n", "\\n").replaceAll("\n", "\\n").replaceAll(",", "\\,").replaceAll(";", "\\;"); }

function calendarUrl(event) {
  const start = new Date(event.dateTime);
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", text(event.title));
  url.searchParams.set("dates", `${calendarDate(start)}/${calendarDate(end)}`);
  url.searchParams.set("details", `${text(event.tagline)} · ${text(event.dressCode)}`);
  url.searchParams.set("location", text(event.venueName));
  return url.toString();
}

function downloadIcs(event) {
  const start = new Date(event.dateTime);
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
  const content = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Vedic Wedding Invitation//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", `UID:${event.id}-${start.getTime()}@wedding-invitation`, `DTSTAMP:${calendarDate(new Date())}`, `DTSTART:${calendarDate(start)}`, `DTEND:${calendarDate(end)}`, `SUMMARY:${escapeIcs(text(event.title))}`, `LOCATION:${escapeIcs(text(event.venueName))}`, `DESCRIPTION:${escapeIcs(`${text(event.tagline)} · ${text(event.dressCode)}`)}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const objectUrl = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = `${event.id}.ics`;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

export function renderTimeline(wedding, i18n) {
  const grid = document.getElementById("event-grid");
  const language = i18n.getLanguage();
  const fragment = document.createDocumentFragment();
  wedding.events.forEach((event, index) => {
    const card = document.createElement("article");
    card.className = `event-card event-${event.id} reveal-on-scroll`;
    if (document.documentElement.classList.contains("motion-initialized")) card.classList.add("is-visible");
    
    const badge = document.createElement("span");
    badge.className = "ceremony-badge";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = ({ haldi: "✺", mehendi: "❧", sangeet: "♫", baraat: "✤", phere: "ॐ" })[event.id] || "✿";
    
    const date = document.createElement("p");
    date.className = "event-date";
    date.textContent = safeDate(event.dateTime, language);
    const symbol = document.createElement("span");
    symbol.className = "event-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = ({ haldi: "✺", mehendi: "❧", sangeet: "♫", baraat: "✤", phere: "ॐ" })[event.id] || "✿";
    date.append(" ", symbol);
    const number = document.createElement("span");
    number.className = "event-index";
    number.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("h3");
    title.textContent = text(event.title);
    const tagline = document.createElement("p");
    tagline.className = "event-tagline";
    tagline.textContent = text(event.tagline);
    const venue = document.createElement("p");
    venue.className = "event-detail";
    venue.textContent = text(event.venueName);
    const dress = document.createElement("p");
    dress.className = "event-detail";
    dress.textContent = `${t("eventAttire")}: ${text(event.dressCode)}`;
    const actions = document.createElement("div");
    actions.className = "event-actions";
    const map = document.createElement("a");
    map.href = event.mapUrl;
    map.target = "_blank";
    map.rel = "noopener noreferrer";
    map.textContent = t("map");
    const calendar = document.createElement("a");
    calendar.href = calendarUrl(event);
    calendar.target = "_blank";
    calendar.rel = "noopener noreferrer";
    calendar.textContent = t("calendar");
    const download = document.createElement("a");
    download.href = "#events";
    download.textContent = t("calendarIcs");
    download.addEventListener("click", (click) => { click.preventDefault(); downloadIcs(event); });
    const details = document.createElement("button");
    details.type = "button";
    details.className = "event-details-button";
    details.textContent = t("detailsButton");
    details.addEventListener("click", () => window.dispatchEvent(new CustomEvent("ceremony:open", { detail: { id: event.id } })));
    actions.append(map, calendar, download);
    card.append(badge, number, date, title, tagline, venue, dress, actions);
    card.append(details);
    fragment.append(card);
  });
  grid.replaceChildren(fragment);
}
