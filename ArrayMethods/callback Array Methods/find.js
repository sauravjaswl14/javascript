let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

const movie = movies.find( (movie) => {
    return movie.includes('Mrs.');
});

//implicit return
const movie1 = movies.find( movie => (
    movie.indexOf('Mrs') === 0
));

const books = [
    {
        title : 'Good Omens',
        authors : ['Terry Pratchett', 'Neil Gaiman'],
        rating : 4.25
    },
    {
        title : 'Bone: The Complete Edition',
        authors : ['Jeff Smith'],
        rating : 4.42
    },
    {
        title : 'American Gods',
        authors : ['Neil Gaiman'],
        rating : 4.11
    },
    {
        title : 'A Gentleman in Moscow',
        authors : ['Amor Towels'],
        rating : 4.36
    }

];

const goodBook = books.find( book => {
    return book.rating >= 4.4;
});

const NeilBook = books.find( book => (
    book.authors.includes('Neil Gaiman')
))
