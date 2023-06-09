// using for loop
const friends = ['Pedro', 'Tiago', 'João', 'Lucas'];

console.log('Friends List:');
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const countries = ['India', 'USA', 'Brazil', 'Japan'];

console.log('Coutries List:');
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

const heitor = {
  firstName: 'Heitor',
  lastName: 'Camara',
  birthYear: 1987,
  job: 'teacher',
  friends: ['Michael', 'Jonas', 'Philip'],
  hasDriversLicense: false,
};

const types = [];

console.log('Viewing properties of object');
// using for in
for (const prop in heitor) {
  console.log(heitor[prop]);
  types.push(typeof heitor[prop]);
}

console.log('Viewing types');
console.log(types);

console.log('Printing...');
for (let i = 0; i < types.length; i++) {
  console.log(`Type ${i + 1} ${types[i]}`);
}

const years = [1998, 2002, 2005, 2006];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(new Date().getFullYear() - years[i]);
}

console.log(ages);

// Only string properties

console.log('-------ONLY STRINGS-------');
for (const prop in heitor) {
  if (typeof heitor[prop] !== 'string') continue;
  console.log(`value = ${heitor[prop]}`, `type = ${typeof heitor[prop]}`);
}

console.log('-------BREAK WITH NUMBER-------');
for (const prop in heitor) {
  if (typeof heitor[prop] === 'number') break;
  console.log(heitor[prop], typeof heitor[prop]);
}
