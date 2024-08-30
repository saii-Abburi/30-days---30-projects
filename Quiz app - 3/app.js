const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Wordsworth", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "George Orwell", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent by land area?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
            { text: "Antarctica", correct: false }
        ]
    },
    {
        question: "Who was the first person to walk on the moon?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Yuri Gagarin", correct: false },
            { text: "John Glenn", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "In which year did India gain independence?",
        answers: [
            { text: "1945", correct: false },
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1952", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Great White Shark", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which element is represented by the symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Iron", correct: false }
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-Button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    
    resetState();


    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex+1;
    questionElement.innerHTML = questionNO+ ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct  = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        

    });
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add ("correct") ;
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}


function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();