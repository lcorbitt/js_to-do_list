var todos = [];

var input = prompt("What would you like to do?")

while(input !== "quit") {
    if(input === "list") {
        console.log(todos);
    } else if(input === "new") {
    var newToDo = prompt("Enter new to-do");
        todos.push(newToDo);
    };
    input = prompt("What would you like to do?");
}
console.log("You quit the app.");