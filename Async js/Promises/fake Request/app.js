const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const pages = {
          "/users": [
            { id: 4, name: "john" },
            { id: 3, name: "Mary" },
          ],
          "/about": "Welcome to about page",
        };
        const data = pages[url];
        if(data){
            resolve({ status: 200, data });
        }else{
            reject({ status: 404 });
        }
    },2000)
  });
};

fakeRequest('/about')
  .then((res) => {
    console.log("status code :",res.status);
    console.log("Data:",res.data);
    console.log("REQUEST WORKED!!");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED!!");
  });
