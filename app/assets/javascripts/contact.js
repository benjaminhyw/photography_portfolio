$(document).ready(function(){
  var footer = document.getElementById('contact-footer')
  var footerSpan = document.getElementById('footer-span');
  var footerUnderline = document.getElementsByClassName('footer-overhead-line-span');
  // .trim(); removes whitespace characters
  var text = footerSpan.innerText.trim();
  var count = 0;

  $(footerSpan).on('click', function(event){
    if ((text == "CONTACT") && (count < 1)){
      $(footerUnderline).fadeOut(300);
      event.preventDefault();
      $(this).fadeOut(400);
      setTimeout(function(){
      // Here, I'm just adding all of the img tags for all of the social media links
      // All of the links before need to be updated with the correct links, but they have placeholders for right now
      footerSpan.innerHTML =
        "<a class='social_media_link' href='#' target='_blank'><img id='facebook' class='social_media_icon' src='../assets/social_media_icons/white_fb_transparent_circle.png'></a>"+
        "<a class='social_media_link' href='https://www.google.com' target='_blank'><img id='twitter' class='social_media_icon' src='../assets/social_media_icons/white_twitter_transparent_circle.png'></a>"+
        "<a class='social_media_link' href='#' target='_blank'><img id='instagram' class='social_media_icon' src='../assets/social_media_icons/white_ig_transparent_circle.png'></a>"+
        "<a class='social_media_link' href='https://www.google.com' target='_blank'><img id='mail' class='social_media_icon' src='../assets/social_media_icons/white_mail_transparent_circle.png'></a>";
        $(footerSpan).removeClass('footer-span-direction');
      }, 500);
      $(footer).addClass('footer-color-change');
      $(this).fadeIn(600);
      count ++;
    };

  });

});