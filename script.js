/* script.js - apenas interações visuais simples (menu mobile e abas do interclasse) */

document.addEventListener('DOMContentLoaded', function () {

  // Menu mobile (hambúrguer)
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
  }

  // Abas de esporte (Futsal / Vôlei)
  const sportTabs = document.querySelectorAll('.sport-tab');
  if (sportTabs.length > 0) {
    sportTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        sportTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const sport = this.getAttribute('data-sport');
        document.getElementById('futsal').style.display = (sport === 'futsal') ? 'block' : 'none';
        document.getElementById('volei').style.display = (sport === 'volei') ? 'block' : 'none';
      });
    });
  }

  // Filtros do blog (visual apenas, sem lógica de filtragem real ainda)
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

});