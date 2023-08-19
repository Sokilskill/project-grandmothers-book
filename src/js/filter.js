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
  category: document.querySelector('.categories-list'),
  allCatBtn: document.querySelector('all-categories-btn'),
  allCateg: document.querySelector('categories'),
};

getApiServer().then(r => {
  fillingCategories(r)
})






createSelect(refs.selectTime, '0 min');
createSelect(refs.selectArea, 'Region');
createSelect(refs.selectIngredients, 'Product');






// function getAllRecipes(value) {
//   const options = {
//     params: {
//       category: 'Beef',
//       page: 1,
//       limit: 6,
//       time: null,
//       area: '',
//       ingredients: '',
//     },
//   }

//   return axios
//     .get(
//       `https://tasty-treats-backend.p.goit.global/api/recipes`, options
//     )
//     .then(r => r.data);
// }

function addCategory(all) {
  refs.category.insertAdjacentHTML('beforeend',all )
}

function getApiServer() {
  return axios.get(`${BASE_URL}categories`).then(r => r.data);
}

function fillingCategories(categories) {
  const string = categories
    .map(
      ({ name, _id }) =>
        `<li class="category-item"><button class="category-btn" data-id="${_id}">${name}</button></li>`
    )
     .join('');
    addCategory(string);
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

