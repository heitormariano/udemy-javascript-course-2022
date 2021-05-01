const age = 25;
let canDrive;

if (age > 18) {
  canDrive = true;
} else {
  canDrive = false;
}

const result = canDrive ? 'You can drive' : "You can't drive";
console.log(`Result: ${result}`);

let isWinter = true;
console.log(`${isWinter ? 'buy warm clothing' : 'buy other clothes'}`);
