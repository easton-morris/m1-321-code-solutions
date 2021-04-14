/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  if (array.length !== 0) {
    var subArray = [];
    var i = 0;
    for (i; i < (size + i) && i < array.length; i++) {
      subArray.push(array[i]);
      if (subArray.length === size && i < array.length) {
        newArray.push(subArray);
        subArray = [];
      } else if (i === (array.length - 1)) {
        newArray.push(subArray);
        subArray = [];
      }
    }
  }
  return newArray;
}
