const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

const doubles = numbers.map(function(num){ //callback function will run for each element in the array
    return num*2;   //must return the value from map function so that array of mutated element would be created
});

const isEven = numbers.map(function(n){
    return {
        value : n,
        isEven : n % 2 === 0
    }
});  
/* 
    [   
        {value: 20, isEven: true}
        {value: 21, isEven: false}
        {value: 22, isEven: true} 
        {value: 23, isEven: false}
        {value: 24, isEven: true}
        {value: 25, isEven: false}
        {value: 26, isEven: true}
        {value: 27, isEven: false}
   ];
*/

const Abbvr = words.map(function(word){
    return word.toUpperCase().split('').join('.');
});

const books = [
    {
        title: 'Good Omens',
        authors : ['Terry Pratchett', 'Neil Gaiman'],
        reting : 4.25
    },
    {
        title : 'Bone: The Complete Edition',
        authors : ['Jeff Smith'],
        rating : 4.42
    },
    {
        title : 'American Gods',
        authors : ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title : 'A Gentleman in Moscow',
        authors : ['Amor Towels'],
        rating: 4.36
    }
];

const titles = books.map(function(book){
    return book.title;
});  //(4) ['Good Omens', 'Bone: The Complete Edition', 'American Gods', 'A Gentleman in Moscow']

