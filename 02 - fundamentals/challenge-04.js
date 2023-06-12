const valueBill01 = 275.4;
const valueBill02 = 430;

let percentageTip;
let tip;
let total;

// bill 01
percentageTip = valueBill01 >= 50 && valueBill01 <= 300 ? 0.15 : 0.2;
tip = valueBill01 * percentageTip;
total = valueBill01 + tip;

console.log(`The bill was ${valueBill01}, the tip was ${tip.toFixed(2)}, and the total value
${total}`);

// bill 02
percentageTip = valueBill02 >= 50 && valueBill02 <= 300 ? 0.15 : 0.2;
tip = valueBill02 * percentageTip;
total = valueBill02 + tip;

console.log(`The bill was ${valueBill02}, the tip was ${tip}, and the total value
${total}`);
