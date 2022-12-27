// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function(){
//     console.log("First request worked!");
//     const data = JSON.parse(this.responseText);
//     const filmURL = data.results[0].films[0];
//         const filmReq = new XMLHttpRequest();
//         filmReq.addEventListener('load', function(){
//             console.log("Second request Worked")
//             const filmData = JSON.parse(this.responseText);
//             console.log(filmData.title)
//         })
//         filmReq.addEventListener('error', function(e){
//             console.log("Req2 Error",e);
//         })

//         filmReq.open('GET',filmURL);
//         filmReq.send();
//     });

// firstReq.addEventListener('error', function(e){
//     console.log("error!!!",e);
// })

// firstReq.open('GET','https://swapi.dev/api/planets/');
// firstReq.send();


const newReq = new XMLHttpRequest();

newReq.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
        filmReq.addEventListener('load',function(){
            const filmData = JSON.parse(this.responseText);
            console.log(filmData)
        })

        filmReq.addEventListener('error',function(){
            console.log("Error!!!")
        })
        filmReq.open('GET', filmURL);
        filmReq.send();
})

newReq.addEventListener('error', function(){
    console.log("Error!!")
})

newReq.open('GET','https://swapi.dev/api/planets/');
newReq.send();