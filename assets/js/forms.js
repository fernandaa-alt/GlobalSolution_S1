// === MENU HAMBURGUER ===
// Aob
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        menu.classList.remove("show");
      }
    });
  }
});