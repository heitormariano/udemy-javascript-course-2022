// arrow function with one line and one argument
const calcAge = birthYear => new Date().getFullYear() - birthYear;
const age = calcAge(1990);
console.log(age);

// arrow function with several line and one argument
const yearsUntilRetirement = birthYear => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(`You retires in ${yearsUntilRetirement(1990)} years`);

// arrow function with several lines and two arguments
const yearsUntilRetirementV2 = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirementV2(1987, 'Heitor'));
console.log(yearsUntilRetirementV2(1991, 'Carlos'));
