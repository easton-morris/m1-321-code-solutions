/* Math Methods */
var x = 3;
var y = 6;
var z = 9;

var maximumValue = Math.max(x, y, z);

console.log('Max Value:', maximumValue);

var heroes = ['Gambit', 'Slime', 'Shinra', 'Tidus'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Random Index:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random Hero:', randomHero);

/* Array Methods */

var library = [
  {
    title: 'Dragon\'s Blood',
    author: 'Jane Yolen'
  },
  {
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  },
  {
    title: 'Ready Player One',
    author: 'Ernest Cline'
  }
];

var lastBook = library.pop();
console.log('Last Book:', lastBook);

var firstBook = library.shift();
console.log('First Book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library:', library);

/* String Methods */

var fullName = 'Easton Morris';
var firstAndLastName = fullName.split(' ');

console.log('Full Name:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('Say my name:', sayMyName);
