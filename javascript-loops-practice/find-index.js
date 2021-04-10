/* exported findIndex */

function findIndex(array, value) {
  var check = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      check++;
      return check;
    } else {
      check++;
    }
  }
  if (check === (array.length - 1)) {
    return -1;
  }
}
