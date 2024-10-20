//這個檔案用來客製輪播

//html檔案引入class="swiper-control" 有改名字這裡一定要改!!不然會吃不到
const swiper = new Swiper('.swiper-control', {
  slidesPerView: 'auto', //顯示的卡片數量
  spaceBetween: 40,     //每個輪播卡片間距40px
  freeMode: true,      //自由模式
  
  loop: true, // 讓輪播循環
  //分頁小圓點
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 點分頁小圓點時切換頁面
  },
  //左右切換箭頭
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //滾動條
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // 滾動條可拖動
  },
  //自動播放
    autoplay: {
     //3秒後自動波放下一張 
     delay: 3000,
     // 使用者點擊後不停止自動播放
    disableOnInteraction: false,   
  },
});
// 用來確認我的頁面有沒有吃到js檔案
console.log("Swiper initialized"); 