/* exported pick */

function pick(source, keys) {
  var newObject = {};
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === prop && source[prop] !== undefined) {
        newObject[keys[i]] = source[prop];
      }
    }
  }
  return newObject;
}
