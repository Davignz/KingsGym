const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('#nav');

btnMobile.addEventListener('click', function() {
  nav.classList.toggle('active');
  btnMobile.classList.toggle('active');
});
