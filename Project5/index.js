#! /usr/bin/env node

import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence To Count the Word"
    }
]);
const Word = answers.Sentence.trim().split(" ");
console.log("Your sentence word count is " + Word.length);
