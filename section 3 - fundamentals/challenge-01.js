// using for and arrays
const calcAverage = (scores) => {
  let sum = 0;
  for (let index = 0; index < scores.length; index++) {
    sum = sum + scores[index];
  }
  return sum / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphis win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('Competition without a winner');
  }
};

// Data 1
let scoresDolphins = [44, 23, 71];
let scoresKoalas = [65, 54, 49];

let avgDolphins = calcAverage(scoresDolphins);
let avgKoalas = calcAverage(scoresKoalas);
checkWinner(avgDolphins, avgKoalas);

// Data 2
// redefining score values
scoresDolphins = [85, 54, 41];
scoresKoalas = [23, 34, 27];

avgDolphins = calcAverage(scoresDolphins);
avgKoalas = calcAverage(scoresKoalas);
checkWinner(avgDolphins, avgKoalas);
