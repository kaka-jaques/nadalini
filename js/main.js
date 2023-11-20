//SWIPERS

const swiper = new Swiper('.introSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

const swiper2 = new Swiper('.socialSwiper', {
    slidesPerView: 5,
    freeMode: true,
    grid: {
        rows: 2
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

const swiper3 = new Swiper('.promoSwiper', {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    freeMode: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

const swiper4 = new Swiper('.catalogSwiper', {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

//HEADER SIMPLIFY FUNCTION

$(window).scroll(function(){
    if($(window).scrollTop() >= 250){
        document.querySelector("#navbar-menu").classList.add("simplified")
    }
    else {
        document.querySelector("#navbar-menu").classList.remove("simplified")
    }
})