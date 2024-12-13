const swiper = new Swiper('.care-program .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 1.1,
    },
    576: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 2.5,
    },
    1600: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.care-program__slider-controls-next',
    prevEl: '.care-program__slider-controls-prev',
  },
});
