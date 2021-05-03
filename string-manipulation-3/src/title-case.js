/* exported titleCase */

function titleCase(title) {

  var newWord = '';
  var splitTitle = title.split(' ');
  var lcCheck = 0;

  /* try guessing how much of this BS i wrote before adding an exceptions array in */

  var exc = ['and', 'but', 'or', 'nor', 'a', 'an', 'the'];

  if (splitTitle[0].toLowerCase().includes('javascript') === true) {
    newWord = splitTitle[0].toLowerCase();
    newWord = newWord.replace('javascript', 'JavaScript');
    splitTitle[0] = newWord;
  } else {
    newWord = splitTitle[0][0].toUpperCase();
    newWord += splitTitle[0].substring(1, (splitTitle[0].length));
    splitTitle[0] = newWord;
  }

  newWord = '';

  for (var i = 1; i < splitTitle.length; i++) {
    if (splitTitle[i].toLowerCase().includes('javascript') === true) {
      newWord = splitTitle[i].toLowerCase();
      newWord = newWord.replace('javascript', 'JavaScript');
      splitTitle[i] = newWord;
    } else if (splitTitle[i].toLowerCase() === 'api') {
      splitTitle[i] = 'API';
    } else if (splitTitle[i].includes('-') === true && splitTitle[i].length >= 4) {
      newWord = splitTitle[i].substring(0, 1).toUpperCase();
      newWord += splitTitle[i].substring(1, ((splitTitle[i].search('-')) + 1)).toLowerCase();
      newWord += splitTitle[i].substring(((splitTitle[i].search('-')) + 1), ((splitTitle[i].search('-')) + 2)).toUpperCase();
      newWord += splitTitle[i].substring((splitTitle[i].search('-')) + 2, (splitTitle[i].length)).toLowerCase();
      splitTitle[i] = newWord;
    } else if (splitTitle[i].length >= 4) {
      newWord = splitTitle[i].substring(0, 1).toUpperCase();
      newWord += splitTitle[i].substring(1, (splitTitle[i].length)).toLowerCase();
      splitTitle[i] = newWord;
    } else if (splitTitle[(i - 1)].endsWith(':') === true) {
      newWord = splitTitle[i].substring(0, 1).toUpperCase();
      newWord += splitTitle[i].substring(1, (splitTitle[i].length)).toLowerCase();
      splitTitle[i] = newWord;
    } else if (lcCheck === 1 && exc.indexOf(splitTitle[i]) === -1) {
      newWord = splitTitle[i].substring(0, 1).toUpperCase();
      newWord += splitTitle[i].substring(1, (splitTitle[i].length)).toLowerCase();
      splitTitle[i] = newWord;
      lcCheck = 0;
    } else {
      lcCheck = 1;
    }
  }

  var finalStringPre = splitTitle.toString();
  var finalString = finalStringPre.replaceAll(',', ' ');

  return finalString;
}
