console.log("Hello");
const hamburguerMenu = document.getElementById("icon-menu");
const mobileMenu = document.querySelector(".menu-mobile");

hamburguerMenu.addEventListener("click", toggleMobileMenu);
hamburguerMenu.addEventListener("click touchstart", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
