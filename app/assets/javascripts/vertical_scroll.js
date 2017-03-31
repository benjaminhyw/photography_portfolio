var ready = function() {

  $(".individual-photo").hide();
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
  };

  $(window).on("scroll", function(){
    if($(window).scrollTop() > (325)) {
      $("#nav").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#nav").removeClass("active");
    }

    // This is what fades the images when you first scroll down

    if(($(window).scrollTop() > (63)) && (scroll_count < 1) ){
      scroll_count++;
      $(".individual-photo").fadeIn("slow");
    };
  });
};
$(document).ready(ready);
$(document).on('turbolinks:load', ready);