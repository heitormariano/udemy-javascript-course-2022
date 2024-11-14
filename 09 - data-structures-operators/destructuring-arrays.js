'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log('Destructuring arrays');

const arr = [10, 20, 30];
const [a, b, c] = arr;

console.log(a, b, c);
console.log('arr =', arr);

const [first, second, third] = restaurant.categories;
console.log(first, second, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log('Receive 2 return values from a function');
let result = restaurant.order(0, 2);
console.log(result);

result = restaurant.order(2, 0);
console.log(result);

const [starter, mainSelected] = restaurant.order(1, 1);
console.log(starter, mainSelected);

console.log('Nested Destructuring');
const nested = [1, 2, [100, 200]];
const [i, , nestedArr] = nested;
console.log(i, nestedArr);

const nested02 = [10, 20, [400, 500]];
const [j, , [k, m]] = nested02;
console.log(j, k, m);

console.log('Default Values');
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const [s = 100, t = 100, v = 100] = [500];
console.log(s, t, v);
