const lotusSvg = `<svg class="lang-art-lotus" viewBox="0 0 120 120" aria-hidden="true">
  <defs>
    <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c99e4f"/>
      <stop offset="40%" stop-color="#fbf2d0"/>
      <stop offset="70%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#966e27"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="56" fill="none" stroke="url(#lotusGold)" stroke-width="1.2" stroke-dasharray="2 3"/>
  <circle cx="60" cy="60" r="52" fill="none" stroke="url(#lotusGold)" stroke-width="0.8"/>
  <circle cx="60" cy="60" r="48" fill="none" stroke="url(#lotusGold)" stroke-width="1.4"/>
  <g stroke="url(#lotusGold)" stroke-width="1" opacity="0.7">
    <line x1="60" y1="4" x2="60" y2="12"/><line x1="60" y1="108" x2="60" y2="116"/>
    <line x1="4" y1="60" x2="12" y2="60"/><line x1="108" y1="60" x2="116" y2="60"/>
    <line x1="20" y1="20" x2="26" y2="26"/><line x1="94" y1="94" x2="100" y2="100"/>
    <line x1="20" y1="100" x2="26" y2="94"/><line x1="94" y1="26" x2="100" y2="20"/>
  </g>
  <path d="M60 16 Q68 32 60 48 Q52 32 60 16 Z M60 104 Q68 88 60 72 Q52 88 60 104 Z M16 60 Q32 68 48 60 Q32 52 16 60 Z M104 60 Q88 68 72 60 Q88 52 104 60 Z" fill="none" stroke="url(#lotusGold)" stroke-width="1.1"/>
  <g fill="none" stroke="url(#lotusGold)" stroke-width="1.3" stroke-linejoin="round">
    <path d="M60 34 C64 44 68 54 60 68 C52 54 56 44 60 34 Z" fill="url(#lotusGold)" fill-opacity="0.16"/>
    <path d="M60 68 C50 64 38 52 42 40 C48 48 54 58 60 68 Z" fill="url(#lotusGold)" fill-opacity="0.12"/>
    <path d="M60 68 C44 70 30 62 34 50 C42 58 50 64 60 68 Z" fill="url(#lotusGold)" fill-opacity="0.1"/>
    <path d="M60 68 C70 64 82 52 78 40 C72 48 66 58 60 68 Z" fill="url(#lotusGold)" fill-opacity="0.12"/>
    <path d="M60 68 C76 70 90 62 86 50 C78 58 70 64 60 68 Z" fill="url(#lotusGold)" fill-opacity="0.1"/>
    <path d="M48 70 Q60 74 72 70 Q60 80 48 70 Z" fill="url(#lotusGold)"/>
  </g>
</svg>`;

const patrikaSvg = `<svg class="lang-art-patrika" viewBox="0 0 120 120" aria-hidden="true">
  <defs>
    <linearGradient id="cardPaper" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffdfa"/>
      <stop offset="100%" stop-color="#fdf5e6"/>
    </linearGradient>
    <linearGradient id="foilGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#bf953f"/>
      <stop offset="50%" stop-color="#fdf0cd"/>
      <stop offset="100%" stop-color="#9b6f1e"/>
    </linearGradient>
    <filter id="cardShadow" x="-20%" y="-10%" width="140%" height="130%">
      <feDropShadow dx="2" dy="5" stdDeviation="3" flood-color="#4a151d" flood-opacity="0.2"/>
    </filter>
  </defs>
  <g stroke="#b89166" stroke-width="2.6" stroke-linecap="round">
    <line x1="60" y1="12" x2="60" y2="108" stroke-width="2" opacity="0.6"/>
    <line x1="60" y1="14" x2="26" y2="112"/>
    <line x1="60" y1="14" x2="94" y2="112"/>
    <line x1="20" y1="86" x2="100" y2="86" stroke="#9e7346" stroke-width="3.6"/>
  </g>
  <g filter="url(#cardShadow)">
    <rect x="35" y="16" width="50" height="72" rx="3" fill="url(#cardPaper)" stroke="url(#foilGold)" stroke-width="1.2"/>
    <rect x="38" y="19" width="44" height="66" rx="1.5" fill="none" stroke="url(#foilGold)" stroke-width="0.6" stroke-dasharray="2 2"/>
    <text x="60" y="34" font-family="serif" font-size="7" font-weight="bold" fill="#7d1d24" text-anchor="middle">ॐ</text>
    <text x="60" y="44" font-family="serif" font-size="5.2" font-weight="bold" fill="url(#foilGold)" text-anchor="middle">H &amp; S</text>
    <line x1="45" y1="49" x2="75" y2="49" stroke="url(#foilGold)" stroke-width="0.6"/>
    <text x="60" y="58" font-family="'Noto Serif Devanagari', serif" font-size="4.2" font-weight="bold" fill="#6d4f3b" text-anchor="middle">लग्‍न पत्रिका</text>
    <line x1="48" y1="64" x2="72" y2="64" stroke="#e0cdad" stroke-width="0.5"/>
    <line x1="44" y1="69" x2="76" y2="69" stroke="#e0cdad" stroke-width="0.5"/>
    <line x1="50" y1="74" x2="70" y2="74" stroke="#e0cdad" stroke-width="0.5"/>
    <circle cx="60" cy="80" r="1.8" fill="url(#foilGold)"/>
  </g>
</svg>`;

