const square = function (x) {
  return x * x;
};

const square1 = (x) => {
  return x * x;
};

const isEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

// parens are optional if there is only one parameter
const square2 = (x) => {
  return x * x;
};

//use empty parens for functions with no parameter
const singAsong = () => {
  return "LA LA LA La";
};

//----------------------------------------------------------------
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

//regular function expression
const doubles = numbers.map(function (n) {
  return n * 2; //doubles = [4, 6, 8, 10, 12, 14, 16, 18];
});

//Arrow function
const doubles1 = numbers.map((n) => {
  return n * 2;
});

//implicit return
const doubles2 = numbers.map((n) => n * 2);


// ['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd']

//Regular function expression
const parityList = numbers.map(function (n) {
  if (n % 2 === 0) return "Even";
  return "Odd";
});

//Arrow function
const parityList1 = numbers.map( n => {
  if (n % 2 === 0) return "Even";
  return "Odd";
});

//implicit return
const parityList2 = numbers.map( n => (n % 2 === 0 ? "even" : "odd"));


