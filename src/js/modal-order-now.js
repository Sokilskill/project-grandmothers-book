// * Order Now

const heroOrderBtnEl = document.querySelector('.hero-order-btn');
const modalCloseBtnEl = document.querySelector('.modal-close-btn');
const backdropEl = document.querySelector('.backdrop');

heroOrderBtnEl.addEventListener('click', orderNowOpn);

function orderNowOpn(e) {
  heroOrderBtnEl.removeEventListener('click', orderNowOpn);
  modalCloseBtnEl.addEventListener('click', modalClose);
  backdropEl.classList.remove('is-hidden');
}

function modalClose(e) {
  modalCloseBtnEl.removeEventListener('click', modalClose);
  heroOrderBtnEl.addEventListener('click', orderNowOpn);
  backdropEl.classList.add('is-hidden');
}
