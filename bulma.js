const hamburguesa = document.querySelector('.navbar-burger');
const navmenu = document.querySelector('.navbar-menu');
const botonLogin = document.getElementById('botonLogin');
const modalLogin = document.getElementById('modalLogin');
const modalBg = document.querySelector('.modal-background');
const modalClose = document.querySelector('.modal-close');

hamburguesa.addEventListener('click', activo, true);
botonLogin.addEventListener('click', modal, true);
modalBg.addEventListener('click', modal, true);
modalClose.addEventListener('click', modal, true);

function activo(e) {
    hamburguesa.classList.toggle('is-active');
    navmenu.classList.toggle('is-active');
}

function modal() {
    modalLogin.classList.toggle('is-active');
}