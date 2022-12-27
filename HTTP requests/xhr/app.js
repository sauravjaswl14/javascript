// const req = new XMLHttpRequest();

// req.addEventListener('load', function(){
//     console.log("It worked!!");
//     const data = JSON.parse(this.responseText);
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
    
// })

// req.addEventListener('error', function(){
//     console.log("ERROR!!!");
// })

// req.open('GET', 'https://swapi.dev/api/planets/');
// req.send();

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    console.log("It worked!!");
    const data = JSON.parse(this.responseText);
    console.log(data);
})
firstReq.addEventListener('error', function(){
    console.log("Error!!!!")
})
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();