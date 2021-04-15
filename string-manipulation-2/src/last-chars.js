/* exported lastChars */

function lastChars(length, string) {
  var newString = '';
  if (length <= string.length) {
    newString += string.slice((string.length - length), string.length);
  } else {
    return string;
  }
  return newString;
}
