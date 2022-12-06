//the indexOf() method returns the first index at which a given element can be found
//in the array, or -1 if it is not present

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

ingredents.indexOf('cheese'); //3
ingredents.indexOf('cheese',5); //-1

if(ingredents.indexOf('flour') !== -1)
{
    console.log("I am gluten free i cannot eat that");
}