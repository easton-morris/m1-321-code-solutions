/* exported isUpperCased */

function isUpperCased(word) {
  var check;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
      check = true;
    } else {
      check = false;
      return false;
    }
  }
  return check;
}
