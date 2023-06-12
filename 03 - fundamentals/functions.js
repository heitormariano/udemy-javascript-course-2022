function logger() {
  console.log('My name is Heitor');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const applejuice = fruitProcessor(3, 0);
console.log(applejuice);

console.log(fruitProcessor(5, 6));

const orangeJuice = fruitProcessor(0, 6);
console.log(orangeJuice);

const appleOrangeJuice = fruitProcessor(10, 8);
console.log(appleOrangeJuice);

const num = Number('34');
console.log(`The number is: ${num}`);
