/* exported countdown */

function countdown(number) {
  var count = number;
  var array = [];
  for (var i = count; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
