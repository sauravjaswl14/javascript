/* when it is uncertain how many times the loop should run unlike for loop,
we use while loop and make sure we make the conditon false inside while loop scope
to avoid infinite loop */

const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);

while(guess !== target){
    console.log(`target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random()*10);
}
console.log(`target: ${target} Guess: ${guess}`);
