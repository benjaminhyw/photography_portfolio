$(document).ready(function(){
  var count = 1;

  $("#next_button").on("click", function(event){
    event.preventDefault();

    count++;

    var images = $.get("photos/" + count, function(data){
      var info = $(".individual-photo", data).each(function(){
        var title = $("#photo-title", this).text();

        var url = $(this).data("url");

        $("#sidescrolling-container").append(
          '<div class="individual-photo"><img src="'+url+'" height="250px" width="250px"><span id="photo-title">'+title+'</span></div>'
        )
      })
    })
  })
});
