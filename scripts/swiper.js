const heroSwiperEL = document.querySelector('.js-hero-swiper')
const popularGoodsEL = document.querySelector('.js-popular-goods')

const swiperHero = new Swiper(heroSwiperEL, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperPopularGoods = new Swiper(popularGoodsEL, {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});