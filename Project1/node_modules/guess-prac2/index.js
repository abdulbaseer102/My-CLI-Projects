#! /usr/bin/env node
import inquirer from "inquirer";
const systemGenratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: 'number',
        name: 'Userguess',
        message: ' Write Your Guess b/w 0 to 10:'
    }
]);
const { Userguess } = answers;
console.log(Userguess, "Userguess", systemGenratedNo, "SYs");
if (Userguess === systemGenratedNo) {
    console.log('Omg Your Answer is correct\n You Win!');
}
else {
    console.log('Please Try Again Batter Luck Next Time!');
}
