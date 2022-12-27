const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)'
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)'
//         setTimeout(() => {
//             btn.style.transform = 'translateX(300px)'
//             setTimeout(() => {
//                 btn.style.transform = 'translateX(400px)'
//                 setTimeout(() => {
//                     btn.style.transform = 'translateX(500px)'
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }, 1000);

const moveX = (element,amount,delay,onSucess,onFailure) => {
    setTimeout(() => {
        let bodyBoundary = document.body.clientWidth;
        let elright = element.getBoundingClientRect().right;
        let currentLeft = element.getBoundingClientRect().left;
        if(elright + amount > bodyBoundary){
            onFailure();
        }
        else{
            element.style.transform = `translate(${currentLeft + amount}px)`;
            onSucess();
        }
    },delay)
}


// moveX(btn,100,1000,() => {
//     moveX(btn,100,1000,() => {
//         moveX(btn,100,1000,() => {
//             moveX(btn,100,1000,() => {
//                 moveX(btn,1000,1000)
//             })
//         })
//     })
// })

moveX(btn,300,1000,() => {
    //sucess
    moveX(btn,300,1000, () => {
        //sucess
        moveX(btn,300,1000,() => {
            //sucess
            moveX(btn,300,1000,() => {
                //sucess
                moveX(btn,300,1000,() => {
                    console.log("YOU HAVE A WIDE SCREEN")
                }, () => {
                    alert("can't move any further");
                })
            }, () => {
                //failure
                alert("can't move any further");
            })
        },() => {
            //failure
            alert("can't move any further");
        })
    }, () => {
        //failure
        alert("can't move any further");
    })
}, () => {
    //failure
    alert("can't move any further")
})