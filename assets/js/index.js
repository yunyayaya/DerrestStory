const indexBannerSwiper = new Swiper('.banner-swiper', {
  loop: true,
  // 分頁、左右箭頭、滾動條若有使用則必需設定          
  // 分頁   
  pagination: {
    el: '.swiper-pagination',
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.banner-swiper-button-next',
    prevEl: '.banner-swiper-button-prev',
  },
});


const sectionTopPickSwiper = new Swiper(".section-top-pick-swiper", {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
  },
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".section-top-pick-swiper-pagination",
    clickable: true, 
  },
  navigation: {
    nextEl: '.section-top-pick-swiper-button-next',
    prevEl: '.section-top-pick-swiper-button-prev',
  },
  autoHeight: true,
  watchOverflow: true,
});

const sectionDessertStorySwiper = new Swiper(".section-dessert-story-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  breakpoints: {
    576: {
      slidesPerView: 2,
      loopedSlides: 2, // 中等螢幕設為 2
    },
    768: {
      slidesPerView: 3,
      loopedSlides: 3, // 大螢幕設為 3
    },
  },
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 24,
  pagination: {
    el: ".section-dessert-story-swiper-pagination",
    clickable: true, 
  },
  navigation: {
    nextEl: '.section-dessert-story-swiper-button-next',
    prevEl: '.section-dessert-story-swiper-button-prev',
  },
  autoHeight: true,
  watchOverflow: true,
});
   