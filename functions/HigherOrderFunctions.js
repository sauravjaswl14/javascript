function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
};

const operations = [add, subtract, multiply, divide];//functions can be stored as an array just like other values

for(let calc of operations){
    let result = calc(30,5);  //calc is just a placeholder for functions add,subtract...etc.
    console.log(result);
}

