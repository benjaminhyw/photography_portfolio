$(document).ready(function(){
  var footerSpan = document.getElementById('footer-span');

  $(footerSpan).on('click', function(event){
    event.preventDefault();
    footerSpan.innerHTML = "";
  })
})