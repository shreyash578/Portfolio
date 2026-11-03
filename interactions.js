const projectCards = document.querySelectorAll("#projects article");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (projectCards.length && !reduceMotion && "IntersectionObserver" in window) {
  document.body.classList.add("has-interactions");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  for (const card of projectCards) {
    revealObserver.observe(card);
  }
}
