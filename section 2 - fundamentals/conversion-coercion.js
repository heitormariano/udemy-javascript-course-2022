// Type Conversion and Coercion

// type conversion
const inputYear = '1998';
console.log(typeof inputYear);

let valueTest = '10' + 20;
console.log(valueTest);
console.log(typeof valueTest);

valueTest = Number(inputYear) + 10; // conversion
console.log(valueTest);
console.log(typeof valueTest);

console.log(Number('Jonas')); // NaN
console.log(typeof NaN);
console.log(String(valueTest)); // conversion

// type coercion

const phrase = 'I am ' + 33 + ' years old'; //coercion
console.log(phrase);

valueTest = '23' - '10' - 4; //coercion
console.log(valueTest);
console.log(typeof valueTest);

valueTest = '24' / '2';
console.log(valueTest);
console.log(typeof valueTest);

valueTest = '55' > '10';
console.log(valueTest);
console.log(typeof valueTest);

valueTest = '1' + 1; // '11'
console.log(typeof valueTest);

valueTest = valueTest - 1; //coercion
console.log(valueTest);
console.log(typeof valueTest);
