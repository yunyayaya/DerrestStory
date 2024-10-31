

console.log("cart成功")




//手作區swiper
const handmadeSwiper =new Swiper(".handmade-swiper-control",{
    speed:6000,
    loop:true,
    autoHeight: true,
    autoplay:{
        delay:0,
        disableOnInteraction: false, 
    },
    spaceBetween:24,
    slidesPerView:4,
    breakpoints:{
        375:{
            slidesPerView:1.9,
            spaceBetween:16,
        },
        576:{
            slidesPerView:2.3,
        },
        768:{
            slidesPerView:3,
        },
        992:{
            slidesPerView:3.5,
        },
        1080:{
            slidesPerView:4,
        },
    },
    
});

//加購區swiper
const buyMoreSwiper = new Swiper(".buymore-swiper-control",{
    speed:6000,
    loop:true,
    autoHeight: true,
    autoplay:{
        delay:0,
        disableOnInteraction: false, 
    },
    spaceBetween:24,
    slidesPerView:3,
    breakpoints:{
        375:{
            slidesPerView:1.3,
            spaceBetween:16,
        },
        576:{
            slidesPerView:1.6,
        },
        768:{
            slidesPerView:2,
        },
        1080:{
            slidesPerView:3,
        },
    },
}

)