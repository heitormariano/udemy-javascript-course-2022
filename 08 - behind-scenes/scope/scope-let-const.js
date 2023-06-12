const message = 'Hello';
console.log(message);

// block scope (ES6)
// A code block in JavaScript defines a scope for variables declared using let and const
if (true) {
  // "if" block scope
  const name = 'Heitor';
  console.log(name);
}
//console.log(name); //ReferenceError: name is not defined

for (const color of ['red', 'blue', 'green']) {
  // "for" block scope
  console.log(color);
}
//console.log(color); //ReferenceError: color is not defined

//standalone code block
{
  //block scope
  const student = 'Paulo';
  console.log('Name of student: ' + student);
}
//console.log('Name of student: ' + student);
