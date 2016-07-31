// Front End Logic
  $(document).ready(function() {
    $("form#form-play").submit(function(event) {
     event.preventDefault();

     $("ul.results li").remove();
     var userNumber = parseInt($("#play").val());
     var results = pingPong(userNumber);
     results.forEach(function(result) {
       $(".results").append("<li>" + result + "</li>");
     });

     $("#pingpongresult").show();

});
});
