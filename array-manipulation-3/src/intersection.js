/* exported intersection */

function intersection(first, second) {
  var newArray = [];

  /* dump in the first array */

  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }

  /* dump in the second */

  for (var j = 0; j < second.length; j++) {
    newArray.push(second[j]);
  }

  /* ditch the unique values */

  var check2 = true;

  for (var k = 0; k < newArray.length; k++) {
    if (newArray.length > 1) {
      for (var p = 0; p < newArray.length; p++) {
        if (k !== p && newArray[k] === newArray[p]) {
          check2 = false;
        }
      }
    }
    if (check2 === true) {
      newArray.splice(newArray[k]);
    } else {
      check2 = true;
    }
  }

  /* ditch the duplicate values */

  for (var m = 0; m < newArray.length; m++) {
    if (newArray.length > 1) {
      for (var n = 0; n < newArray.length; n++) {
        if (m !== n && newArray[m] === newArray[n]) {
          newArray.splice(newArray[n]);
        }
      }
    }
  }

  return newArray;
}
