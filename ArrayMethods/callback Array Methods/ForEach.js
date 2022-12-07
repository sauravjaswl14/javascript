//Accepts a callback function
//Calls the function once per element in the array

//passes each element of the array, in the callback function's argument one at a time

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function(num){
    console.log(num*2);
});
//------------------------------------------------------------------
function printTriple(num){
    console.log(num*3);
}

numbers.forEach(printTriple); //passing printTriple as callback