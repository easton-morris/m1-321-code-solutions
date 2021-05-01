/* exported titleCase */

function titleCase(title) {

  var newWord = '';
  var splitTitle = title.split(' ');

  newWord = splitTitle[0].substring(0, 1).toUpperCase();
  newWord += splitTitle[0].substring(0, (splitTitle.length - 1));
  splitTitle[0] = newWord;

  for (var i = 0; i < splitTitle.length; i++) {
    if (splitTitle[i].toLowerCase() === 'javascript') {
      splitTitle[i] = 'JavaScript';
    } else if (splitTitle[i].toLowerCase() === 'api') {
      splitTitle[i] = 'API';
    } else if (splitTitle[i].includes('-') === true && splitTitle[i].length >= 4) {
      newWord = splitTitle[i].substring(0, 1).toUpperCase();
      newWord += splitTitle[i].substring(1, ((splitTitle[i].search('-')) + 1)).toLowerCase();
      splitTitle[i] = newWord;
      splitTitle[i] += splitTitle[i].substring(((splitTitle[i].search('-')) + 1)).toUpperCase();
      splitTitle[i] += splitTitle[i].substring(1, (splitTitle[i].length)).toLowerCase();
    } else if (splitTitle[i].length >= 4) {
      splitTitle[i] = splitTitle[i].substring(0, 1).toUpperCase();
      splitTitle[i] += splitTitle[i].substring(1, (splitTitle[i].length)).toLowerCase();
    }
  }

  var finalStringPre = splitTitle.toString();
  var finalString = finalStringPre.replaceAll(',', ' ');

  return finalString;
}
