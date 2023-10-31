
const swiperSlider = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides:false,
    slidesPerView:3,
    spaceBetween: 20,


  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });