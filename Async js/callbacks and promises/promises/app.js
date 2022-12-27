// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise("yelp.com/api/page1")
//   .then(() => {
//     console.log("Promise Resolved");
//     console.log("it worked (page 1)");
//     fakeRequestPromise("yelp.com/api/page2")
//       .then(() => {
//         console.log("it worked (page 2)");
//         fakeRequestPromise("yelp.com/api/page3")
//           .then(() => {
//             console.log("it worked (page 3)");
//           })
//           .catch(() => {
//             console.log("error req3");
//           });
//       })
//       .catch(() => {
//         console.log("error req2");
//       });
//   })
//   .catch(() => {
//     console.log("Promise Rejected");
//     console.log("error!! req 1");
//   });



fakeRequestPromise("yelp.com/coffee/page1")
  .then((data) => {
    console.log("it worked for page 1");
    console.log(data);
    return fakeRequestPromise("yelp.com/coffee/page2");
  })
  .then((data) => {
    console.log("it worked for page 2");
    console.log(data);
    return fakeRequestPromise("yelp.com/coffee/page3");
  })
  .then((data) => {
    console.log("it worked for page 3");
    console.log(data);
  })
  .catch((err) => {
    console.log("oh no a request was failed");
    console.log(err);
  });
