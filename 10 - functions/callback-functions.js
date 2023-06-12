// class code
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// testing
console.log(oneWord('Bla BLA blA BLa bla'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//testing
console.log(upperFirstWord('javascript is awesome!'));

const transformer = function (str, fnc) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fnc(str)}`);

  console.log(`Transformed by ${fnc.name}`);
};

transformer('javascript is a programming language', upperFirstWord);
console.log();
transformer('Writing phrase in one word', oneWord);
console.log();

// my example
let names = ['marta', 'ricardo', 'stephanie', 'jose', 'yanni'];

const upperFirstLetter = function (arr) {
  const namesModified = [];
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i].charAt(0).toUpperCase().concat(arr[i].slice(1, arr[i].length));
    namesModified.push(name);
  }

  if (namesModified.length > 0) {
    namesModified.forEach(elem => console.log(elem));
  } else {
    console.log('No elements to print');
  }
};

printElementsTransformed = function (arr, fnc) {
  fnc(arr);
};

printElementsTransformed(names, upperFirstLetter);

// aditional code
// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   console.log('A string original é: "' + stringToSplit + '"');
//   console.log('O separador é: "' + separator + '"');
//   console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
// }

// const tempestString = 'Oh brave new world that has such people in it.';
// const monthString = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez';

// const space = ' ';
// const comma = ',';

// splitString(tempestString, space);
// console.log();
// splitString(tempestString);
// console.log();
// splitString(monthString, comma);
