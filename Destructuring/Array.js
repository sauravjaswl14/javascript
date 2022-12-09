const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

const [gold, silver, bronze] = raceResults;
const [first,,,fourth] = raceResults;  //skip among elements in array
const [winner,...others] = raceResults;


