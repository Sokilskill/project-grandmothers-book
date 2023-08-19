export default class Pagination {
  constructor() {
    this.request = '';
    this.time = 0;
    this.area = '';
    this.ingredient = '';
    this.page = 1;
    this.limit = 6;
    this.category = ''; 
    this.baseUrl = 'https://tasty-treats-backend.p.goit.global/api/';
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
    return this.time;
  }
  set ingredients(newIngredient) {
    this.ingredient = newIngredient;
  }

  get pages() {
    return this.request;
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