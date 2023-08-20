const burgerBtnEl = document.querySelector('.js-open-menu');
const closeBtnEl = document.querySelector('.js-close-menu');
const mobileMenuEl = document.querySelector('.js-mob-menu');

burgerBtnEl.addEventListener('click', handlerBurgerBtn);

function handlerBurgerBtn(evt) {
  mobileMenuEl.classList.toggle('is-open');
}

closeBtnEl.addEventListener('click', handlerCloseBtn);

function handlerCloseBtn(evt) {
  mobileMenuEl.classList.toggle('is-open');
}
