let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// shadow on scroll

function shadowNavBar(){
  window.addEventListener('scroll', () => {
      const pageHeight = window.scrollY;
  const navbar = document.querySelector('.header');

      if(pageHeight < 300){
          navbar.classList.remove('scroll')
      }else{
          navbar.classList.add('scroll')
      }
  })
}

shadowNavBar();

// INITIALIZE SWIPER
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
  });


  var swiper = new Swiper(".differentials-slider", {
    loop:false,
    spaceBetween: 20,
    slidesPerView: 0,
    grapCursor:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});