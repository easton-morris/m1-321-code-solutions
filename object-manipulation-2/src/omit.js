/* exported omit */

function omit(source, keys) {
  var newObject = {};
  var counter = 0;
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === prop) {
        counter++;
      }
    }
    if (counter === 0) {
      newObject[prop] = source[prop];
    }
    counter = 0;
  }
  return newObject;
}
