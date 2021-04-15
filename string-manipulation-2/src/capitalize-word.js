/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = '';
  if (word.toLowerCase() !== 'javascript') {
    newWord += word.substring(0, 1).toUpperCase();
    newWord += word.substring(1, (word.length)).toLowerCase();
    return newWord;
  } else {
    return 'JavaScript';
  }
}
