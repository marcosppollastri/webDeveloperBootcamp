var option;
var todos = [];

while (option !== "quit") {
    option =  prompt("What do you want to do?");
    if (option === "new") {
        newTodo();
        console.log("New todo added!");
    }
    if (option === "list") {
        listTodos();
    }
    if (option === "remove") {
        removeTodo();
    }

}
console.log("Thank you for using this app!");

function newTodo(){
    todos.push(prompt("What is the new todo?"));
}

function listTodos(){
    console.log("*******");
    todos.forEach(function(todo, i){
        console.log(i+": "+todo);
    });
    console.log("*******");
}

function removeTodo(){
    var i = prompt("Please type the index of the todo to remove");
    todos.splice(i,1);
    console.log("ELEMENT "+i+" REMOVED!");
}