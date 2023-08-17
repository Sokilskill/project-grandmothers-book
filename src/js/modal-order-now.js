// * Order Now
const elements = {
  heroOrderBtnEl: document.querySelector('.hero-order-btn'),
  modalCloseBtnEl: document.querySelector('.modal-close-btn'),
  shoppingCartBtnEl: document.querySelector('.shopping-cart'),
  backdropEl: document.querySelector('.backdrop'),
  bodyEL: document.querySelector('body'),
  telInputEl: document.querySelector('.tel-input'),
};

elements.heroOrderBtnEl.addEventListener('click', orderNowOpn);
elements.shoppingCartBtnEl.addEventListener('click', orderNowOpn);

function orderNowOpn(e) {
  window.onclick = function (event) {
    if (event.target != elements.backdropEl) {
    } else {
      modalClose();
    }
  };
  elements.bodyEL.classList.add('my-body-noscroll-class');
  elements.heroOrderBtnEl.removeEventListener('click', orderNowOpn);
  elements.shoppingCartBtnEl.removeEventListener('click', orderNowOpn);
  elements.modalCloseBtnEl.addEventListener('click', modalClose);
  elements.backdropEl.classList.remove('is-hidden');

  elements.telInputEl.addEventListener('click', autofillTel);
}

function modalClose(e) {
  elements.bodyEL.classList.remove('my-body-noscroll-class');
  elements.modalCloseBtnEl.removeEventListener('click', modalClose);
  elements.heroOrderBtnEl.addEventListener('click', orderNowOpn);
  elements.shoppingCartBtnEl.addEventListener('click', orderNowOpn);
  elements.backdropEl.classList.add('is-hidden');
}

function autofillTel() {
  if (!elements.telInputEl.value) {
    elements.telInputEl.value = '+38';
  }
}
