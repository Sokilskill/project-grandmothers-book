import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';
const END_POINT = 'events';
const swiperEl = document.querySelector('.swiper-wrapper');

const fetchEvents = async () => {
  try {
    const response = await fetch(`${BASE_URL}${END_POINT}`);
    const events = await response.json();
    const data = await Promise.allSettled(events);
    console.log(data);
    swiperEl.innerHTML = markupEvents(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchEvents();

// new Swiper('.swiper', {
//   modules: [Navigation, Pagination],
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

function markupEvents(arr) {
  return arr
    .map(
      ({
        value: { cook, topic },
      }) => `<div class="swiper-slide"><div class="swiper-card-cook"><img class="hero-cook-img" src="${cook.imgWebpUrl}" alt="${cook.name}"></img></div>
            <div class="swiper-card-prev"><img class="hero-previev-img" src="${topic.previewWebpUrl}" alt="${topic.name}"></img><p class="swiper-dich-text">${topic.name}</p>
        <p class="swiper-origin-text">${topic.area}</p></div>
            <div class="swiper-card-viev"><img class="hero-viev-img" src="${topic.imgWebpUrl}" alt="${topic.name}"></img></div></div>`
    )
    .join('');
}
