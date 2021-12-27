const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHi = greet('Hi');
greeterHi('Heitor');
greeterHi('Jonas');

const greterHello = greet('Hello');
greterHello('Mark');
greterHello('Sophia');

greet('Hey')('Fabio');

// challenge

// traditional way
const calcFnc = function (studentName) {
  return function (scores) {
    sum = 0;
    for (score of scores) {
      sum += score;
    }
    if (scores.length > 0) {
      result = sum / scores.length;
      console.log(`Result of ${studentName}: ${result.toFixed(2)}`);
    } else {
      console.log(`${studentName} without scores`);
    }
  };
};

// using arrow functions
const calcFncArrow = studentName => scores => {
  sum = 0;
  for (score of scores) {
    sum += score;
  }
  if (scores.length > 0) {
    result = sum / scores.length;
    console.log(`Result of ${studentName}: ${result.toFixed(2)}`);
  } else {
    console.log(`${studentName} without scores`);
  }
};

const calculateScores = calcFnc('Mike');
calculateScores([10, 8, 7]);

const calculateScoresArrow = calcFncArrow('Philip');
calculateScoresArrow([9, 8, 7.5]);
