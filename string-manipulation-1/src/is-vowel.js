/* exported isVowel */

function isVowel(char) {
  var check = char.toLowerCase();
  if (check === 'a') {
    return true;
  } else if (check === 'e') {
    return true;
  } else if (check === 'i') {
    return true;
  } else if (check === 'o') {
    return true;
  } else if (check === 'u') {
    return true;
  } else {
    return false;
  }
}
