/* exported capitalize */

function capitalize(word) {
  var capital = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capital += word.charAt(i).toUpperCase();
    } else {
      capital += word.charAt(i).toLowerCase();
    }
  }
  return capital;
}
