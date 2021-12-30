const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(210));

// challenge (function returning another function)

const calcFnc = function (value) {
  return function (rate) {
    return value + value * rate;
  };
};

const calcTax = calcFnc(100);
const result = calcTax(0.2);
console.log(`Result: ${result}`);
