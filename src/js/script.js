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
    thumbs: {
      swiper: swiper,
    },
  });