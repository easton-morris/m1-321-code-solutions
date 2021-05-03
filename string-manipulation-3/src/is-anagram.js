/* exported isAnagram */

function isAnagram(firstString, secondString) {

  var checkSum = 0;
  var noSpace1 = firstString.replaceAll(' ', '');
  var noSpace2 = secondString.replaceAll(' ', '');

  if (noSpace1.length === noSpace2.length) {
    for (var i = 0; i < noSpace2.length; i++) {
      if (noSpace2.includes(noSpace1[i]) === true && noSpace1.includes(noSpace2[i]) === true) {
        checkSum++;
      }
    }
  }

  if (checkSum === noSpace1.length) {
    return true;
  } else {
    return false;
  }

}
