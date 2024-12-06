const hamMenu = document.querySelector(".ham_menu");

const offScreenMenu = document.querySelector(".offscreen");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
