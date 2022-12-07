function callThreeTimes(f){
    f();
    f();
    f();
}

function repeatNtimes(action,num){
    for(let i = 0; i < num; i++){
        action();
    }
}

function cry(){
    console.log("BOO HOO I AM SO SAD!!");
}

function rage(){
    console.log("I HATE EVERYTHING!!");
}

// callThreeTimes(rage);

// callThreeTimes(cry);

//repeatNtimes(cry,13);

function pickOne(f1,f2){
    let rand = Math.random();
    console.log(rand);
    if(rand < 0.5){
        f1();
    }
    else{
        f2();
    }
}

pickOne(cry,rage);

