// fetch('https://swapi.dev/api/planets/')
// .then((response) => {
//     if(!response.ok)
//         throw new Error(`Error with status code: ${response.status}`);
//    return response.json()
// })
// .then((data) => {
//     console.log("fetched first 10 planets")
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
//     const nextURL = data.next;
//     return fetch(nextURL)
// })
// .then((response) => {
//     if(!response.ok)
//         throw new Error(`Error with status code : ${response.status}`);
//     return response.json();
// })
// .then((data) => {
//     console.log("Fetched next 10 planets")
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
// })
// .catch((err) => {
//     console.log(err);
// })

const checkStatusAndParse = (response) => {
    if(!response.ok)
        throw new Error(`Error with status code: ${response.status}`);
    return response.json()
}

const printPlanets = (data) => {
    console.log("loading 10 planets...")
    for(let planet of data.results){
        console.log(planet.name)
    }
    /* const p = new Promise((resolve,reject) => {
        resolve(data)
    })
    return p; */
    return Promise.resolve(data.next)
}

const fetchNextPlanets = (url) => {
    return fetch(url)
}

fetch('https://swapi.dev/api/planets/')
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err) => {
    console.log(err);
})