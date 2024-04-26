class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const wagon = new Car('G-Wagon', 'AMG', 2019, 'true')
console.log({wagon});

// Rental class
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const car = new Rental ('Subaru', 'John', "2024-2-22", "2024-5-16")
console.log({car});



QUE2
// Question class
class Question {
    
    constructor(text, options, correctAnswer) {
        this.text = text; 
        this.options = options; 
        this.correctAnswer = correctAnswer; 
    }

    // Method to check if the user answer is correct and return true if the answer is correct, false if not
    checkAnswer(userAnswer) {

        if(userAnswer != this.correctAnswer){
            return false;
        }

        return true;
    }

}

// Quiz class
class Quiz {
    
    constructor() {
        this.questions = []; // An array of Question objects
        this.currentQuestionIndex = 0; //  The index of the current question in the questions array.
        this.score = 0; // The user's current score
    }

    // Method that takes a Question object as a parameter and adds it to the questions array.
    addQuestion(question) {
        this.questions.push(question); // Adds the question object to the questions array
    }


    // Method that advances to the next question in the quiz by incrementing the currentQuestionIndex.
    nextQuestion() {
        this.currentQuestionIndex++; // Increments the currentQuestionIndex
    }


    // Method to submit a user's answer and update the score
    submitAnswer(userAnswer) {
    // Get the current question from the questions array
    const currentQuestion = this.questions[this.currentQuestionIndex];
    
    // Check if the user's answer is correct
    if (currentQuestion.checkAnswer(userAnswer)) {
        // Increment the score if the answer is correct
        this.score++;
    }

    // Move to the next question
    this.nextQuestion();
    }

}

//Creates a new Quiz object
const quiz = new Quiz(); 

// Adding questions to the quiz
quiz.addQuestion(new Question("What is the largest  bird in the world?", ["Eagle", "Owl", "Ostrich", "Parrot"], "Ostrich"));
quiz.addQuestion(new Question("What is the capital city of Uganda", ["Nairobi", "Kampala", "Dodoma", "Cape Town"], "Kampala"));

// Submitting answers to the quiz
quiz.submitAnswer("Eagle"); // wrong  
quiz.submitAnswer("Kampala"); // Correct


// Outputs the user's score to the console
console.log("Score: " + quiz.score); 