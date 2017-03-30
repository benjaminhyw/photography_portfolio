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
          var photo_position = $(this).data("position");
          var page_max = $(this).data("page-max");

          $("#sidescrolling-container").append(
            '<div class="individual-photo" data-url="'+ url +'" data-position="<%= '+ photo_position +' %>"  data-page-max="<%= '+ page_max +' %>"><img src="'+url+'" height="250px" width="250px"><span id="photo-title">'+title+'</span></div>'
          )
        });
      });
    };
  });
});