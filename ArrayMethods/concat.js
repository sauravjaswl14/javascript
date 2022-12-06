//Concat Method is used to merge two or more arrays.
//Doesnot change the existing array
//but instead returns a new array

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

fruits.concat(veggies); //(4) ['apple', 'banana', 'asparagus', 'brussel sprouts']
veggies.concat(fruits); //(4) ['asparagus', 'brussel sprouts', 'apple', 'banana']

let allFoods = fruits.concat(veggies,meats);
console.log(allFoods); //(6) ['apple', 'banana', 'asparagus', 'brussel sprouts', 'steak', 'chicken breast']

