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
      if (window.innerWidth > 1545) {
        menu.classList.remove("show");
      }
    });
  }
});

//===== CARDS PRODUTOS - BOTÃO SOLICITAR =====
const botoesSolicitar = document.querySelectorAll('.btn-solicitar');
 
botoesSolicitar.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.closest('.produto-card');
 
        if(!card.classList.contains('solicitado')){
            card.classList.add('solicitado');
            botao.textContent = 'Solicitado';
        } else {
            card.classList.remove('solicitado');
            botao.textContent = 'Solicitar';
        }
    });
});