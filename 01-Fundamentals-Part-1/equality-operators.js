const price = 100;

if (price === 100) console.log('Price equals 100 (strict)');
if (price == 100) console.log('Price equals 100 (loose)');

if (price !== 200) console.log('Price not equals 200 (strict)');
if (price != 200) console.log('Price not equals 200 (loose)');

const age = prompt('Informe your age please:');
console.log(typeof age);

const favoriteNum = Number(prompt('What is yout favorate number?'));
console.log(typeof favoriteNum);
alert('Your favorate number is ' + favoriteNum);

if (favoriteNum === 23) {
  console.log('Cool! 23 is an amzaing number');
} else if (favoriteNum === 24) {
  console.log('Nice. 24 is also a cool number');
} else if (favoriteNum === 25) {
  console.log('Nice. 25 is also a cool number');
} else {
  console.log('Number is not 23 or 24 or 25');
}
