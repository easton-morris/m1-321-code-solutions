var width = 10;
var height = 10;
var area = width * height;

console.log('Area:', area);
console.log('Area type:', typeof area);

var bill = 10;
var payment = 100;
var change = payment - bill;

console.log('Change:', change);
console.log('Change type:', typeof change);

var quizzes = 89;
var midterm = 99;
var final = 100;
var grade = (quizzes + midterm + final) / 3;

console.log('Grade:', grade);
console.log('Grade type:', typeof grade);

var firstName = 'Easton';
var lastName = 'Morris';
var fullName = firstName + ' ' + lastName;

console.log('Full Name:', fullName);
console.log('Full Name type:', typeof fullName);

var pH = 13;
var isAcidic = pH < 7;

console.log('Is it acidic?', isAcidic);
console.log('isAcidic type:', typeof isAcidic);

var headCount = 301;
var isSparta = headCount === 300;

console.log('Is this Sparta?', isSparta);
console.log('isSparta type:', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';

console.log('Motto:', motto);
console.log('Motto type:', typeof motto);
