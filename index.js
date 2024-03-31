import inquirer from "inquirer";
let todos = [];
let condintion = true;
while (condintion) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condintion = addTask.addMore;
    console.log(todos);
}
