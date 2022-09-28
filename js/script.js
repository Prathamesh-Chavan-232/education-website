const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const leftNav = document.querySelector(".left-nav");
const rightNav = document.querySelector(".right-nav");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-height");
  leftNav.classList.toggle("hidden");
  rightNav.classList.toggle("hidden");
});
