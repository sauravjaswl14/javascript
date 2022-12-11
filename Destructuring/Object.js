//Variables name must be existing key name in the object

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
  }
  
  // const {
  //   first,
  //   last,
  //   time
  // } = runner;
  
  //We can give variable a new name
  const {
    country: nation,
    title: honorific
  } = runner;
  
  const {
    first,
    last,
    ...other
  } = runner;