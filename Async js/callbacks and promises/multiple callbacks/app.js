// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;  //500ms to 5000 ms(5s)
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

fakeRequestCallback('books.com/page1',
 function(response){
    console.log("It worked!!");
    console.log(response);
        fakeRequestCallback('books.com/page2',
         function(response){
            console.log("It worked Again!!");
            console.log(response);
                fakeRequestCallback('books.com/page3',
                function(response){
                    console.log("It worked Again (3rd req)!!");
                    console.log(response);
                }, 
                function(err){
                    console.log("error (3rd request)!!",err);

                })
         },
        function(err){
            console.log("error (2nd request)!!",err);
        })
 },
 function(err){
    console.log("error!!",err);
 });
