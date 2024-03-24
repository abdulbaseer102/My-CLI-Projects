#! /usr/bin/env node
import inquirer from "inquirer";

let Convertion = {

   "PKR": {
       "USD":0.0044345898004435,
       "GBP":0.0036793112329372,
       "PKR":1
    },
   "GBP": {
      "USD":1.21,
      "PKR":271.79,
      "GBP":1
    },
    "USD":{
        "PKR":225.50,
        "GBP":0.83,
        "USD":1 
    }
}
const answer: {
    From: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency:",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency:",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Conversion amount:",
    },
]);

const { From, to, amount } = answer;

if (From && to && amount) {
    let result = Convertion[From][to] * amount;
    console.log("Your conversion from", From, "to", to, "is", result);
} else {
    console.log("Invalid Inputs");
}
