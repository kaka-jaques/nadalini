//REQUISIÇÃO INSTRAGRAM

const apiUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=IGQWRPTTZAmdllIU0xqUmJPN3NfMkt2WlQ1VmRfb2dDb1NXR0hSVHNSMTZASNC1lcDQ0bzhUQUNjYXNSbThZAYkF0S0hvV08yZA1RORGhyS3M1dkUybDJvY2FHZA0hMTFpnLXl0QVZAaRkZABWlJITmd2MVBiWmpBclpWZAzQZD&limit=10';

fetch(apiUrl)
  .then(response => {
    // Verifica se a resposta está OK (status 200-299)
    if (!response.ok) {
      console.log('Erro na requisição instagram:', response.status);
    }
    // Converte a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Manipula os dados da resposta
    for(let i = 0;i<data.data.length;i++){
        document.querySelector('#slide'+i).setAttribute('src', data.data[i].media_url);
        document.querySelector('#url'+i).setAttribute('href', data.data[i].permalink);
    }

  })
  .catch(error => {
    // Manipula erros durante a requisição
    console.error('Erro:', error);
  });

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
      clickable: false
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

const swiper5 = new Swiper('.feedbackSwiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
})

const swiper6 = new Swiper('.teamSwiper', {
    slidesPerView: 6,
    spaceBetween: 40,
    centeredSlides: true,
    allowSlideNext: false,
    allowSlidePrev: false
})

//HEADER SIMPLIFY FUNCTION

$(window).scroll(function(){
    document.querySelector("#navbar-menu").setAttribute("style", "background-color: rgba(238, 238, 238," + ($(window).scrollTop() / 200) + ");")
})