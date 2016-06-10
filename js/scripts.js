$(document).ready(function(){
  $("form#number").submit(function(event){
   event.preventDefault();
   //var userInput = parseInt($("#usernumber").val());

// Business Logic

   var inputArray = [];

   for ( var i = 0; i<numbers.length; i +1){
     if (index % 15 === 0) {
       inputArray.push("pingpong");
     } else if (index % 5 === 0) {
      inputArray.push ("pong");
    } else if ( index % 3 ==0) {
      inputArray.push ("ping")
    }
    $("#results").show(output);
