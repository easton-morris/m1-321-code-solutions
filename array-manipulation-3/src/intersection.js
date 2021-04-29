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

  /* ditch the unique values by only passing on the dupes */

  var finalArray = [];
  var compArray = newArray;

  for (var r = 0; r < newArray.length; r++) {
    for (var t = 0; t < compArray.length; t++) {
      if (r !== t && newArray[r] === compArray[t]) {
        finalArray.push(newArray[r]);
      }
    }
  }

  /* ditch the duplicate dupes */

  for (var m = 0; m < finalArray.length; m++) {
    if (finalArray.length > 1) {
      for (var n = 0; n < finalArray.length; n++) {
        if (m !== n && finalArray[m] === finalArray[n]) {
          finalArray.splice(n, 1);
        }
      }
    }
  }

  return finalArray;
}
