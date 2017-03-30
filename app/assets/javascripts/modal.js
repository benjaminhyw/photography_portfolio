$(document).ready(function(){
  // Assign modal variable
  var modal = document.getElementById('myModal-flex');
  var modal_content = document.getElementsByClassName("modal-content-flex");
  var url = url || ""
  var position = position || ""

  // When the user clicks on picture, display modal
  $(".individual-photo").on("click", function(event){
      url = $(this).data("url");
      position = $(this).data("position");

      if (position == true){
        // landscape
        $(modal_content).addClass("modal-content-flex-landscape")
      } else {
        // portrait
        $(modal_content).addClass("modal-content-flex-portrait")
      }

      document.getElementById("modal-image").src=url;

      modal.style.visibility = "visible";
      modal.style.width = "100%";
      modal.style.height = "100%";
  });

  // When the user clicks on <span> (x), close the modal
  $(".close-flex").on("click", function(){
    modal.style.visibility = "collapse";
  })

  // When the user clicks anywhere outside of the modal, close it
  $(window).on("click", function(event){
    if (event.target == modal){
      modal.style.width = "0%";
      modal.style.height = "0%";
      $(modal_content).removeClass("modal-content-flex-landscape")
    }
  })

})
