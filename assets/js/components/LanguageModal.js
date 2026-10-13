/** Accessible language-card selection for the invitation entrance gate. */
export function initLanguageModal({ wedding, i18n, confirmButton }) {
  const gate = document.getElementById("entry-gate");
  const choiceGroup = document.getElementById("language-choice");
  const floatingLanguages = document.getElementById("floating-languages");
  const cards = wedding.supportedLanguages.map((language) => {
    const option = wedding.languageOptions[language];
    if (!option) throw new Error(`Missing language option metadata for ${language}`);
    const card = document.createElement("button");
    card.type = "button";
    card.setAttribute("role", "radio");
    card.dataset.languageCard = language;
    card.setAttribute("aria-checked", "false");
    const icon = document.createElement("span");
    icon.className = "language-card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = option.icon || "✧";
    const native = document.createElement("span");
    native.className = "language-native";
    native.textContent = option.native;
    const subtext = document.createElement("span");
    subtext.className = "language-card-subtext";
    subtext.textContent = option.subtext || "";
    card.append(icon, native, subtext);
    choiceGroup.append(card);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.dataset.language = language;
    toggle.textContent = option.shortLabel || option.native;
    toggle.title = option.native;
    toggle.setAttribute("aria-label", option.native);
    toggle.setAttribute("aria-pressed", String(language === i18n.getLanguage()));
    floatingLanguages.append(toggle);
    return card;
  });
  let lastSelectionAt = 0;

  const select = (language) => {
    if (!wedding.supportedLanguages.includes(language)) return;
    i18n.setLanguage(language);
    window.localStorage.setItem("wedding_invite_lang", language);
    cards.forEach((card) => {
      const selected = card.dataset.languageCard === language;
      card.classList.toggle("is-selected", selected);
      card.setAttribute("aria-checked", String(selected));
    });
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const now = Date.now();
      const language = card.dataset.languageCard;
      const quickEnter = language === i18n.getLanguage() && now - lastSelectionAt < 450;
      navigator.vibrate?.(20);
      select(language);
      lastSelectionAt = now;
      if (quickEnter) confirmButton.click();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        card.click();
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const index = cards.indexOf(card);
        cards[(index + (event.key === "ArrowRight" ? 1 : cards.length - 1)) % cards.length].focus();
      }
    });
  });

  const saved = window.localStorage.getItem("wedding_invite_lang");
  const legacy = window.localStorage.getItem(`wedding-language:${wedding.id}`);
  const detected = navigator.language?.toLowerCase().startsWith("hi") ? "hi" : wedding.defaultLanguage;
  const returningLanguage = [saved, legacy].find((candidate) => wedding.supportedLanguages.includes(candidate));
  select(returningLanguage || (wedding.supportedLanguages.includes(detected) ? detected : wedding.supportedLanguages[0]));
  if (returningLanguage && new URLSearchParams(window.location.search).get("preview") !== "1") {
    window.setTimeout(() => confirmButton.click(), 0);
  }
  return { select };
}
