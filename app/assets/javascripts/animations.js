// Shorthand for Document Ready
$(function(){

  // This is what does the downward scroll animation
  $("#arrow-pic").on("click", function(event){
    $('html, body').animate({
    scrollTop: $("#photo-container").offset().top
    }, 1500, "swing");
  });

  $(window).on("scroll", function(){
    if($(window).scrollTop() > 110) {
      $("#nav").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#nav").removeClass("active");
    }
  });

})