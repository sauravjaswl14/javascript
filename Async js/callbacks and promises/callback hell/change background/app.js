const delayedColorChange = (newColor,delay) => {
   return new Promise((resolve,reject) => {
        setTimeout( () => {
            document.body.style.backgroundColor = newColor;
            resolve();
        },delay)
    })
}

delayedColorChange('red',1000)
.then( () => {
    return delayedColorChange('orange',1000)
})
.then( () => delayedColorChange('yellow',1000))
.then( () => delayedColorChange('green',1000))
.then( () => delayedColorChange('violet',1000))
.then( () => delayedColorChange('indigo',1000))
.then( () => delayedColorChange('purple',1000))