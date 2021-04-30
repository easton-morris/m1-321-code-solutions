/* exported equal */

function equal(first, second) {
  var counter = 0;
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        counter++;
      }
    }
    if (counter === first.length) {
      return true;
    } else {
      return false;
    }
  } else return false;
}
