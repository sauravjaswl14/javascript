fetch('https://swapi.dev/api/planets/')
.then((response) => {
    if(!response.ok)
        throw new Error(`Error with status code: ${response.status}`);
    return response.json()
})
.then((data) => {
    const filmURL = data.results[1].films[0];
    return fetch(filmURL)
})
.then((response) => {
    if(!response.ok)
        throw new Error(`Error with status code: ${response.status}`);
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch(err => {
    console.log(err);
})