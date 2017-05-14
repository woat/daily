const navToggle = document.getElementById('nav-toggle'),
      navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', function() {
  this.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
});
