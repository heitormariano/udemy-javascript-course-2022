const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    value: Number(prompt('Degrees celsius:')),
  };
  // console.table(measurement);
  // console.warn(measureKelvin());
  // console.error(measureKelvin());
  return measurement.value + 273;
};

console.log(measureKelvin());
