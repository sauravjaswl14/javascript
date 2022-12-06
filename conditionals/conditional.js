let userScore = 1700;
let highScore = 1600;

if(userScore>=highScore){
    console.log(`congratulations you have a new highscore of ${userScore}`);
    highScore = userScore;
}
else{
    console.log(`you have a score of ${userScore} you didnot beat the highscore of ${highScore}`);
}