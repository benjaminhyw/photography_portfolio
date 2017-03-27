// function element_in_scroll(elem){
//   var docViewLeft = $(window).scrollLeft();
//   var docViewRight = docViewLeft + $(window).width();

//   var elemLeft = $(elem).offset().left;
//   var elemRight = elemLeft + $(elem).width();

//   return ((elemRight <= docViewRight) && (elemLeft >= docViewLeft));
// }


$(document).ready(function(){
  $("#next_button").on("click", function(event){
    event.preventDefault();
    console.log("maybe")
  })
});
