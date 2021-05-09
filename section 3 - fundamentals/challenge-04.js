const calcTip = (valueBill) =>
  valueBill >= 50 && valueBill <= 300 ? valueBill * 0.15 : valueBill * 0.2;

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// tips
console.log('Tips...');
for (let i = 0; i < tips.length; i++) {
  console.log(tips[i]);
}
// totals
console.log('Totals...');
for (let i = 0; i < totals.length; i++) {
  console.log(totals[i]);
}
// average
console.log('Average: ' + calcAverage([2, 8, 5])); // test
console.log('Average (bills): ' + calcAverage(bills));
console.log('Average (tips): ' + calcAverage(tips));
console.log('Average (totals): ' + calcAverage(totals));
