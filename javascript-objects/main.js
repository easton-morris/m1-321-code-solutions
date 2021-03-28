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
