//Returns copy of an array, doesnot mutates the array
let animals = ['shark','salmon','whale','bear','lizard','tortoise'];

let swimmers = animals.slice(0,3);

let mammals = animals.slice(2,4);

let reptiles = animals.slice(4);

let quardruples = animals.slice(-3);//counts 3 from the back

animals.slice(); //Makes copy of an entire array


