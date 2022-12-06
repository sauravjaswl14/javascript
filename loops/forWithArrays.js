const examScores = [98, 77, 84, 91, 57, 66];

let total = 0;
for (let i = 0; i < examScores.length; i++){
    total += examScores[i];
}
console.log(total/examScores.length);

const myStudents = [
    {
        firstName : 'Zeus',
        grade : 86
    },
    {
        firstName : 'Artemis',
        grade : 97
    },
    {
        firstName : 'Hera',
        grade : 72
    },
    {
        firstName : 'Apollo',
        grade : 90
    }
];

for( let i = 0; i < myStudents.length; i++)
{
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}
/*Zeus scored 86
  Artemis scored 97
  Hera scored 72
  Apollo scored 90 
 */

let marksTotal = 0;
for(let i = 0; i < myStudents.length; i++){
    student = myStudents[i];
    marksTotal += student.grade;
}
let Avg = marksTotal/myStudents.length;
console.log(Avg); //86.25


let word = "stressed";
let reversedWord = "";
for(let i = word.length -1; i >= 0; i--){
    reversedWord += word[i];
}
console.log(reversedWord); //desserts