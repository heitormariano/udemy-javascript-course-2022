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
  orderPasta: function (ing1, ing2, ing3) {
    const message = `Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`;
    console.log(message);
  },
};

const arr01 = [1, 2, 3];
const arr02 = [10, 20, arr01[0], arr01[1], arr01[2]];
console.log(arr01);
console.log(arr02);

// spread operator
const newArr01 = [4, 5, 6];
const newArr02 = [1, 2, 3, ...newArr01];
console.log(newArr02);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
console.log('Join result');
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Heitor';
const letters = [...str];
console.log(letters);

const newLetters = [...str, ' ', ...'Camara'];
console.log(newLetters);

const ingredients = [
  // prompt("Let's make pasta, my friend! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

// objects
console.log('New Restaurant');
const newRestaurant = { foundedIn: 2004, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.currentName = 'Ristorante Roma';

console.log('Object copied - Name');
console.log(restaurantCopy.currentName);

console.log('Original object - Name');
console.log(restaurant.currentName);
