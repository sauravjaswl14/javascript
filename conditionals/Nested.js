let password = "Hello kitty";

if(password.length>=6){
    if(password.indexOf(' ') === -1){
        console.log("valid password");
    }
    else{
        console.log("Password is long enough but cannot contain spaces");
    }
}
else{
    console.log("Password is too short!!");
}

//using logical AND
if(password.length >= 8 && password.indexOf(' ') === -1){
    console.log("valid password");
}
else{
    console.log("Invalid password");
}