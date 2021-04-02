function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('5 minutes in seconds:', convertMinutesToSeconds(5));

function greet(name) {
  var finalGreeting = 'Hey, ' + name;
  return finalGreeting;
}

console.log('Greeting:', greet('World'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('Area:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('First Name:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[(array.length - 1)];
}

console.log('Last Element:', getLastElement(['propane', 'and', 'propane', 'accessories']));
