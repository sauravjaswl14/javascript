//kind of a Function factories
//the outer function modifies the function and returns it

/*
const triple = multiplyBy(3);//this function will return a modified function ,multiplying passed argument by 3
triple(5);//15

const double = multiplyBy(2);
double(8);//16)
*/

//creating a function factory
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);

/*
    function (x) {
    return x * 3;
  };
*/

const double = multiplyBy(2);

/*
  function (x) {
    return x * 2;
  };
*/

let x = triple(5); //15
console.log(x);
