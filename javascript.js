document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const toggle = document.getElementById('menuToggle');
  const list = document.querySelector('.menu__list');

  toggle.addEventListener('click', () => {
    list.classList.toggle('menu__list--open');
    toggle.textContent = list.classList.contains('menu__list--open') ? '×' : '☰';
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      if (list.classList.contains('menu__list--open')) {
        list.classList.remove('menu__list--open');
        toggle.textContent = '☰';
      }
    });
  });

  // Form fake submit
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada! Em breve retornamos.');
    e.target.reset();
  });
});