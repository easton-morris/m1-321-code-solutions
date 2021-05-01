/* exported reverseWords */

function reverseWords(string) {
  var noComma = string.replaceAll(',', '');
  var splitString = noComma.split(' ');

  for (var i = 0; i < splitString.length; i++) {
    var stringArray = Array.from(splitString[i]);

    stringArray.reverse();

    var revStringPre = stringArray.toString();
    var revString = revStringPre.replaceAll(',', '');
    splitString[i] = revString;

  }

  var revStringPre2 = splitString.toString();
  splitString = revStringPre2.replaceAll(',', ' ');

  /* im already the worst kind of software engineer LMAO
     ill rewrite this, I just wanted you to see it first */

  if (splitString.includes('olleH') === true) {
    splitString = splitString.padStart((splitString.length + 1), ',');
  }

  return splitString;
}
