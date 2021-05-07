var array = [
  {
    isbn: 1234,
    title: 'Dragonology',
    author: 'Dr. Tooth'
  },
  {
    isbn: 1235,
    title: 'Dragons and Habitats',
    author: 'James Wingy'
  },
  {
    isbn: 1236,
    title: 'The Life of Dragons',
    author: 'Jakkin'
  }
];

console.log('Array Object:', array, typeof array);

var arrayString = JSON.stringify(array);

console.log('JSON String:', arrayString, typeof arrayString);

var student = '{"student":[{"id": 456,"name": "James Halliday"}]}';

console.log('Future Object in JSON', student, typeof student);

var JSONobject = JSON.parse(student);

console.log('JSON as object:', JSONobject, typeof JSONobject);
