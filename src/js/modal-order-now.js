import { addFetch } from './add-order-API';

const elements = {
  form: document.querySelector('form'),
  heroOrderBtn: document.querySelector('.hero-order-btn'),
  modalCloseBtn: document.querySelector('.modal-close-btn'),
  shoppingCartBtn: document.querySelector('.shopping-cart'),
  backdrop: document.querySelector('.backdrop'),
  body: document.querySelector('body'),
  telInput: document.querySelector('.tel-input'),
};

elements.heroOrderBtn.addEventListener('click', orderNowOpn);
elements.shoppingCartBtn.addEventListener('click', orderNowOpn);

function orderNowOpn(e) {
  window.onclick = function (event) {
    if (event.target != elements.backdrop) {
    } else {
      modalClose();
    }
  };
  elements.body.classList.add('my-body-noscroll-class');
  elements.heroOrderBtn.removeEventListener('click', orderNowOpn);
  elements.shoppingCartBtn.removeEventListener('click', orderNowOpn);
  elements.modalCloseBtn.addEventListener('click', modalClose);
  elements.backdrop.classList.remove('is-hidden');
}

function modalClose(e) {
  elements.body.classList.remove('my-body-noscroll-class');
  elements.modalCloseBtn.removeEventListener('click', modalClose);
  elements.heroOrderBtn.addEventListener('click', orderNowOpn);
  elements.shoppingCartBtn.addEventListener('click', orderNowOpn);
  elements.backdrop.classList.add('is-hidden');
}

function post(e) {
  e.preventDefault();
  const data = {
    Name: elements.form[0].value,
    Email: elements.form[1].value,
    Tell: elements.form[2].value,
    Comment: elements.form[3].value,
  };

  addFetch(data);

  elements.form.reset();
}

elements.form.addEventListener('submit', post);
