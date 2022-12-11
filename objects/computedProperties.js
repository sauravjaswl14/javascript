const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'Steven Speilberg';

// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
    [role] : person,
    [role2] : person2,
    [1+6+9] : "sixteen"
};

//function that accepts object, key, value and return the object with dynamically added properties

//without computed property
function addProp(obj,k,v){
    const copy = {...obj};
    copy[k] = v;
    return copy;
}

const res = addProp(team,'happy',':)');

//with computed property
const addProp1 = (obj,k,v) => {
    return {
        ...obj,
        [k] : v
    }
}

const res1 = addProp1(team,"sad",":(");



