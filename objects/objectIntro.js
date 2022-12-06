//Object is also a reference type, variable stores reference/pointer/Address
//of the memory block where object is stored

//object is a collection of properties which are key value pairs

const fitbitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

fitbitData.totalMiles //211.7
fitbitData.workoutsThisWeek //"5 of 7"

const nums = {
    1 : "one", 
    2 : "two",
    '76 trombones' : "great song"
};

nums['76 trombones']; //"great song"
nums[1] //"one"
nums['2'] //"two"

const color = {
    red : '#FF0000',
    blue : '#0000FF',
    yellow: '#FFFF00'
};

let mysteryColor = "yellow";

color[mysteryColor]; //'#FFFF00'
