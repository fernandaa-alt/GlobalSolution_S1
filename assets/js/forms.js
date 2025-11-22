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

    if (!card.classList.contains('solicitado')) {
      card.classList.add('solicitado');
      botao.textContent = 'Solicitado';
    } else {
      card.classList.remove('solicitado');
      botao.textContent = 'Solicitar';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    // Regex para email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex para telefone
    const telefoneRegex = /^(\(?\d{2}\)?\s?)?[\d\s-]{8,11}$/;

    let errors = [];

    if (!emailRegex.test(email)) {
      errors.push("Por favor, insira um email válido.");
    }

    if (!telefoneRegex.test(telefone)) {
      errors.push("Por favor, insira um telefone válido.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }

    alert("Formulário enviado com sucesso!");
    form.reset();
  });
});

// Botões de detalhes FAQ
const detailsButtons = document.querySelectorAll(".details-btn");

detailsButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Aqui você pode abrir os detalhes do item!");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});