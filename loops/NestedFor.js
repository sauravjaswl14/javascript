const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

for(let i = 0; i < gameBoard.length; i++)
{
    let row = gameBoard[i];
    //console.log(row);
    for(let j = 0; j < row.length; j++)
    {
        console.log(row[j]);
    }
}

let total = 0;
for(let i = 0; i < gameBoard.length; i++)
{
    let row = gameBoard[i];
    for(let j = 0; j < row.length; j++)
    {
        total += row[j];
    }
}