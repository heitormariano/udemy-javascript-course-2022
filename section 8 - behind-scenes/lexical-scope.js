// Ex 01
function outerFunc() {
  // the outer scope
  let outerContent = 'I am from outside!';

  function innerFunc() {
    // the inner scope
    console.log(outerContent);
  }

  return innerFunc;
}

const inner = outerFunc();
inner();

// Ex 02
function initEx() {
  var name = 'JavaScript';
  function displayName() {
    console.log(name);
  }
  displayName();
}
initEx();
