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

// animation text (Mobile view)
  const text1 = ['Increase Concentration','Daily Reading Habit',"Boost Memory Retention","With Refined Experience"];
  let count1 = 0;
  let index1 = 0;
  
  let letter1 = [''];
  
  (function typeanimate(){
  
    if (count1 === text1.length){
      count1 = 0;
    }
  
    currentTex1 = text1[count1];
    letter1 = currentTex1.slice(0, ++index1);
  
    document.querySelector('.text-animation1').textContent=letter1;
  
    if(letter1.length === currentTex1.length){
      count1++;
      index1=0;
    }
  
    setTimeout(typeanimate, 300);
  }());

// Fade animation -  AOS 
AOS.init({
    offset: 300,
    duration:1000
  });