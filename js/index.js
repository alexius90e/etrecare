const careProgramSwiper = new Swiper('.care-program .swiper', {
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
    1024: {
      slidesPerView: 2,
    },
    1440: {
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

const selectProductSwiper = new Swiper('.select-product__info-products .swiper', {
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
      slidesPerView: 1.75,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3.5,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.select-product__info-products-controls-next',
    prevEl: '.select-product__info-products-controls-prev',
  },
});

const whereBuySwiper = new Swiper('.where-buy .swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    360: {
      slidesPerView: 1.75,
    },
    425: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
    1680: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.where-buy__slider-controls-next',
    prevEl: '.where-buy__slider-controls-prev',
  },
});
