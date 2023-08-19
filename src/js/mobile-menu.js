const burgerBtnEl = document.querySelector('.js-open-menu');
const closeBtnEl = document.querySelector('.js-close-menu');
const mobileMenuEl = document.querySelector('.js-mob-menu');

burgerBtnEl.addEventListener('click', handlerBurgerBtn);

function handlerBurgerBtn(evt) {
  mobileMenuEl.classList.toggle('is-open');
  console.log('ok its working');
}

closeBtnEl.addEventListener('click', handlerCloseBtn);

function handlerCloseBtn(evt) {
  console.log('ok its not working');
  mobileMenuEl.classList.toggle('is-open');
}
