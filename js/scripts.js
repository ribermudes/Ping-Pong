// Business Logic
var pingPong = function(userNumber) {
var inputArray = [];

  for (var i = 1; i<=userNumber; i += 1) {
    if (i % 15 === 0) {
      inputArray.push("pingpong");
      } else if (i % 5 === 0) {
         inputArray.push("pong");
      } else if (i % 3 === 0) {
         inputArray.push("ping");
      } else {
         inputArray.push(i);
      }
}
  return inputArray;
};
