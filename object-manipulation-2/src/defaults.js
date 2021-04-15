/* exported defaults */

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var counter = 0;
  if (targetKeys.length !== 0) {
    for (var prop in source) {
      for (var i = 0; i < targetKeys.length; i++) {
        if (targetKeys[i] === prop) {
          counter++;
        }
      }
      if (counter === 0) {
        target[prop] = source[prop];
      }
      counter = 0;
    }
  } else {
    for (var props in source) {
      target[props] = source[props];
    }
  }
}
