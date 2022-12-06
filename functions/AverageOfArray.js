function avg(arr)
{
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    let average = sum/arr.length;
    return average;
}

let average = avg([2,4,5,3,2,8,5]);

console.log(average);

//[2,4,5,8,9]