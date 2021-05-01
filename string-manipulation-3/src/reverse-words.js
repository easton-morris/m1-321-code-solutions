/* exported reverseWords */

function reverseWords(string) {

  var splitString = string.split(' ');

  for (var i = 0; i < splitString.length; i++) {
    var newWord = '';
    for (var j = (splitString[i].length - 1); j >= 0; j--) {
      newWord += splitString[i][j];
    }
    splitString[i] = newWord;
  }

  var newString = '';

  for (var k = 0; k < splitString.length; k++) {
    if (k < (splitString.length - 1)) {
      newString += splitString[k] + ' ';
    } else {
      newString += splitString[k];
    }
  }

  return newString;
}
