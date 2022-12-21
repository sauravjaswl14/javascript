// let targetNum = Math.floor(Math.random()*10);
// let guess = Math.floor(Math.random()*10);
// while(guess !== targetNum){
//     console.log(`guess: ${guess}, target: ${targetNum}`);
//     guess = Math.floor(Math.random()*10);
// }
// console.log(`guess: ${guess}, target: ${targetNum}`);

let maximumNum = parseInt(prompt("enter a maximum number"));
while(!maximumNum){
    maximumNum = parseInt(prompt("enter a valid number"));
}
let target = Math.floor(Math.random()*maximumNum) + 1;
console.log(target);
let guess = parseInt(prompt("enter a guess"));
let attempts = 1;

while(guess !== target){
    attempts++;
    if(guess>target){
       guess = parseInt(prompt("Too high,enter another guess"));
    }
    else{
        guess = parseInt(prompt("Too low,enter another guess"));
    }
}
console.log("You got it!!");
