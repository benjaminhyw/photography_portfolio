$(document).ready(function(){
  var count = 1;
  var pageMax = $(".individual-photo").data("page-max");

  $("#sidescrolling-container").on("scroll", function(event){
    if (count <= pageMax){
      count++
      var images = $.get("photos/" + count, function(data){
        var info = $(".individual-photo", data).each(function(){
          var title = $("#photo-title", this).text();

          var url = $(this).data("url");

          $("#sidescrolling-container").append(
            '<div class="individual-photo"><img src="'+url+'" height="250px" width="250px"><span id="photo-title">'+title+'</span></div>'
          )
        });
      });
    };
  });
});