const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburger-menu");
const navLink = document.querySelectorAll(".hamburger-item");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
