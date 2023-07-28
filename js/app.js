// slider 
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });
// son

// 
function checkScrollPosition() {
  var scrollPosition = window.scrollY;
  let header = document.querySelector('.header-area'); 
  let logo = document.querySelector('.logo-one')
  let logoTwo = document.querySelector('.logo-two')

  if (scrollPosition > window.innerHeight * 0.2) {
      header.classList.add('active');
      logo.classList.add('logo-active')
      logoTwo.classList.add('logo-active-two')
  } 
  else{
      header.classList.remove('active');
      logo.classList.remove('logo-active')
      logoTwo.classList.remove('logo-active-two')

  }
}

window.addEventListener('scroll', checkScrollPosition);