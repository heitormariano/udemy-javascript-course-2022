const firtName = 'Heitor';
const lastName = 'Camara';
const now = 2021;
const birthYear = 1987;
const job = 'programmer';

const hector = 'I\'m ' + firtName + ' ' + lastName + ', a ' + (now - birthYear) + ' years old ' + job;
console.log(hector)
// template literal
const hectorV2 = `I'm ${firtName} ${lastName}, a ${now - birthYear} years old ${job}`;
console.log(hectorV2);

// multiple lines (\n\)
const phrase = 'using multiple \n\
linea \n\
in JavaScript';

// multiple lines (template literal)
const phraseV2 = `using mutiple 
lines
in JavaScript`;

console.log(phrase);
console.log(phraseV2);

