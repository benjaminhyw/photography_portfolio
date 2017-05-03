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
        footerSpan.innerText = "Placeholder text, where social media links should go";
      }, 500);

      $(this).fadeIn(400);
      count ++

    };
  });

});