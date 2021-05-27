$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,  
    slidesToShow:1,
    slidesToScroll:1,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 5) {
      $("nav").addClass("nav-bg");
      $(".menu-icon").addClass("menu-black");
      $(".logo img.wt-logo").hide();
      $(".logo img.fc-logo").show();
      $(".nav-item a").addClass("black");
    } else {
      $("nav").removeClass("nav-bg");
      $(".menu-icon").removeClass("menu-black");
      $(".logo img.wt-logo").show();
      $(".logo img.fc-logo").hide();   
      $(".nav-item a").removeClass("black"); 
    }
  })
    

});
