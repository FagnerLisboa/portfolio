document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle'); // Botão do menu
  const nav = document.querySelector('.nav'); // Menu de navegação

  if (toggleButton && nav) {
    // Alterna as classes 'active' no botão e no menu
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleButton.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
});

export default function menuMobile() {
  const btnMobile = document.getElementById('btn-mobile'); // Botão alternativo
  const nav = document.getElementById('nav');

  if (btnMobile && nav) {
    btnMobile.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
}
