///Modifies the orignal array

//splice(startIdx, deleteCount, itemsToinsert);

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard','tortoise'];

//Insertion in between
 animals.splice(4,0,'snake');

 console.log(animals); //(7) ['shark', 'salmon', 'whale', 'bear', 'snake', 'lizard', 'tortoise']

 animals.splice(4,2,'sea horse');

 console.log(animals); //(6) ['shark', 'salmon', 'whale', 'bear', 'sea horse', 'tortoise']

 animals.splice(5,0,'snail','crocodile');

 console.log(animals); //(8) ['shark', 'salmon', 'whale', 'bear', 'sea horse', 'snail', 'crocodile', 'tortoise']

 //Removes array elements and returns removed values
 let reptiles = animals.splice(4); //(4) ['sea horse', 'snail', 'crocodile', 'tortoise']

 let mammals = animals.splice(2,2); // animals.splice(-2)
