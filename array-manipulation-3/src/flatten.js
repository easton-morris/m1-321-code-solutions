/* exported flatten */

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    /* lol i read the hint too late */
    if (typeof array[i] === 'object' || Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
