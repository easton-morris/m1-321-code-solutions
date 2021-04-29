/* exported union */

function union(first, second) {
  var newArray = [];

  /* dump in the first array */

  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }

  /* dump in the second */

  for (var j = 0; j < second.length; j++) {
    newArray.push(second[j]);
  }

  /* ditch the dupes by only passing on the unique values */

  var finalArray = [];

  var check = true;

  for (var r = 0; r < newArray.length; r++) {
    if (finalArray.length > 1) {
      for (var t = 0; t < finalArray.length; t++) {
        if (newArray[r] === finalArray[t]) {
          check = false;
        }
      }
    }
    if (check === true) {
      finalArray.push(newArray[r]);
    } else {
      check = true;
    }
  }
  return finalArray;
}
