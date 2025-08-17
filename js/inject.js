function injectComponent(targetId, path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(err => console.error(`Failed to load ${path}`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  injectComponent("nav-slot", "nav.html");
  injectComponent("hero-slot", "hero.html");
  injectComponent("featured-products-slot", "featured-products.html");
  injectComponent("join-us-slot", "join-us-section.html");
  injectComponent("our-story-section-slot", "our-story.html");
  injectComponent("footer-slot", "footer.html");
});