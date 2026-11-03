const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const heroArt = document.querySelector(".hero-art");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (heroArt && !reduceMotion && canHover) {
  heroArt.addEventListener("pointermove", (event) => {
    const bounds = heroArt.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    heroArt.style.setProperty("--tilt-x", `${-y * 12}deg`);
    heroArt.style.setProperty("--tilt-y", `${x * 12}deg`);
  });

  heroArt.addEventListener("pointerleave", () => {
    heroArt.style.setProperty("--tilt-x", "0deg");
    heroArt.style.setProperty("--tilt-y", "0deg");
  });
}

const revealTargets = document.querySelectorAll("main > section, #projects article");

if (revealTargets.length && !reduceMotion && "IntersectionObserver" in window) {
  document.body.classList.add("has-interactions");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });

  for (const target of revealTargets) {
    target.classList.add("reveal");
    revealObserver.observe(target);
  }
}
