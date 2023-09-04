console.log("Hello");
const hamburguerMenu = document.getElementById("icon-menu");
const mobileMenu = document.querySelector(".menu-container");

const menuClients = document.querySelector(".clients");
const menuServices = document.querySelector(".services");

const clientsList = document.querySelector(".menu-clients");
const servicesList = document.querySelector(".menu-services");

hamburguerMenu.addEventListener("click", toggleMobileMenu);
menuClients.addEventListener("click", toggleMenuClients);
menuServices.addEventListener("click", toggleMenuServices);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  clientsList.classList.toggle("inactive");
}

function toggleMenuClients() {
  clientsList.classList.toggle("inactive");
}

function toggleMenuServices() {
  servicesList.classList.toggle("inactive");
}
