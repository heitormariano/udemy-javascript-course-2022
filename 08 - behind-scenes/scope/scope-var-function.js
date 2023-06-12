// var
// var is not a block scope
if (true) {
  var message = 'Hello';
  console.log(message);
}
console.log(`Outside: ${message}`);

for (var num of [10, 20, 30]) {
  console.log(`Number: ${num}`);
}
console.log('Outside: ' + num);

// function scope
// A function in JS defines a scope for variables declared using var, let and const

function run() {
  var msg = 'Run, Forrest, Run!';
  console.log(msg);
}
run();
//console.log(msg); // ReferenceError: msg is not defined

function counter() {
  let count = 0;
  let max = 5;

  while (max > 0) {
    count++;
    console.log(count);
    max--;
  }
}
//console.log(count); // ReferenceError: count is not defined
//console.log(max); // ReferenceError: max is not defined
counter();

// Scopes can be nested
function printInfo() {
  // "printInfo" function scope --> outer scope
  const firtName = 'Heitor';
  const lastName = 'Camara';

  if (true) {
    // "if" code block scope --> outer scope --> inner scope
    let age = 34;
    console.log(`Name: ${firtName} ${lastName}. Age: ${age}`);
  }

  //console.log(age); // ReferenceError: age is not defined
}
printInfo();

// rule to remember:
// The inner scope can access the variables of its outer scope
