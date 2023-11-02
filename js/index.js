
const swiperSlider = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    spaceBetween: 20,
    freeMode:true,
    

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass:'swiper-pagination-bullet',
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

  