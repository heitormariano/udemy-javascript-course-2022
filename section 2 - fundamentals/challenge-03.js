const averageDolphins = (125 + 108 + 90) / 3;
const averageKoalas = (120 + 108 + 90) / 3;

if (averageDolphins > averageKoalas) {
  if (averageDolphins >= 100) {
    console.log(`The winner is Dolphins 🏆. Average score: ${averageDolphins.toFixed(2)}`);
  } else {
    console.log('Average score is less than 100');
  }
} else if (averageKoalas > averageDolphins) {
  if (averageKoalas >= 100) {
    console.log(`The winner is Dolphins 🏆. Average score: ${averageKoalas.toFixed(2)}`);
  } else {
    console.log('Average score is less than 100');
  }
} else {
  if (averageDolphins >= 100) { // podemos usar uma das médias, pois elas são iguais aqui
    console.log('Both win the trophy 🏆');
  } else {
    console.log('Average score of teams is less than 100');
  }
}
