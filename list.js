var todos = [];

var input = prompt("What would you like to do?")

while(input !== "quit") {
    if(input === "list") {
        listToDos();
    } else if(input === "new") {
        addToDo();
    } else if(input === "delete"){
        deleteToDo();
    }
    input = prompt("What would you like to do?");
}
console.log("You quit the app.");

function listToDos() {
    console.log("----------");
    todos.forEach(function(todo, i){
        console.log((i) + ": " + todo);
    });
    console.log("----------");
}

function addToDo() {
    var newToDo = prompt("Enter new to-do");
    todos.push(newToDo);
    console.log("Added to-do");
}

function deleteToDo() {
    var index = prompt("Enter index of to-do to delete");
    todos.splice(index, 1);
    console.log("Deleted to-do");
}