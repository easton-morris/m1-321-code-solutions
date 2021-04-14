/* exported drop */

function drop(array, count) {
  var newArray = [];
  if (array.length !== 0) {
    for (var i = (array.length - 1); i >= count; i--) {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}
