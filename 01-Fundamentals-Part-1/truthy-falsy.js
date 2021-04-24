// falsy
// null, undefined, NaN, '', 0

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(0));

//truthy
console.log(Boolean('Hector'));
console.log(Boolean({})); //object
console.log(Boolean([])); //array

let money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

let price;

if (price) {
  console.log('Price definied');
} else {
  console.log('Price not defined');
}

let firtName = 'John';

if (firtName) {
  console.log('Firt name: ' + firtName);
} else {
  console.log('First name not defined');
}
