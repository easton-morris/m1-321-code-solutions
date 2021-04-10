/* exported isLowerCased */

function isLowerCased(word) {
  var check;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toLowerCase()) {
      check = true;
    } else {
      check = false;
      return false;
    }
  }
  return check;
}
