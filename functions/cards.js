// function getCard() {
//   const values = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//   ];
//   const valIdx = Math.floor(Math.random()*values.length);
//   const value = values[valIdx];
//   const suits = ["spade", "club", "Diamond", "Heart"];
//   const suitIdx = Math.floor(Math.random()*suits.length);
//   const suit = suits[suitIdx];
//   return {value: value, suit: suit};
  
// }

// function pick(arr)
// {
//     const idx = Math.floor(Math.random()*arr.length);
//     return arr[idx];
// }

// function getCard() {
//     const values = [
//       "A",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "10",
//       "J",
//       "Q",
//       "K",
//     ];
//     // const valIdx = Math.floor(Math.random()*values.length);
    
//     const value = pick(values);
//     const suits = ["spade", "club", "Diamond", "Heart"];
//     // const suitIdx = Math.floor(Math.random()*suits.length);
//     const suit = pick(suits);
//     return {value: value, suit: suit};
    
//   }

function pick(arr)
{
    const idx = Math.floor(Math.random()*arr.length);
    return arr[idx];
}

function getCard() {
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const suits = ["spade", "club", "Diamond", "Heart"];
    return {value: pick(values), suit: pick(suits)};
    
  }
