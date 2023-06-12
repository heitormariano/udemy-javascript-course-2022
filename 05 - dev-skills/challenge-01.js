const printForecastV1 = function (arr) {
  let phrase = '... ';
  for (let i = 0; i < arr.length; i++) {
    phrase = phrase + arr[i] + 'ºC in ' + (i + 1) + ' days ... ';
  }
  console.log(phrase);
};

// template string
const printForecastV2 = function (arr) {
  let phrase = '... ';
  for (let i = 0; i < arr.length; i++) {
    phrase += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(phrase);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecastV1(data1);
printForecastV1(data2);

printForecastV2(data1);
printForecastV2(data2);
