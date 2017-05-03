$(document).ready(function(){
  var footer = document.getElementById('contact-footer')
  var footerSpan = document.getElementById('footer-span');
  // .trim(); removes whitespace characters
  var text = footerSpan.innerText.trim();
  var count = 0;

  $(footerSpan).on('click', function(event){
    event.preventDefault();
    if ((text == "CONTACT") && (count < 1)){

      $(this).fadeOut(400);

      setTimeout(function(){

      // Here, I'm just adding all of the img tags for all of the social media links
      footerSpan.innerHTML =
        "<img class='social_media_icon' src='../assets/social_media_icons/white_fb_transparent_circle.png'><img class='social_media_icon' src='../assets/social_media_icons/white_twitter_transparent_circle.png'><img class='social_media_icon' src='../assets/social_media_icons/white_ig_transparent_circle.png'><img class='social_media_icon' src='../assets/social_media_icons/white_mail_transparent_circle.png'>";
      }, 500);

      $(this).fadeIn(400);
      count ++

    };
  });

});