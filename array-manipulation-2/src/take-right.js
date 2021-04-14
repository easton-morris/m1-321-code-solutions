/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  if (array.length !== 0) {
    for (var i = (array.length - 1); i >= (array.length - count); i--) {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}
