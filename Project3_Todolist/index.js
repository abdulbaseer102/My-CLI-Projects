#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add another todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todo.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todo.length > 0) {
    console.log("Your todo list:");
    todo.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("Nothing todo");
}
