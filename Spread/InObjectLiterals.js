//Copies properties from one object into another object literals

const feline = { legs: 4, family: 'Felidae'};
const canine = { family: 'Caninae', furry: true};

const dog = { ...canine, isPet: true};

const lion = { ...feline, genus: 'Panthera'};

const catDog = { ...feline, ...canine};