// Example 1
let fnc;
const multiplyBy2 = function () {
  const value = 5;
  fnc = function () {
    console.log(value * 2);
  };
};

const multiplyBy2Improved = function (num) {
  const value = num;
  fnc = function () {
    console.log(value * 2);
  };
};

multiplyBy2();
fnc(); // 10 (5 * 2)
console.dir(fnc);

// Re-assigning f function
multiplyBy2Improved(20);
fnc(); // 40 (20 * 2)
console.dir(fnc);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
//const perGroup = 1000;
boardPassengers(180, 4);
