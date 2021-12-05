const myName = 'Peter';

function first() {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'developer';

    console.log(`My name is ${myName} and I'm ${age} years old. I work as ${job}`);
  }

  second();
}
console.log(myName);
first();
