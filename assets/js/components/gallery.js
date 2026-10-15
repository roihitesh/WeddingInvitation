import { t, text } from "../core/i18n.js";

export function initGallery(wedding, i18n) {
  const grid = document.getElementById("gallery-grid");
  const dialog = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  const entries = wedding.gallery || [];
  let currentIndex = 0;
  let touchStartX = null;

  const showPhoto = (index) => {
    currentIndex = (index + entries.length) % entries.length;
    const photo = entries[currentIndex];
    image.src = photo.url;
    image.alt = text(photo.caption);
    caption.textContent = text(photo.caption);
  };
  const openPhoto = (index) => {
    if (!entries.length) return;
    showPhoto(index);
    dialog.showModal();
    document.getElementById("lightbox-close").focus();
  };
  const render = () => {
    document.getElementById("lightbox-close").setAttribute("aria-label", t("close"));
    document.getElementById("lightbox-prev").setAttribute("aria-label", t("previous"));
    document.getElementById("lightbox-next").setAttribute("aria-label", t("next"));
    if (!entries.length) {
      const message = document.createElement("p");
      message.textContent = t("noGallery");
      grid.replaceChildren(message);
      return;
    }
    const fragment = document.createDocumentFragment();
    entries.forEach((photo, index) => {
      const button = document.createElement("button");
      button.className = "gallery-thumb";
      button.classList.add("reveal-on-scroll");
      if (document.documentElement.classList.contains("motion-initialized")) button.classList.add("is-visible");
      button.type = "button";
      button.setAttribute("aria-label", `${t("galleryOpen")}: ${text(photo.caption)}`);
      const picture = document.createElement("img");
      picture.src = photo.url;
      picture.alt = text(photo.caption);
      picture.loading = "lazy";
      const overlay = document.createElement("div");
      overlay.className = "gallery-overlay";
      const chapter = document.createElement("span");
      chapter.className = "gallery-chapter-tag";
      chapter.textContent = `✦ Moment 0${index + 1}`;
      const label = document.createElement("span");
      label.className = "gallery-caption";
      label.textContent = text(photo.caption);
      overlay.append(chapter, label);
      button.append(picture, overlay);
      button.addEventListener("click", () => openPhoto(index));
      fragment.append(button);
    });
    grid.replaceChildren(fragment);
  };

  render();
  window.addEventListener("wedding:language", render);
  document.getElementById("lightbox-close").addEventListener("click", () => dialog.close());
  document.getElementById("lightbox-prev").addEventListener("click", () => showPhoto(currentIndex - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => showPhoto(currentIndex + 1));
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
    if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
  });
  image.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  image.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) showPhoto(currentIndex + (distance < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
}
