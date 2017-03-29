$(document).ready(function(){
  // Assign modal variable
  var modal = document.getElementById('myModal-flex');
  var url = url || ""

  // When the user clicks on picture, display modal
  $(".individual-photo").on("click", function(event){
      url = $(this).data("url");
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
    }
  })

})
