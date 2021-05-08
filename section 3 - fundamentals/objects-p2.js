const heitor = {
  firstName: 'Heitor',
  lastName: 'Camara',
  age: new Date().getFullYear() - 1987,
  job: 'teacher',
  friends: ['Michael', 'Jonas', 'Philip'],
};

console.log(heitor);

console.log(`First name: ${heitor.firstName}`);
console.log(`Firt name (using brackets): ${heitor['firstName']}`);

console.log(`Last name: ${heitor.lastName}`);
console.log(`Last name (using brackets): ${heitor['lastName']}`);

const nameKey = 'Name';
console.log(heitor['first' + nameKey]);
console.log(heitor['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about Heitor? Choose between firtName, lastName, age, job and friends'
// );

// if (heitor[interestedIn]) {
//   console.log('Topic interested chosen: ' + heitor[interestedIn]);
// } else {
//   console.log('Wrong request!');
// }

heitor.location = 'Brazil';
heitor['email'] = 'heitor.test@gmail.com';

console.log(heitor);

// challenge
console.log(
  `${heitor.firstName} has ${heitor.friends.length} friends, and his best friend is called ${heitor.friends[0]}`
);
