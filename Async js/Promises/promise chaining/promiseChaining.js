const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
            const data = pages[url];
            if(data){
                resolve({status: 200, data});
            }
            else{
                reject({status: 404});
            }
        }, 1000);
    })
}

// fakeRequest('/users1').then((res) => {
//     console.log("Request Worked!!")
//     console.log("status:",res.status)
//     console.log("Data:", res.data)
// })
// .catch((err) => {
//     console.log("Request did't work!!",err);
// })


/*
        //nested requests
    fakeRequest('/users').then((res) => {
    const id = res.data[0].id;
    fakeRequest(`/users/${id}`).then((res) => {
        const postId = res.data.topPostId;
        fakeRequest(`/posts/${postId}`).then((res) => {
                console.log(res.data.title); 
        })
    })
    })
    .catch((err) => {
        console.log(err.status);
    })
*/

fakeRequest('/users')
.then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
})
.then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
})
.then((res) => {
    console.log(res);
    console.log(res.data.title);
})
.catch((err) => {
    console.log("OH NO!!",err)
})