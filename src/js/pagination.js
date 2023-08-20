export default class Pagination {
  constructor() {
    this.request = '';
    this.start = 0;
    this.end = 6;
    this.time = null;
    this.area = '';
    this.ingredient = '';
    this.page = 1;
    this.limit = 400;
    this.category = ''; 
    this.recipe = [];
  }

  newRecipesList(mass) {
    this.recipe.push(...mass)
  }
  allrecipeMas() {
    return this.recipe
  }
  get req() {
    return this.request;
  }
  set req(newRequest) {
    this.request = newRequest;
  }

  get times() {
    return this.time;
  }
  set times(newtime) {
    this.time = newtime;
  }

  get areas() {
    return this.area;
  }
  set areas(newArea) {
    this.area = newArea;
  }

  get ingredients() {
    return this.ingredient;
  }
  set ingredients(newIngredient) {
    this.ingredient = newIngredient;
  }

  get pages() {
    return this.page;
  }
  set pages(newPage) {
    this.page = newPage;
  }

  get limits() {
    return this.limit;
  }
  set limits(newLimit) {
    this.limit = newLimit;
  }

  get categories() {
    return this.category;
  }
  set categories(newCategory) {
    this.category = newCategory;
    }
    

}