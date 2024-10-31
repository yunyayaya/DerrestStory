console.log("有顯示出來，確定有載入JS")

//團隊甜點創靈感 Swiper
const inspirationSwiper = new Swiper(".insp-swiper-control", {
  loop: false, 
  speed: 1000,   
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false, 
  // },
  centeredSlides: true,
  slidesPerView: 2, //設定每次在畫面上顯示 2張slide
  breakpoints: {
    375: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    }
  },
  spaceBetween: 40, //slide間距40
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

//顧客甜點故事投稿 Swiper
const customerSubmitSwiper = new Swiper(".customer-submit-swiper-control", {
  loop: false,
  speed: 2000,  //0,
  
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false, 
  // },
  centeredSlides: true,
  slidesPerView: 2, //設定每次在畫面上顯示 2張slide
  breakpoints: {
    375: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.4,
    },
    992: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 2.8,
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


//顧客甜點故事投稿 Swiper
const themeSwiper = new Swiper(".theme-swiper-control", {
  loop: false,
  speed: 2000,  //0,
  
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false, 
  // },
  centeredSlides: true,
  slidesPerView: 3, //設定每次在畫面上顯示 3張slide
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
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
