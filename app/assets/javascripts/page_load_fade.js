$(document).ready(function(){
  var nameContainer = document.getElementById('name-container')
  var arrowPic = document.getElementById('arrow-pic')

  $(nameContainer).hide();
  $(arrowPic).hide();

  setTimeout(function(){
    $(nameContainer).fadeIn(2000)
    $(arrowPic).fadeIn(2000)
  }, 2000)
})