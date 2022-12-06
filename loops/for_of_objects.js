const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  coraline: 7.5,
};
//Object.keys(movieReviews)
//Object.values(movieReviews)

for(let movie of Object.keys(movieReviews))
{
  console.log(movie, movieReviews[movie]);
}

let rating = Object.values(movieReviews);
let total = 0;
for(let r of rating)
{
  total += r;
}
let avg = total/rating.length;
console.log(avg);