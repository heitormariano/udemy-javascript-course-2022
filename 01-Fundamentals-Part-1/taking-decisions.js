const age = 16;

if (age > 18) {
  console.log('Hector can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Hector is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1990;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Century: ${century}`);
