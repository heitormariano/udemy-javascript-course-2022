'use strict';

const restaurant = {
  currentName: 'Classico Italiano',
  locationInfo: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time = '19:00', address }) {
    console.log('Order received!');
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log('main:', mainIngredient);
    console.log('other ingredients:', otherIngredients);
  },
};

// spread
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

// rest
const [a, b, ...others] = [10, 20, 30, 40, 50];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);

// console.log(typeof otherFoods);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

// functions
const sum = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sum01 = sum(1, 2, 3, 4, 5);
const sum02 = sum(2, 10, 30);
const sum03 = sum(2, 4, 7, 8, 9, 10, 12, 20, 22);

console.log('Sum 01:', sum01);
console.log('Sum 02:', sum02);
console.log('Sum 03:', sum03);

const arrA = [30, 40, 50];
const sumArrA = sum(...arrA);
console.log('Sum - array A:', sumArrA);

restaurant.orderPizza('mushrooms', 'union', 'olives', 'spinach');
restaurant.orderPizza('cheese');
