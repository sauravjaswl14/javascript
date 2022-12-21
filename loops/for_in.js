const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for(let person in testScores){
//     console.log(person);
// }

for(let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}

const keyValueArr = Object.entries(testScores);
const students = Object.keys(testScores); //(10) ['keenan', 'damon', 'kim', 'shawn', 'marlon', 'dwayne', 'nadia', 'elvira', 'diedre', 'vonnie']
const scores = Object.values(testScores); //(10) [80, 67, 89, 91, 72, 77, 83, 97, 81, 60]

let total = 0;
for(let score of scores){
    total += score;
}
console.log(total/scores.length); //average of scores
