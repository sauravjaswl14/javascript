const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((total,r) => total + r);
//     const avg = sum/arr.length;
//     return{
//         max : max,
//         min : min,
//         sum : sum,
//         avg : avg
//     }
// };

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((total,r) => total + r);
    const avg = sum/arr.length;
    return{
        max, 
        min, 
        sum, 
        avg 
    }
};

const statObj = getStats(reviews);  //{max: 5, min: 2.8, sum: 26.74, avg: 3.82}