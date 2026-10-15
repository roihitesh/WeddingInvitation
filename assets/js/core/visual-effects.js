export function initVisualEffects() {
  initCrestTilt();
  initAmbientCanvas();
  initScrollReveal();
  initGalleryParallax();
}

function initCrestTilt() {
  const crest = document.querySelector(".ganesha-mark");
  const card = document.querySelector(".entry-card");
  if (!crest || !card || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const tilt = (x, y) => {
    const box = crest.getBoundingClientRect();
    const nx = (x - box.left) / box.width * 2 - 1;
    const ny = (y - box.top) / box.height * 2 - 1;
    crest.style.setProperty("--tilt-x", `${Math.max(-1, Math.min(1, ny)) * -8}deg`);
    crest.style.setProperty("--tilt-y", `${Math.max(-1, Math.min(1, nx)) * 9}deg`);
    crest.style.setProperty("--shine-x", `${(nx + 1) * 50}%`);
    crest.style.setProperty("--shine-y", `${(ny + 1) * 50}%`);
  };
  card.addEventListener("pointermove", (event) => tilt(event.clientX, event.clientY), { passive: true });
  card.addEventListener("pointerleave", () => {
    crest.style.setProperty("--tilt-x", "0deg");
    crest.style.setProperty("--tilt-y", "0deg");
    crest.style.setProperty("--shine-x", "50%");
    crest.style.setProperty("--shine-y", "50%");
  });
  window.addEventListener("deviceorientation", (event) => {
    const gate = document.getElementById("entry-gate");
    if (gate?.hidden || !gate?.getClientRects().length) return;
    const x = Number.isFinite(event.gamma) ? Math.max(-25, Math.min(25, event.gamma)) : 0;
    const y = Number.isFinite(event.beta) ? Math.max(-25, Math.min(25, event.beta - 30)) : 0;
    crest.style.setProperty("--tilt-x", `${y * -.24}deg`);
    crest.style.setProperty("--tilt-y", `${x * .28}deg`);
  }, { passive: true });
}

function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas || getComputedStyle(canvas).display === "none") return;
  const context = canvas.getContext("2d", { alpha: true });
  if (!context || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const particles = [];
  const count = Math.min(56, Math.max(28, Math.round(innerWidth / 22)));
  let width = 0;
  let height = 0;
  let raf = 0;
  let inView = true;
  const resize = () => {
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    width = innerWidth;
    height = innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles.length = 0;
    for (let i = 0; i < count; i++) particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0.5 + Math.random() * 1.8,
      speed: .12 + Math.random() * .32,
      drift: (Math.random() - .5) * .18,
      phase: Math.random() * Math.PI * 2,
      alpha: .12 + Math.random() * .42,
      petal: Math.random() < .09,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - .5) * .005,
    });
    context.clearRect(0, 0, width, height);
  };
  const draw = (now) => {
    raf = 0;
    if (!inView || document.visibilityState !== "visible") return;
    context.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.y -= p.speed;
      p.x += p.drift + Math.sin(now / 2300 + p.phase) * .13;
      p.rotation += p.spin;
      if (p.y < -8) { p.y = height + 6; p.x = Math.random() * width; }
      if (p.petal) {
        context.save(); context.translate(p.x, p.y); context.rotate(p.rotation);
        context.fillStyle = `rgba(230, 178, 62, ${p.alpha * .48})`;
        context.beginPath(); context.ellipse(0, 0, p.size * 1.4, p.size * .7, 0, 0, Math.PI * 2); context.fill(); context.restore();
      } else {
        const shimmer = .55 + Math.sin(now / 700 + p.phase) * .35;
        context.fillStyle = `rgba(255, 224, 142, ${p.alpha * shimmer})`;
        context.beginPath(); context.arc(p.x, p.y, p.size, 0, Math.PI * 2); context.fill();
      }
    });
    raf = requestAnimationFrame(draw);
  };
  const resume = () => { if (inView && document.visibilityState === "visible" && !raf) raf = requestAnimationFrame(draw); };
  const pause = () => { if (raf) cancelAnimationFrame(raf); raf = 0; context.clearRect(0, 0, width, height); };
  resize();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => document.visibilityState === "visible" ? resume() : pause());
  if ("IntersectionObserver" in window) {
    let visibleStages = 0;
    const observer = new IntersectionObserver((records) => {
      records.forEach((record) => {
        const visible = record.isIntersecting;
        record.target.dataset.ambientVisible = String(visible);
      });
      visibleStages = document.querySelectorAll('[data-ambient-visible="true"]').length;
      inView = visibleStages > 0;
      inView ? resume() : pause();
    }, { threshold: 0.01 });
    document.querySelectorAll("#entry-gate, #patrika-screen, #top, #hero, #events, #gallery, #rsvp").forEach((stage) => observer.observe(stage));
  } else resume();
}

function initScrollReveal() {
  document.documentElement.classList.add("motion-initialized");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-on-scroll").forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.08, rootMargin: "0px 0px -28px 0px" });
  document.querySelectorAll(".reveal-on-scroll").forEach((node) => observer.observe(node));
}

function initGalleryParallax() {
  const photos = [...document.querySelectorAll(".gallery-thumb img")];
  if (!photos.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let raf = 0;
  const update = () => {
    raf = 0;
    photos.forEach((photo) => {
      const rect = photo.parentElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) return;
      const offset = (rect.top + rect.height / 2 - innerHeight / 2) * -.08;
      photo.style.setProperty("--gallery-parallax", `${offset}px`);
    });
  };
  window.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  update();
}
