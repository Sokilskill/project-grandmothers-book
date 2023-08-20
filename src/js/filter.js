import SlimSelect from 'slim-select';
import axios from 'axios';
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';
import Pagination from './pagination'
const pagination = new Pagination()

const refs = {
  inputEl: document.querySelector('#search-recipe'),
  selectTime: document.querySelector('.filtr-time'),
  selectArea: document.querySelector('.filtr-area'),
  selectIngredients: document.querySelector('.filtr-ingredients'),
  recipeList: document.querySelector('.cards-recipe'),
  btnBegin: document.querySelector('.btn-beginning'),
  btnPrev: document.querySelector('.btn-previous'),
  btnFirst: document.querySelector('.btn-first'),
  btnSecond: document.querySelector('.btn-second'),
  btnThird: document.querySelector('.btn-third'),
  btnOther: document.querySelector('.btn-show-others'),
  btnNext: document.querySelector('.btn-next'),
  btnEnd: document.querySelector('.btn-end'),
  categoryBtn: document.querySelector('.categories-list'),
  allCatBtn: document.querySelector('all-categories-btn'),
};


createSelect(refs.selectTime, '0 min');

getApi('areas').then(r => {
  refs.selectArea.insertAdjacentHTML('beforeend', stringConcatenation(r));
  createSelect(refs.selectArea, 'Region');
});

getApi('ingredients').then(r => {
  refs.selectIngredients.insertAdjacentHTML(
    'beforeend',
    stringConcatenation(r)
  );
  createSelect(refs.selectIngredients, 'Product');
});

getAllRecipes().then(r => {
  pagination.newRecipesList(r.results)
  initialRecipeWindow();
})















function initialRecipeWindow() {
  if (window.screen.width < 768) {
    // установка числа мин и макс для мобилки через гетеры, добавить
    const result = quantityСalculation();
    refs.recipeList.insertAdjacentHTML('beforeend', addingСards(result));
  } else if (window.screen.width < 1280) {
    
  } else {
    
  }
}


function quantityСalculation() {
  return pagination.allrecipeMas().slice(pagination.start, pagination.end);
}






function addingСards(el) {
  return el.map(({ title, description, _id, rating, thumb }) => {
    const descr = description.slice(0, 94)
    if (rating >= 4.50) {
      return `
      <div class="photo-recipe-card" style="background-image: url(${thumb}); background-repeat: no-repeat; background-size:contain;">
        <button class="fav-btn" data-id="${_id}>
          <svg class="fav-icon">
            <use href="../img/icons.svg#icon-heart"></use>
          </svg>
        </button>

        <div class="info-recipe-card" >
          <h2 class="title-recipe-card">
            ${title}
          </h2>
          <p class="descr-recipe-card">
            ${descr}...
          </p>
          <div class="thum-raying-card">
            <div class="rating-recipe-card">
            <span class="rating-value">${rating}</span>

            <svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg>

          </div>
          <button class="see-recipe-card">See recipe</button>
          </div>
        </div>
      </div>`;
    } else if (rating >= 4) {
      return `
      <div class="photo-recipe-card" style="background-image: url(${thumb}); background-repeat: no-repeat; background-size:contain;">
        <button class="fav-btn" data-id="${_id}>
          <svg class="fav-icon">
            <use href="../img/icons.svg#icon-heart"></use>
          </svg>
        </button>

        <div class="info-recipe-card" >
          <h2 class="title-recipe-card">
            ${title}
          </h2>
          <p class="descr-recipe-card">
            ${descr}...
          </p>
          <div class="thum-raying-card">
            <div class="rating-recipe-card">
            <span class="rating-value">${rating}</span>

            <svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg>

          </div>
          <button class="see-recipe-card">See recipe</button>
          </div>
        </div>
      </div>`;
    } else if (rating >= 3) {
      return `
      <div class="photo-recipe-card" style="background-image: url(${thumb}); background-repeat: no-repeat; background-size:contain;">
        <button class="fav-btn" data-id="${_id}>
          <svg class="fav-icon">
            <use href="../img/icons.svg#icon-heart"></use>
          </svg>
        </button>

        <div class="info-recipe-card" >
          <h2 class="title-recipe-card">
            ${title}
          </h2>
          <p class="descr-recipe-card">
            ${descr}...
          </p>
          <div class="thum-raying-card">
            <div class="rating-recipe-card">
            <span class="rating-value">${rating}</span>

            <svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg>

          </div>
          <button class="see-recipe-card">See recipe</button>
          </div>
        </div>
      </div>`;
    } else if (rating >= 2) {
      return `
      <div class="photo-recipe-card" style="background-image: url(${thumb}); background-repeat: no-repeat; background-size:contain;">
        <button class="fav-btn" data-id="${_id}>
          <svg class="fav-icon">
            <use href="../img/icons.svg#icon-heart"></use>
          </svg>
        </button>

        <div class="info-recipe-card" >
          <h2 class="title-recipe-card">
            ${title}
          </h2>
          <p class="descr-recipe-card">
            ${descr}...
          </p>
          <div class="thum-raying-card">
            <div class="rating-recipe-card">
            <span class="rating-value">${rating}</span>

            <svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg>

          </div>
          <button class="see-recipe-card">See recipe</button>
          </div>
        </div>
      </div>`;
    } else {
      return `
      <div class="photo-recipe-card" style="background-image: url(${thumb}); background-repeat: no-repeat; background-size:contain;">
        <button class="fav-btn" data-id="${_id}>
          <svg class="fav-icon">
            <use href="../img/icons.svg#icon-heart"></use>
          </svg>
        </button>

        <div class="info-recipe-card" >
          <h2 class="title-recipe-card">
            ${title}
          </h2>
          <p class="descr-recipe-card">
            ${descr}...
          </p>
          <div class="thum-raying-card">
            <div class="rating-recipe-card">
            <span class="rating-value">${rating}</span>

            <svg class="rat-icon act">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg><svg class="rat-icon">
              <use href="../img/icons.svg#icon-Star"></use>
            </svg>

          </div>
          <button class="see-recipe-card">See recipe</button>
          </div>
        </div>
      </div>`;
    }

  }).join('')
}

function getAllRecipes() {
  const options = {
    params: {
      category: pagination.categories,
      page: pagination.pages,
      limit: pagination.limits,
      time: pagination.times,
      area: pagination.areas,
      ingredient: pagination.ingredients,
    },
  };

  return axios
    .get(`${BASE_URL}recipes`, options)
    .then(r => r.data);
}

function stringConcatenation(ms) {
  return ms.map(({ _id, name }) => {
    return `<option value="${name}" id="${_id}">${name}</option>`;
  }).join('')
}

function getApi(tag) {
  return axios.get(`${BASE_URL}${tag}`).then(r=>r.data)
}

function createSelect(select, placehold) {
  new SlimSelect({
    select: select,
    settings: {
      contentPosition: 'absolute',
      placeholderText: placehold,
      showSearch: false,
      searchHighlight: true,
    },
  });
}

