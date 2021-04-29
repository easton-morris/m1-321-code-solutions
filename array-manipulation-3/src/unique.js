/* exported unique */

function unique(array) {
  var newArray = [];
  var check = true;

  for (var i = 0; i < array.length; i++) {
    if (newArray.length > 1) {
      for (var j = 0; j < newArray.length; j++) {
        if (array[i] === newArray[j]) {
          check = false;
        }
      }
    }
    if (check === true) {
      newArray.push(array[i]);
    } else {
      check = true;
    }
  }
  return newArray;
}
