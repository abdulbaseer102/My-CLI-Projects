#! /usr/bin/env node
import inquirer from "inquirer";

type ansType = {
  Userguess1: number;
  Userguess2: number;
  Userguess3: number;
};

const systemGeneratedNo = Math.floor(Math.random() * 11); 

const answers: ansType = await inquirer.prompt([
  {
    type: 'number',
    name: 'Userguess1',
    message: 'First try: Write Your Guess between 0 to 10:'
  },
  {
    type: 'number',
    name: 'Userguess2',
    message: 'Second try: Write Your Guess between 0 to 10:'
  },
  {
    type: 'number',
    name: 'Userguess3',
    message: 'Third try: Write Your Guess between 0 to 10:'
  }
]);

const { Userguess1, Userguess2, Userguess3 } = answers;



if (Userguess1 === systemGeneratedNo || Userguess2 === systemGeneratedNo || Userguess3 === systemGeneratedNo) {
  console.log('Congratulations! Your answer is correct. Now Go To the next level');
  type ansType = {
    Userguess1: number;
    Userguess2: number;
    Userguess3: number;
  };
  
  const systemGeneratedNo = Math.floor(Math.random() * 11); 
  
  const answers: ansType = await inquirer.prompt([
    {
      type: 'number',
      name: 'Userguess1',
      message: 'First try: Write Your Guess between 0 to 10:'
    },
    {
      type: 'number',
      name: 'Userguess2',
      message: 'Second try: Write Your Guess between 0 to 10:'
    },
    {
      type: 'number',
      name: 'Userguess3',
      message: 'Third try: Write Your Guess between 0 to 10:'
    }
  ]);
  
  const { Userguess1, Userguess2, Userguess3 } = answers;
  

  
  if (Userguess1 === systemGeneratedNo || Userguess2 === systemGeneratedNo || Userguess3 === systemGeneratedNo) {
    console.log('Congratulations! Your answer is correct. You Win!');
    console.log("User guesses:", Userguess1, Userguess2, Userguess3);
console.log("System generated number:", systemGeneratedNo);
    console.log("Score:",100)
} else {
  console.log("Better luck next time!");
  console.log("Score:",50)
  console.log("System generated number:", systemGeneratedNo);
}

}else{
  console.log("Better luck next time!");
  console.log("Score:",0,"Nah")
  console.log("System generated number:", systemGeneratedNo);
}
