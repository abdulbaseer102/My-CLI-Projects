import * as readlineSync from 'readline-sync';
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
}
