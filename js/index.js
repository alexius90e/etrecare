const firstScreenSwiper = new Swiper('.first-screen .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

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
      slidesPerView: 2.1,
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

const modalBuySwiper = new Swiper('.modal-buy .swiper', {
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
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.modal-buy__slider-controls-next',
    prevEl: '.modal-buy__slider-controls-prev',
  },
});

const selectProductBuyButtons = document.querySelectorAll(
  '.select-product__info-card-details-buy-button'
);

const modalBuy = document.querySelector('.modal-buy');

selectProductBuyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (modalBuy) {
      modalBuy.classList.add('active');
    }
  });
});

if (modalBuy) {
  modalBuy.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.classList.remove('active');
    }
  });
}

///

const selectProductSlides = document.querySelectorAll('.select-product .swiper-slide');

let needsProp = '';

let typeProp = '';

const selectProductNeedsCards = document.querySelectorAll('.select-product__needs-card');

selectProductNeedsCards.forEach((needsCard) => {
  needsCard.addEventListener('click', (event) => {
    selectProductNeedsCards.forEach((card) => {
      if (card !== event.currentTarget) card.classList.remove('active');
    });
    event.currentTarget.classList.toggle('active');

    if (event.currentTarget.classList.contains('active')) {
      needsProp = event.currentTarget.dataset.needs;
    } else {
      needsProp = '';
    }
    updateSelectProductSwiper(selectProductSwiper);
  });
});

const selectProductmenuButtons = document.querySelectorAll('.select-product__info-menu-button');

selectProductmenuButtons.forEach((menuButton) => {
  menuButton.addEventListener('click', (event) => {
    selectProductmenuButtons.forEach((button) => {
      if (button !== event.currentTarget) button.classList.remove('active');
    });
    event.currentTarget.classList.toggle('active');

    if (event.currentTarget.classList.contains('active')) {
      typeProp = event.currentTarget.dataset.type;
    } else {
      typeProp = '';
    }
    updateSelectProductSwiper(selectProductSwiper);
  });
});

function updateSelectProductSwiper(swiper) {
  const slides = [...selectProductSlides].filter((slide) => {
    const isTypeCorrect = typeProp === slide.dataset.type || typeProp === '';
    const isNeedsCorrect = needsProp === slide.dataset.needs || needsProp === '';
    if (isTypeCorrect && isNeedsCorrect) return slide;
  });
  swiper.removeAllSlides();
  swiper.appendSlide([...slides]);
}

///

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation');
    }
  });
});

observer.observe(document.querySelector('.skin-needs__content-scin'));
observer.observe(document.querySelector('.skin-needs__content-plant'));
observer.observe(document.querySelector('.skin-needs__content-life'));
