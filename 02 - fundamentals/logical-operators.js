const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);
console.log(!hasGoodVision);

console.log(hasDriversLicense && !hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
  console.log('Hector is able to drive');
} else {
  console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('You can drive. Good!');
} else {
  console.log('Carefull! Choose another day to drive...');
}
