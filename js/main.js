// active all js in here
$(document).ready(function(){
  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  }); 
  
  // slider area
$('.slider-active').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  });


  // counter area 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// testimonial area
$('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  arrows:false,
  // autoplay:true,
  autoplaySpeed:2000
});
// icon area
$('.icon-active').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  // autoplay:true,
  autoplaySpeed:2000,
  responsive: [
    {
      // max width
      breakpoint: 1399.98, 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// scroll up
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fa-solid fa-angles-up"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
// wow active
new WOW().init();

    
})