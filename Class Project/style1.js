
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }); 
  
   var icon = document.getElementById("logo1");

   icon.onclick = function(){
       document.body.classList.toggle("dark-theme");
       if(document.body.classList.contains("dark-theme")){
           icon.src = "pic/moon.png";
       }else{
            icon.src = "pic/sun.png";
       }

   }