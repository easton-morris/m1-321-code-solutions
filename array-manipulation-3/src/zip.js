/* exported zip */

function zip(first, second) {
  var firstLength = first.length;
  var secondLength = second.length;
  var newArray = [];

  if (firstLength <= secondLength) {
    for (var i = 0; i < firstLength; i++) {
      var subArray1 = [];
      subArray1.push(first[i]);
      subArray1.push(second[i]);
      newArray.push(subArray1);
    }
  } else {
    for (var j = 0; j < secondLength; j++) {
      var subArray2 = [];
      subArray2.push(first[j]);
      subArray2.push(second[j]);
      newArray.push(subArray2);
    }
  }
  return newArray;
}