/** Accessible language-card selection for the invitation entrance gate. */
export function initLanguageModal({ wedding, i18n, confirmButton, soundscape }) {
  const gate = document.getElementById("entry-gate");
  const choiceGroup = document.getElementById("language-choice");
  const floatingLanguages = document.getElementById("floating-languages");

  const cards = wedding.supportedLanguages.map((language) => {
    const isHindi = language === "hi";
    const card = document.createElement("div");
    card.className = `lang-seal-card ${isHindi ? "card-hi" : "card-en"}`;
    card.dataset.languageCard = language;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", isHindi ? "हिंदी में पत्रिका देखें" : "Enter celebration in English");

    // Top ornamental art box
    const artBox = document.createElement("div");
    artBox.className = "lang-seal-art";
    artBox.innerHTML = isHindi ? patrikaSvg : lotusSvg;

    // Title
    const title = document.createElement("h3");
    title.className = "lang-seal-title";
    title.textContent = isHindi ? "हिंदी" : "English";

    // Subtitle
    const desc = document.createElement("p");
    desc.className = "lang-seal-desc";
    desc.textContent = isHindi ? "प्रेम, परंपरा और नए जीवन का शुभारंभ" : "A celebration of love, family and forever";

    // Action button
    const action = document.createElement("button");
    action.type = "button";
    action.className = "lang-seal-action";
    action.innerHTML = isHindi ? `शुभारंभ करें <span aria-hidden="true">→</span>` : `Enter Celebration <span aria-hidden="true">→</span>`;

    card.append(artBox, title, desc, action);
    choiceGroup.append(card);

    // Floating languages toggle
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.dataset.language = language;
    toggle.textContent = isHindi ? "अ" : "A";
    toggle.title = isHindi ? "हिन्दी" : "English";
    toggle.setAttribute("aria-label", isHindi ? "हिन्दी" : "English");
    toggle.setAttribute("aria-pressed", String(language === i18n.getLanguage()));
    toggle.addEventListener("click", () => {
      select(language);
    });
    floatingLanguages.append(toggle);

    // Direct 1-click entry into celebration
    const handleEntry = () => {
      navigator.vibrate?.(25);
      select(language);
      soundscape?.playIntro?.();
      window.setTimeout(() => {
        confirmButton.click();
      }, 140);
    };

    card.addEventListener("click", handleEntry);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleEntry();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = cards[(cards.indexOf(card) + 1) % cards.length];
        next?.focus();
      }
    });

    return card;
  });

  const updateCardSelection = (lang) => {
    cards.forEach((card) => {
      const selected = card.dataset.languageCard === lang;
      card.classList.toggle("is-selected", selected);
      card.setAttribute("aria-checked", String(selected));
    });
    floatingLanguages.querySelectorAll("button[data-language]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.language === lang));
    });
  };

  const select = (language) => {
    if (!wedding.supportedLanguages.includes(language)) return;
    i18n.setLanguage(language);
    window.localStorage.setItem("wedding_invite_lang", language);
    updateCardSelection(language);
  };

  window.addEventListener("wedding:language", (event) => {
    updateCardSelection(event.detail.language);
  });

  const saved = window.localStorage.getItem("wedding_invite_lang");
  const legacy = window.localStorage.getItem(`wedding-language:${wedding.id}`);
  const detected = navigator.language?.toLowerCase().startsWith("hi") ? "hi" : wedding.defaultLanguage;
  const returningLanguage = [saved, legacy].find((candidate) => wedding.supportedLanguages.includes(candidate));
  select(returningLanguage || (wedding.supportedLanguages.includes(detected) ? detected : wedding.supportedLanguages[0]));
  // Always begin at the language gate. Remembering the choice preselects a card,
  // but should never skip the guest's explicit entry action after a reload.
  return { select };
}
