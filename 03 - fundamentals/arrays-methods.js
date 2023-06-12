const friends = ['Pedro', 'Tiago', 'João'];
console.log(friends);

// push and pop
const newLength = friends.push('Carol');
console.log(friends);
console.log(newLength);

let elemRemoved = friends.pop();
console.log(elemRemoved);
console.log(friends);

//unshift and shift

const countries = ['Brazil', 'Japan'];
countries.unshift('USA');
console.log(countries);

countries.unshift('India');
console.log(countries);

elemRemoved = countries.shift();
console.log('Element removed: ' + elemRemoved);
console.log(countries);

elemRemoved = countries.shift();
console.log('Element removed: ' + elemRemoved);
console.log(countries);

// indexOf and includes
console.log(friends.indexOf('Pedro'));
console.log(friends.indexOf('Marcia'));
console.log(friends.indexOf('Tiago'));

console.log(friends.includes('Marta'));
console.log(friends.includes('Ricardo'));
console.log(friends.includes('João'));

// tests
friends.push(23);
console.log(friends.includes('23')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Tiago')) {
  console.log('You have a friend called Tiago');
}
