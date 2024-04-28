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



// QUE2
// // Question class
// class Question {
    
//     constructor(text, options, correctAnswer) {
//         this.text = text; 
//         this.options = options; 
//         this.correctAnswer = correctAnswer; 
//     }

//     checkAnswer(userAnswer) {

//         if(userAnswer != this.correctAnswer){
//             return false;
//         }

//         return true;
//     }

// }


// // Quiz class
// class Quiz {
    
//     constructor() {
//         this.questions = []; 
//         this.currentQuestionIndex = 0; 
//         this.score = 0;  
//     }


//     addQuestion(question) {
//         this.questions.push(question); 
//     }


//     nextQuestion() {
//         this.currentQuestionIndex++; 
//     }



//     submitAnswer(userAnswer) {
//     const currentQuestion = this.questions[this.currentQuestionIndex];
    
//     if (currentQuestion.checkAnswer(userAnswer)) {
//         this.score++;
//     }

//     this.nextQuestion();
//     }

// }

// const quiz = new Quiz(); 

// quiz.addQuestion(new Question("What is the largest  bird in the world?", ["Eagle", "Owl", "Ostrich", "Parrot"], "Ostrich"));
// quiz.addQuestion(new Question("What is the capital city of Uganda", ["Nairobi", "Kampala", "Dodoma", "Cape Town"], "Kampala"));


// quiz.submitAnswer("Eagle");   
// quiz.submitAnswer("Kampala"); 
// console.log("Score: " + quiz.score); 




class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}
const sampleQuestion = new Question(
    "What is the capital city of Nigeria",
    ["Cape town", "Dodoma", "Abuja", "Lagos"],
);
console.log(sampleQuestion.checkAnswer("Abuja"));
console.log(sampleQuestion.checkAnswer("Abuja"));
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}
const que = new Quiz();
const question1 = new Question("What is 4*5", ["9", "8", "20"], "17");
const question2 = new Question("which is the longest river in the world", ["Amazon", "Congo river", "Nile"], "Nile");
que.addQuestion(question1);
que.addQuestion(question2);
que.submitAnswer("9");
que.submitAnswer("Nile");
console.log("Score:", que.score);