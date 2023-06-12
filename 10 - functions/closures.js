const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
booker();

const addValue = function () {
  let value = 0;
  return function (plus) {
    console.log(`Final value: ${value + plus}`);
  };
};

const myAddValue = addValue();
myAddValue(3);
myAddValue(6);
myAddValue(10);

const accumulator = function () {
  let count = 0;
  return function (value) {
    count += value;
    console.log(count);
  };
};

const myAccumulator = accumulator();
myAccumulator(10); // 10 (0 + 10)
myAccumulator(20); // 30 (10 + 20)
myAccumulator(35); // 65 (30 + 35)
