//Unlike fetch, we dont have to do json parsing on our own
//it throws error if the status is 404,unlike fetch where promise is resolved with response 


axios.get('https://swapi.dev/api/planets/')
.then((res) => {
    console.log(res.data)
})
.catch((err) => {
    console.log(err)
})