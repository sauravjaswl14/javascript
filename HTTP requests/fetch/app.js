fetch('https://swapi.dev/api/planets/')      //fetch method will return a promise resolved with response object
.then((response) => {
    if(!response.ok){
        throw new Error(`response status is not ok ${response.status}`)
    }
    else{
        response.json()         //json() will itself return a promise as it is a asynchronous operation and might take some time to parse info
        .then((data) => {        //promise returned by json() will be resolved with a data
            console.log(data)
            for(let planet of data.results){
                console.log(planet.name)
             }
        })      
    }
})
.catch((err) => {
    console.log(err);
})