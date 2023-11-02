
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
   
  });

//  counter for statis box numbers

const followersCount = document.querySelector('#statis-followers');

let followersCounter = 0;
const interval1 = setInterval(()=>{
    followersCount.innerHTML = followersCounter;
    followersCounter++

    if (followersCounter === 1250){
      clearInterval(interval1)
    }
},); 

const classesCount = document.querySelector('#statis-classes');

let classesCounter = 0;
const interval2 = setInterval(()=>{
    classesCount.innerHTML = classesCounter;
    classesCounter++

    if (classesCounter === 346){
      clearInterval(interval2)
    }
},); 

const studentsCount = document.querySelector('#statis-students');

let studentsCounter = 0;
const interval3 = setInterval(()=>{
    studentsCount.innerHTML = studentsCounter;
    studentsCounter++

    if (studentsCounter === 210){
      clearInterval(interval3)
    }
},); 

const certifiedCount = document.querySelector('#statis-certified');

let certifiedCounter = 0;
const interval4 = setInterval(()=>{
  certifiedCount.innerHTML = certifiedCounter;
  certifiedCounter++

    if (certifiedCounter === 508){
      clearInterval(interval4)
    }
},); 