function element_in_scroll(elem){
  var docViewLeft = $(window).scrollLop();
  var docViewRight = docViewLeft + $(window).width();

  var elemLeft = $(elem).offset().left;
  var elemRight = elemLeft + $(elem).width();

  return ((elemRight <= docViewRight) && (elemLeft >= docViewLeft));
}