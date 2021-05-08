
function getRangeReport(start, end) {
  var rangeReport = {};
  var rangeTotal = 0;
  var rangeOdds = [];
  var rangeEvens = [];
  var rangeRange = [];
  var rangeAverage = 0;
  for (var i = 0; i <= (end - start); i++) {
    rangeTotal += (start + i);
  }
  rangeReport.total = rangeTotal;

  for (var j = 0; j <= (end - start); j++) {
    if (((start + j) % 2) !== 0) {
      rangeOdds.push((start + j));
    }
  }
  rangeReport.odds = rangeOdds;

  for (var k = 0; k <= (end - start); k++) {
    if (((start + k) % 2) === 0) {
      rangeEvens.push((start + k));
    }
  }
  rangeReport.evens = rangeEvens;

  for (var l = 0; l <= (end - start); l++) {
    rangeRange.push((start + l));
  }
  rangeReport.range = rangeRange;

  rangeAverage = (rangeTotal / ((end - start) + 1));
  rangeReport.average = rangeAverage;

  return rangeReport;
}

getRangeReport(3, 23);
