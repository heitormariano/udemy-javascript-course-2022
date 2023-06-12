// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//IIFE example
(function () {
  console.log('This will never run again');
  const valuePrivate = 10;
})();

//ReferenceError: valuePrivate is not defined
//console.log(valuePrivate);
(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 25;
  var notPrivate = 50;
}

//ReferenceError: isPrivate is not defined
//console.log(isPrivate);
console.log(notPrivate);
