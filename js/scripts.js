$(document).ready(function(){

// Business Logic
var   = function(userNumber) {

   var inputArray = [];

   for ( var i = 0; i<userNumber.length; i +1){
     if (index % 15 === 0) {
       inputArray.push("pingpong");
     } else if (index % 5 === 0) {
      inputArray.push ("pong");
    } else if ( index % 3 ==0) {
      inputArray.push ("ping")
}
  return inputArray;
    debugger;

// Front End Logic
    $("form#number").submit(function(event){
     event.preventDefault();

     $("ul.results li").remove();
     var results = parseInt($("#usernumber").val());
     $(".results").show();

});
}
});
