/* exported isPalindromic */

function isPalindromic(string) {

  var check = true;
  var noSpace = string.replaceAll(' ', '');

  for (var j = 0; j < (noSpace.length); j++) {
    if (noSpace.charAt(j) !== noSpace.charAt((noSpace.length - 1) - j)) {
      check = false;
    }
  }
  return check;
}
