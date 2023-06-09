const temps1 = [3, -2, 4, -1];
const temps2 = ['error', 9, 12, 17, 15, 8];

const calcTempAmplitude = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = temps[i];
    if (curTemp < min) min = temps[i];
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temps1, temps2);
console.log('Amplitude = ', amplitude);

