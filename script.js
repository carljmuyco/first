function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // IntersectionObserver options
  const options = {
    root: null,             // viewport
    threshold: 0.1,         // 10% visible triggers
    rootMargin: "0px 0px -10% 0px", // trigger a bit earlier before fully in viewport
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Uncomment below to stop observing after first trigger (animate once)
        // observer.unobserve(entry.target);
      } else {
        // Remove visible class when out of view for toggle animation
        entry.target.classList.remove("visible");
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});


