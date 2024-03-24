"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
class Quiz {
    questions;
    userResponses;
    constructor(questions) {
        this.questions = questions;
        this.userResponses = [];
    }
    displayQuestion(question, questionNumber) {
        console.log(`\nQuestion ${questionNumber + 1}: ${question.text}`);
        question.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });
    }
    takeQuiz() {
        this.questions.forEach((question, index) => {
            this.displayQuestion(question, index);
            const response = readlineSync.questionInt('Your choice: ');
            if (response >= 1 && response <= question.choices.length) {
                this.userResponses.push(response - 1);
            }
            else {
                console.log('Invalid choice. Please choose a valid option.');
                index--; // Repeat the current question
            }
        });
    }
    showResult() {
        console.log('\nQuiz Results:');
        this.questions.forEach((question, index) => {
            const userResponse = this.userResponses[index];
            const isCorrect = userResponse === question.correctAnswerIndex;
            console.log(`Question ${index + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`);
            console.log(`Your answer: ${question.choices[userResponse]}`);
            console.log(`Correct answer: ${question.choices[question.correctAnswerIndex]}\n`);
        });
        const correctCount = this.userResponses.filter((response, index) => response === this.questions[index].correctAnswerIndex).length;
        const percentage = (correctCount / this.questions.length) * 100;
        console.log(`Your final score: ${correctCount} out of ${this.questions.length}`);
        console.log(`Percentage: ${percentage.toFixed(3)}%\n`);
    }
}
// Example quiz questions
const questions = [
    {
        text: 'What is the capital of France?',
        choices: ['Berlin', 'Madrid', 'Paris', 'London'],
        correctAnswerIndex: 2,
    },
    {
        text: 'Which planet is known as the Red Planet?',
        choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctAnswerIndex: 0,
    },
    {
        text: 'What is the largest mammal on Earth?',
        choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Gorilla'],
        correctAnswerIndex: 1,
    },
];
// Create and run the quiz
const quiz = new Quiz(questions);
quiz.takeQuiz();
quiz.showResult();
