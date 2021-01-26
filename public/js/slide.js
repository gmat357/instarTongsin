var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay:{
        delay:2000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});