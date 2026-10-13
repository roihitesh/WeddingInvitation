let wedding;
let language;

export function initI18n(tenant) {
  wedding = tenant;
  const supported = tenant.supportedLanguages;
  const saved = window.localStorage.getItem("wedding_invite_lang") || window.localStorage.getItem(`wedding-language:${tenant.id}`);
  const detected = navigator.language?.toLowerCase().startsWith("hi") ? "hi" : tenant.defaultLanguage;
  language = supported.includes(saved) ? saved : (supported.includes(detected) ? detected : supported[0]);
  applyLanguage();

  document.addEventListener("click", (event) => {
    const button = event.target.closest?.("[data-language]");
    if (button) setLanguage(button.dataset.language);
  });
  return { t, text, setLanguage, getLanguage };
}

export function getLanguage() { return language || "en"; }
export function t(key) { return wedding?.ui?.[language]?.[key] ?? wedding?.ui?.en?.[key] ?? key; }
export function text(value) { return typeof value === "string" ? value : (value?.[language] ?? value?.en ?? ""); }

export function setLanguage(next) {
  if (!wedding?.supportedLanguages.includes(next) || next === language) return;
  language = next;
  window.localStorage.setItem(`wedding-language:${wedding.id}`, next);
  window.localStorage.setItem("wedding_invite_lang", next);
  applyLanguage();
  window.dispatchEvent(new CustomEvent("wedding:language", { detail: { language } }));
  window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: language } }));
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n], [data-i18n-key]").forEach((element) => {
    element.textContent = t(element.dataset.i18n || element.dataset.i18nKey);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    // HTML values are maintained only in the local, trusted tenant configuration.
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
}
