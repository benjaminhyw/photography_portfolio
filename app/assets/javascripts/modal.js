$(document).ready(function(){
  // Assign modal variable
  var modal = document.getElementById('myModal');
  var url = url || ""

  // When the user clicks on picture, display modal
  $(".individual-photo").on("click", function(event){
      url = $(this).data("url");
      document.getElementById("modal-image").src=url;
      modal.style.display = "block";
      console.log(url)
  });

  // When the user clicks on <span> (x), close the modal
  $(".close").on("click", function(){
    modal.style.display = "none";
  })

  // When the user clicks anywhere outside of the modal, close it
  $(window).on("click", function(event){
    if (event.target == modal){
      modal.style.display = "none";
    }
  })

})
