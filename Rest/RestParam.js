
//Argument Object: Array like object but not an array, collects every params passed in function
// function sum(){
//     const argsArr = [...arguments];
//     return argsArr.reduce((total,currVal) => {
//         return total + currVal;
//     })
// }

function sum(...nums){
    return nums.reduce((total,currVal) => {
        return total + currVal;
    })
}

const multiply = (...nums) => (
    nums.reduce((total,currVal) => total * currVal )
);

function fullname(fname,lname,...titles){
    console.log("first", fname);
    console.log("last", lname);
    console.log("Titles", titles);
}
/*
    fullname('john','carter','III','order of the phoenix','jr')
    first john
    last carter
    Titles (3) ['III', 'order of the phoenix', 'jr']
*/