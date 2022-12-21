let input = prompt("what would you like to do?");
const todo = ["maw the lawn"];
while( input !== 'quit' && input !== 'q'){
    if(input === "new"){
        const newtodo = prompt("ok, what is your new todo?");
        todo.push(newtodo);
        console.log(`${newtodo} added to the list`);
    }
    else if(input === "list"){
        console.log("*******************");
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("*******************");
    }
    else if(input === "delete"){
        let index = parseInt(prompt("enter an index to delete"));
        if(!Number.isNaN(index)){
            const deleted = todo.splice(index,1);
            console.log(`Deleted : ${deleted}`);
        }else{
            console.log("invalid index");
        }

    }
    input = prompt("what would you like to do?");
}
console.log("ok, you quit the App!!");