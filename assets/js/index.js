const swiper = new Swiper('.swiper', {
  // 分頁、左右箭頭、滾動條若有使用則必需設定          
  // 分頁   
  pagination: {
    el: '.swiper-pagination',
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 滾動條
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const sectionTopPickSwiper = new Swiper(".section-top-pick-swiper-container", {
  slidesPerView: 1,
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
   