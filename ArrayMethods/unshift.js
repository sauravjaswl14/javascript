//Adds one or more elements to the begining of an array
//and returns the new length(size) of the array

let dishesToDo = ["big platter"];
dishesToDo.unshift("large plate");
dishesToDo.unshift("small plate");
dishesToDo.unshift("cereal bowl");
dishesToDo.unshift("mug");
dishesToDo.unshift("dirty spoon"); 

dishesToDo.shift(); //'dirty spoon'
dishesToDo.shift(); //'mug'
dishesToDo.shift(); //'cereal bowl'
dishesToDo.shift(); //'small plate'
dishesToDo.shift(); //'large plate'
dishesToDo.shift(); //'big platter'


