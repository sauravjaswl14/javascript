const seatingChart = [
    ['Kristen','Erik','Namita'],
    ['Geoffrey','Juanita','Antonio','Kevin'],
    ['Yuma','Sakura','Jack','Erika']
]

for(let i = 0; i < seatingChart.length; i++){
    let row = seatingChart[i];
    for(let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}

for(let row of seatingChart){
    for(let student of row){
        console.log(student);
    }
}