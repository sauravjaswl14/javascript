const fakeRequest = (url) => {
   return new Promise((resolve,reject) => {
        let rand = Math.random();
        setTimeout( () => {
            if(rand < 0.7){
                resolve('Here is You fake data:');
            }
            reject('connection timeout :(');
        },1000)
    })
}
fakeRequest('/dog/page1')
.then( (data) => {
    console.log("Req worked!!");
    console.log(data);
})
.catch((err) => {
    console.log("error!! req didn't work");
    console.log(err);
})