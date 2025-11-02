// Ativa e desativa o menu no celular
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('menuItems').classList.toggle('active');
});

// Abre submenu no toque no celular
document.querySelector('.ListaSemestresOn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.ListaSemestres').classList.toggle('open');
});
