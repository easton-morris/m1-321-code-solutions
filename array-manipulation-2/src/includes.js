/* exported includes */

function includes(array, value) {
  var check = false;
  if (array.length !== 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        check = true;
      }
    }
  }
  return check;
}
