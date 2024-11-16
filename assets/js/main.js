// Hamburger Menu

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && navId) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// Remove Menu when clicking on navigation link

const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
  navLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //   remove menu mobile

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));

// Scroll to top

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

//=========== Adding Scroll Reveal Animation To Each Section Classes ===========//

// Initialize ScrollReveal with specified configuration options
const sr = ScrollReveal({
  origin: "top", // Elements will appear from the top
  distance: "60px", // Elements will move 60px from their original position
  duration: 3000, // Animation duration is 3000 milliseconds (3 seconds)
  delay: 400, // Each element will have a 400ms delay before starting the animation
  reset: true, // Elements will reappear when scrolled into view again
});

// Reveal specified elements with the default settings
sr.reveal(`.home-title, .section-title, .offer-title, .footer-title`);

sr.reveal(
  `.home-title span, .section-all, .offer-desc, .new-box-1, .new-box-2, .new-box-3, .newsletter-desc, .box-2 li, .box-3 li`,
  {
    delay: 700,
  }
);

// Reveal these elements from the right side
sr.reveal(
  `.home-img,  .collection-box-2, .featured-product-3, .featured-product-4, .logo-3, .logo-4`,
  {
    origin: "right", // Elements will appear from the right
    delay: 600, // Delay before revealing the elements
  }
);

// Reveal these elements from the left side
sr.reveal(
  `.home-data a, .collection-box-1, .featured-product-1, .featured-product-2, .logo-1, .logo-2, .box-1`,
  {
    origin: "left", // Elements will appear from the left
    delay: 600, // Delay before revealing the elements
  }
);

sr.reveal(
  `.offer-data a, .new-box-4, .new-box-5, .new-box-6, .newsletter-sub form, .box-4 i, .copyright`,
  {
    origin: "bottom",
    delay: 600,
  }
);
