import * as readlineSync from 'readline-sync';

interface Question {
    text: string;
    choices: string[];
    correctAnswerIndex: number;
}

class Quiz {
    questions: Question[];
    userResponses: number[];

    constructor(questions: Question[]) {
        this.questions = questions;
        this.userResponses = [];
    }

    displayQuestion(question: Question, questionNumber: number): void {
        console.log(`\nQuestion ${questionNumber + 1}: ${question.text}`);
        question.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });
    }

    takeQuiz(): void {
        this.questions.forEach((question, index) => {
            this.displayQuestion(question, index);

            const response = readlineSync.questionInt('Your choice: ');

            if (response >= 1 && response <= question.choices.length) {
                this.userResponses.push(response - 1);
            } else {
                console.log('Invalid choice. Please choose a valid option.');
                index--; // Repeat the current question
            }
        });
    }

    showResult(): void {
        console.log('\nQuiz Results:');
        this.questions.forEach((question, index) => {
            const userResponse = this.userResponses[index];
            const isCorrect = userResponse === question.correctAnswerIndex;

            console.log(`Question ${index + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`);
            console.log(`Your answer: ${question.choices[userResponse]}`);
            console.log(`Correct answer: ${question.choices[question.correctAnswerIndex]}\n`);
        });

        const correctCount = this.userResponses.filter(
            (response, index) => response === this.questions[index].correctAnswerIndex
        ).length;

        const percentage = (correctCount / this.questions.length) * 100;
        console.log(`Your final score: ${correctCount} out of ${this.questions.length}`);
        console.log(`Percentage: ${percentage.toFixed(3)}%\n`);
    }
}

// Example quiz questions
const questions: Question[] = [
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
