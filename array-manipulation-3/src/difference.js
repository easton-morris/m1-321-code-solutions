/* exported difference */

function difference(first, second) {
  var newArray = [];
  var check = true;

  /* run through the first array */

  for (var i = 0; i < first.length; i++) {
    if (newArray.length > 1) {
      for (var j = 0; j < newArray.length; j++) {
        if (first[i] === newArray[j]) {
          check = false;
        }
      }
    }
    if (check === true) {
      newArray.push(first[i]);
    } else {
      check = true;
    }
  }

  /* run thru the second array and remove dupes */

  for (var k = 0; k < second.length; k++) {
    if (newArray.length > 1) {
      for (var p = 0; p < newArray.length; p++) {
        if (second[k] === newArray[p]) {
          check = false;
          newArray.splice(p, 1);
          /* dont add AND remove the dupe already inside */
        }
      }
    }
    if (check === true) {
      newArray.push(second[k]);
    } else {
      check = true;
    }
  }

  return newArray;
}
