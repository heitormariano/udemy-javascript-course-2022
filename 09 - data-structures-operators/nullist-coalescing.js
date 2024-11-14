// nullish coalescing operator (??) - ECMAScript 2020

const person = {
  name: 'Hector',
  age: 36,
};

const occupation = person.occupation ?? 'default occupation';
console.log(occupation);

const result01 = false ?? 'default value';
const result02 = 0 ?? 'default value';
const result03 = '' ?? 'default value';
const result04 = null ?? 'default value';
const result05 = undefined ?? 'default value';

console.log(result01);
console.log(result02);
console.log(result03);
console.log(result04);
console.log(result05);

const user = {
  name: 'Charles',
  address: {
    street: 'Main Street',
    city: null,
  },
};

const myCity = user.address.city ?? 'Unknown city';
console.log(myCity);

function hello(name) {
  let currentName = name ?? '[name]';
  console.log(`Hello ${currentName}`);
}

hello();
hello('Marta');
hello('Adrian');
