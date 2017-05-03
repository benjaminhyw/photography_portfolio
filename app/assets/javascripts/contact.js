$(document).ready(function(){
  var footerSpan = document.getElementById('footer-span');
  // .trim(); removes whitespace characters
  var text = footerSpan.innerText.trim();
  var count = 0;

  $(footerSpan).on('click', function(event){
    event.preventDefault();
    if ((text == "CONTACT") && (count < 1)){

      $(this).fadeOut(400);

      setTimeout(function(){


        footerSpan.innerHTML = "<img class='social_media_icon' src='../assets/social_media_icons/white_fb_transparent_circle.png'>";
      }, 500);

      $(this).fadeIn(400);
      count ++

    };
  });

});