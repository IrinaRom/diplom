$(document).ready(function(){
   $(".slider").slick({
    dots: true,
    adaptiveHeight:true,
    slidesToShow:5,
    slidesToScroll:5,
      speed:1000,
      infinite: false,
      adaptiveHeight: true,
      responsive: [
         {
         breakpoint: 800,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           dots: false,
         }
       },
       {
         breakpoint: 400,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: false,
         }
       },
      ]
   });
  });

  let popup = document.getElementById("modal");
  let popupContent = document.getElementById("modal-content");
  let popupClose = document.getElementById("close-popup");

  function popupOpen(event){
   popup.style = "opacity: 1;visibility: visible";
   popupContent.style = "opacity: 1;visibility: visible;";
      $("body").toggleClass("lock");

  }
setTimeout(popupOpen, 10000);
        
  popupClose.onclick = function closePopup(){
   popup.style = "opacity: 0;visibility: hidden";
   popupContent.style = "opacity: 0;visibility: hidden;";
   $("body").removeClass("lock");
}

