$(document).ready(function(){
  $('#hidden-social').hide();
  var footer = document.getElementById('contact-footer')
  var footerSpan = document.getElementById('footer-span');
  var footerUnderline = document.getElementsByClassName('footer-overhead-line-span');
  // .trim(); removes whitespace characters
  var text = footerSpan.innerText.trim();
  var count = 0;

  $(footerSpan).on('click', function(event){
    if ((text == "CONTACT") && (count < 1)){
      $(footer).addClass('footer-color-change');
      $('#hidden-social').fadeIn(0);
      $(footerSpan).contents().filter(function(){ return this.nodeType == 3; }).remove();
      $(footerUnderline).fadeOut(0);
      $(this).fadeOut(0);
      $('#contact-underline-span').hide()
      $(footerSpan).removeClass('footer-span-direction');
      $(footerSpan).fadeIn(500);
      count ++;


      setTimeout(function(){
        $('#hidden-social').addClass('hidden-social-visible');
      }, 900);

    };

  });

});