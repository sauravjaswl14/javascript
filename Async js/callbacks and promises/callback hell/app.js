
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// },1000);

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'orange';
// },2000);

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'yellow';
// },3000);

/* 
            setTimeout(() => {
            document.body.style.backgroundColor = 'red';
            setTimeout(() => {
                document.body.style.backgroundColor = 'orange';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'yellow';
                    setTimeout(() => {
                        document.body.style.backgroundColor = 'purple';
                    }, 1000);
                },1000)
            },1000)
        },1000)

*/


const delayedColorChange = (newColor,delay,doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext()
    },delay)
}

delayedColorChange('red',1000, () => {
    delayedColorChange('orange',1000,() => {
        delayedColorChange('yellow',1000, () => {
            delayedColorChange('purple',1000)
        })
    })
})

searchMovieAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        //if it works,run this
    }, () => {
        //if it doesn't work, run this instead
    })
}, () => {
    //if API is down, or request failed
})



