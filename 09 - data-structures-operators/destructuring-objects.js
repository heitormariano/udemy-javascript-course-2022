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
};

const { currentName, locationInfo, categories } = restaurant;
console.log(currentName, locationInfo, categories);

const { openingHours, starterMenu, mainMenu } = restaurant;
console.log(openingHours, starterMenu, mainMenu);

// defining new names for variables
// chosen names: hours, starter, main
const { openingHours: hours, starterMenu: starters, mainMenu: main } = restaurant;
console.log(hours, starters, main);

// the menu property does not exist in restaurant object
const { menu = [], starterMenu: myStarters = [] } = restaurant;
console.log(menu, myStarters);

console.log('Mutating variables');
let a = 100;
let b = 200;

const obj = { a: 10, b: 20, c: 30 };
({ a, b } = obj);
console.log(`a = ${a}, b = ${b}`);

console.log('Nested objects');
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const deliveryObj = {
  time: '20:35',
  address: 'Via del Sole, 21',
  mainIndex: 1,
  starterIndex: 1,
};

restaurant.orderDelivery(deliveryObj);

const deliveryObj2 = {
  address: 'Via del Sole, 21',
};

restaurant.orderDelivery(deliveryObj2);
