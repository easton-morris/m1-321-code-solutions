var student = {
  firstName: 'Easton',
  lastName: 'Morris',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Full Name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'IT';

console.log('Lives in Irvine?', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

var vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 1967
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('Color:', vehicle['color']);
console.log('Is it convertible?', vehicle['isConvertible']);
console.log('Full Vehicle:', vehicle);

var pet = {
  name: 'Mercy',
  type: 'White Swiss Shepherd'
};

delete pet.name;
delete pet.type;

console.log('Pet:', pet);
