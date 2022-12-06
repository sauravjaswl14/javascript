
const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);

while(guess !== target){
    console.log(`target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random()*10);
}
console.log(`target: ${target} Guess: ${guess}`);
