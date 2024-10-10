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
