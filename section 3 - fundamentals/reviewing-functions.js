const yearsUntilRetirement = birthYear => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const retirement = 65 - age;

  return retirement > 0 ? retirement : -1;
};

const retirement = yearsUntilRetirement(1987);

if (retirement > 0) {
  console.log('Years to retirement: ' + retirement);
} else {
  console.log('Already retired!');
}

const yearsUntilRetirementV2 = (birthYear, firstName) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} already retired!`;
  }
};

console.log(yearsUntilRetirementV2(1980, 'Jose'));
console.log(yearsUntilRetirementV2(1950, 'Andre'));
