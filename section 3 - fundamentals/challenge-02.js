const calcTip = valueBill => {
  if (valueBill >= 50 && valueBill <= 300) {
    return valueBill * 0.15;
  } else {
    return valueBill * 0.2;
  }
};

// bills
const bills = [125, 555, 44];

// tips
const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[bills.length - 1]);

const tips = [tip1, tip2, tip3];

// totals
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//console.log(bills, tips, totals);

// using for
for (let i = 0; i < totals.length; i++) {
  console.log(
    `# ${i + 1} - The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${
      totals[i]
    }`
  );
}
