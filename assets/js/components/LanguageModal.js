/** Accessible language-card selection for the invitation entrance gate. */
export function initLanguageModal({ wedding, i18n, confirmButton }) {
  const gate = document.getElementById("entry-gate");
  const cards = [...gate.querySelectorAll("[data-language-card]")];
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
  select([saved, legacy, detected].find((candidate) => wedding.supportedLanguages.includes(candidate)) || wedding.supportedLanguages[0]);
  return { select };
}
