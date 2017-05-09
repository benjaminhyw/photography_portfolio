var ready = function() {

  $(".individual-photo-div").hide();
  var scroll_count = scroll_count || 0


  // You can refactor the two scroll animations below by naming variables?


  // This is what does the downward scroll animation
  $("#arrow-pic").on("click", function(event){
    $('html, body').animate({
    scrollTop: $("#photo-container").offset().top
    }, 1230, "swing");
  });

  // This is what does the upward scroll animation
  $("#nav-name").on("click", function(event){
    $('html, body').animate({
    scrollTop: $("#site-container").offset().top
    }, 875, "swing");
  });

  // This controls the color changing nav bar feature
  if($(window).scrollTop() < 325) {
    $("#nav").removeClass("active");
    $(".nav-underline-span").removeClass("active-nav-span");
    $(".footer-overhead-line-span").removeClass("active-footer-overhead-line-span");
  };

  $(window).on("scroll", function(){
    if($(window).scrollTop() > (325)) {
      $("#nav").addClass("active");
      $(".nav-underline-span").addClass("active-nav-span");
      $(".footer-overhead-line-span").addClass("active-footer-overhead-line-span");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#nav").removeClass("active");
      $(".nav-underline-span").removeClass("active-nav-span");
      $(".footer-overhead-line-span").removeClass("active-footer-overhead-line-span");
    }

    // This is what fades the images when you first scroll down

    if(($(window).scrollTop() > (63)) && (scroll_count < 1) ){
      scroll_count++;
      $(".individual-photo-div").fadeIn("slow");
    };
  });
};
$(document).ready(ready);
$(document).on('turbolinks:load', ready);