const friends = ['Carlos', 'Mateus', 'Ricardo', 'Amanda'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

const years = new Array(1990, 2000, 2010, 2020);
console.log(years);

console.log(years[1]);
console.log(years.length);
console.log(years[years.length - 1]);

const firtName = 'Marcos';
const lastName = 'Silva';
const marcos = [firtName, lastName, 2020 - 1990, 'teacher', friends];
console.log(marcos);

// calAge function
const calcAge = (birthYear) => new Date().getFullYear() - birthYear;

const age1 = calcAge([years[0]]);
const age2 = calcAge([years[1]]);
const age3 = calcAge([years[years.length - 1]]);

console.log(age1);
console.log(age2);
console.log(age3);

const ages = [age1, age2, age3];
console.log(ages);
