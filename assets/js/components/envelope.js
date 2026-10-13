export function initEnvelope({ openButton, sealButton, gate, patrikaScreen, main, header, controls, canvas, onOpen }) {
  const patrika = document.getElementById("patrika");
  const enter = () => {
    animatePetals(canvas);
    gate.classList.add("is-leaving");
    window.setTimeout(() => {
      gate.hidden = true;
      patrikaScreen.hidden = false;
      document.getElementById("open-patrika").focus();
    }, 650);
  };
  openButton.addEventListener("click", enter, { once: true });
  sealButton.addEventListener("click", () => {
    sealButton.disabled = true;
    navigator.vibrate?.(20);
    onOpen?.();
    patrika.classList.add("is-unsealed");
    animatePetals(canvas);
    window.setTimeout(() => patrikaScreen.classList.add("is-opening"), 1050);
    window.setTimeout(() => {
      patrikaScreen.hidden = true;
      main.hidden = false;
      header.hidden = false;
      controls.hidden = false;
      document.getElementById("top").scrollIntoView({ behavior: "smooth" });
      document.getElementById("hero").setAttribute("tabindex", "-1");
      document.getElementById("hero").focus({ preventScroll: true });
    }, 1800);
  }, { once: true });
}

function animatePetals(canvas) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const context = canvas.getContext("2d");
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(window.innerWidth * scale);
  canvas.height = Math.round(window.innerHeight * scale);
  context.setTransform(scale, 0, 0, scale, 0, 0);
  const colors = ["#e0a928", "#f1b736", "#d77a32", "#b94343", "#d36a70", "#efb1a2"];
  const petals = Array.from({ length: 115 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -Math.random() * window.innerHeight * .75,
    size: 3 + Math.random() * 7,
    speed: 1.2 + Math.random() * 3.1,
    drift: (Math.random() - .5) * 1.8,
    rotation: Math.random() * Math.PI,
    spin: (Math.random() - .5) * .12,
    color: colors[Math.floor(Math.random() * colors.length)],
    round: Math.random() > .55,
  }));
  const started = performance.now();
  function frame(now) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    petals.forEach((petal) => {
      petal.y += petal.speed;
      petal.x += petal.drift + Math.sin(petal.y / 30) * .6;
      petal.rotation += petal.spin;
      context.save();
      context.translate(petal.x, petal.y);
      context.rotate(petal.rotation);
      context.fillStyle = petal.color;
      context.globalAlpha = Math.max(0, Math.min(1, (window.innerHeight - petal.y) / 140));
      context.beginPath();
      if (petal.round) context.ellipse(0, 0, petal.size, petal.size * .68, 0, 0, Math.PI * 2);
      else {
        context.moveTo(0, -petal.size);
        context.bezierCurveTo(petal.size * 1.2, -petal.size * .4, petal.size * .8, petal.size, 0, petal.size * .8);
        context.bezierCurveTo(-petal.size * .8, petal.size, -petal.size * 1.1, -petal.size * .4, 0, -petal.size);
      }
      context.fill();
      context.restore();
    });
    if (now - started < 4300) requestAnimationFrame(frame);
    else context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  requestAnimationFrame(frame);
}
