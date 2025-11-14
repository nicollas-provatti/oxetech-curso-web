const btnOpenMenu = document.getElementById('open-menu');
const btnCloseMenu = document.getElementById('close-menu');
const navMobile = document.getElementById('nav-mobile');

btnOpenMenu.addEventListener('click', () => {
  navMobile.classList.add("show");
  navMobile.classList.remove("hidden");
});

btnCloseMenu.addEventListener('click', () => {
  navMobile.classList.remove("show");
  navMobile.classList.add("hidden");
});

