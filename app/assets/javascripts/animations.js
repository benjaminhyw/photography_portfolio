$(function(){
  $("#arrow-pic").on("click", function(event){
    $('html, body').animate({
    scrollTop: $("#photo-container").offset().top
    }, 1500, "swing");
  })
})