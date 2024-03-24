#! /usr/bin/env node
import inquirer from "inquirer";
const ansawer = await inquirer.prompt([
    {
        type: "input",
        name: "Userid",
        message: "Please Enter your User ID:"
    },
    {
        type: "Number",
        name: "UserPin",
        message: "Please Enter Your  Pin:",
    },
    {
        type: "list",
        name: "AccountType",
        choices: ["Current", "Saving"],
        message: "Please Select Your AccountType:",
    },
    {
        type: "list",
        name: "TransictionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Please Select Your Transiction:",
        when(ansawer) {
            return ansawer.AccountType;
        }
    },
    {
        type: "list",
        name: "Amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Please Select Your Amount:",
        when(ansawer) {
            return ansawer.TransictionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "Amount ",
        message: "Please Enter Your Amount:",
        when(ansawer) {
            return ansawer.TransictionType == "Withdraw";
        }
    },
]);
if (ansawer.userid && ansawer.userpin) {
    const balance = Math.floor(Math.random() * 100000000);
    console.log(balance);
    const EnteredAmount = ansawer.Amount;
    if (EnteredAmount >= balance) {
        const remaining = balance;
        console.log("Your Reamaning Balance", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
