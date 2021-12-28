var swiper = new Swiper(".deal-day", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".category-slide", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    grabCursor: true,
});

var swiper = new Swiper(".topSell-category-slide", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    grabCursor: true,
});


var swiper = new Swiper(".toppic-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    slidesPerGroup: 3,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


var swiper = new Swiper(".recently-wiewed", {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    freeMode: true,
    loopFillGroupWithBlank: true,
    grabCursor: true,
});

var swiper = new Swiper(".brands", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    grabCursor: true,
});

//detail 
var swiper = new Swiper(".product-slick", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    slidesPerGroup: 3,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },

});