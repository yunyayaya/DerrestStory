const bannerSwiper = new Swiper(".insp-swiper", {
  loop: true,
  speed: 5000,
  freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true, 
  },
  centeredSlides: true,
  slidesPerView: 2, //設定每次在畫面上顯示 2張slide
  breakpoints: {
    375: {
      slidesPerView: 1.4,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1.4
    },
    992: {
      slidesPerView: 2
    },
    1080: {
      slidesPerView: 2.3
    }
  },
  spaceBetween: 35, //slide間距40
  // effect: 'slide',
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

console.log("有顯示出來，確定有載入JS")