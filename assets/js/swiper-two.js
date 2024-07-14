var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 6,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 6,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
