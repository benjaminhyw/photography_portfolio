$(document).ready(function(){
  var footerSpan = document.getElementById('footer-span');

  $(footerSpan).on('click', function(event){
    event.preventDefault();
    $(this).fadeOut(400);

    setTimeout(function(){
      footerSpan.innerHTML = "Placeholder text, where social media links should go";

    }, 400)

    $(this).fadeIn(400);
  })
})