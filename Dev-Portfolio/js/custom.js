
(function ($) {
  
    "use strict";
  
      // NAVBAR
      $('.navbar-nav .nav-link').click(function(){
          $(".navbar-collapse").collapse('hide');
      });
  
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
  
          if (scroll >= 50) {
              $(".navbar").addClass("sticky-nav");
          } else {
              $(".navbar").removeClass("sticky-nav");
          }
      });
  
      // BACKSTRETCH SLIDESHOW
      $('#section_1').backstretch([
        "images/slide/coding-club.jpg", 
        "images/slide/surface-71_s6RDJpGc-unsplash.jpg",
        "images/slide/programming-guy.jpg"
      ],  {duration: 2000, fade: 750});
      
    })(window.jQuery);
  
  
function graphicDesigGo() {
    window.location = 'graphic-design.html';
  }