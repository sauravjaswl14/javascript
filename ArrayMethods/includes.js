//The includes() method determines whether an array includes a certain value
//among its entries, returning true or false as appropriate

//includes() is a boolean method, it returns true or false
let ingredents = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
  "butter",
];

ingredents.includes('flour'); //true
ingredents.includes('eggs'); //false
ingredents.includes('water',3); //false

if(ingredents.includes('flour')){
    console.log("I am gluten free, i cannot eat flour");
}