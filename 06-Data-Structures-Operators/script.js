'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
// [weekdays[3]]: {
//   open: 12,
//   close: 22,
// },
// [weekdays[4]]: {
//   open: 11,
//   close: 23,
// },
// [weekdays[5]]: {
//   open: 0,
//   close: 24,
// },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Near Fateh Sagar Lake, Udaipur',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
  thu: {
    open: 12,
    close: 22,
  },
  fir: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
},

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////OR assignment operator//////////
// const rest1 = {
//     name: 'Capri',
//     numGuests: 0,
// };

// const rest2 = {
//     name: 'La Pizza',
//     owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// console.log('---------- OR ----------');

// console.log(3 || 'Inder');

// restaurant.numGuest = 23;
// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuest || 10;
// console.log(guests2);

// console.log('-----------AND----------');

// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//////////////////////////////////////////////////////////////////////////////////
// 1) Destructuring
// SPREAD, because on RIGHT side of =
// const arr = [1,2, ...[3, 4]];

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(Pizza, Risotto, otherFood);

// 2) Function
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i<numbers.length; i++) sum += numbers[i]
//   console.log(sum);
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

////////////////////////////// The Spread Operator(...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str  = 'Inder';
// const letters = [...str, '', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Restorant Roma'
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////////////////////////////////////////
// Destructuring Object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a,b);


// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// const [i, ,[j, k]] = nested;
// console.log([i,j, k]);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r) ;
