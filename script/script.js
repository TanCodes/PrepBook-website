// Modal - Bootstrap
$(document).ready(function(){
  if(screen.width > 823){
    $('#premiumModal').modal('show');
  }
}); 

//  reviews section - Swiper js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Fade animation -  AOS 
AOS.init({
    offset: 300,
    duration:1000
  });