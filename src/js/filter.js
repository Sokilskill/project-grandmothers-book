import SlimSelect from 'slim-select';


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
};


new SlimSelect({
  select: '.filtr-time',
  settings: {
    contentPosition: 'absolute',
    placeholderText: '0 min',
    showSearch: false,
    searchHighlight: true,
  },
});

new SlimSelect({
  select: '.filtr-area',
  settings: {
    contentPosition: 'absolute',
    placeholderText: 'Region',
    showSearch: false,
    searchHighlight: true,
  },
});

new SlimSelect({
  select: '.filtr-ingredients',
  settings: {
    contentPosition: 'absolute',
    placeholderText: 'Product',
    showSearch: false,
    searchHighlight: true,
  },
});