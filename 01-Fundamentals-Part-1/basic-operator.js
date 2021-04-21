const now = 2021;
const ageSarah = now - 1988;
const ageJonas = now - 1997;

console.log('Age Sarah: ' + ageSarah);
console.log('Age Jonas: ' + ageJonas);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(ageSarah > ageJonas);
console.log(ageJonas > ageSarah);

const firstName = 'Heitor';
const lastName = 'Camara';
console.log(firstName + ' ' + lastName);


console.log(ageSarah + 2, ageJonas / 4, 2 ** 3);

let x = 100;
x += 10;
x++;
x--;
console.log(x);

x /= 2;
console.log(x);

let y = 50;
y *= 3;
y++;
y--;
console.log(y);

y /= 3;
console.log(y);

const result = x - y;
console.log('Result: ' + result);