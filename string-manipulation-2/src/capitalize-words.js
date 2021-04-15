/* exported capitalizeWords */

function capitalizeWords(string) {
  var splitArray = [];
  var newString = '';
  splitArray = string.split(' ');
  for (var i = 0; i < splitArray.length; i++) {
    for (var j = 0; j < splitArray[i].length; j++) {
      if (j === 0) {
        newString += splitArray[i].charAt(j).toUpperCase();
      } else if (j < splitArray[i].length) {
        newString += splitArray[i].charAt(j).toLowerCase();
      }
    }
    if (i < (splitArray.length - 1)) {
      newString += ' ';
    }
  }
  return newString;
}
