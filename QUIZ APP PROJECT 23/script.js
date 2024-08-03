const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which planet is the largest in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Uranus", correct: false },
        ]
    },
    {
        question: "Who painted the famous painting 'The Starry Night'?",
        answers: [
            { text: "Leonardo da Vinci", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Hg", correct: false },
            { text: "Pb", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    scoreElement.innerHTML = `Score: ${score}`;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.onclick = () => checkAnswer(index);
        answerButton.appendChild(button);
    });
    nextButton.style.display = "none";
}

function checkAnswer(index) {
    let currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.answers[index].correct;

    if (correctAnswer) {
        score++;
        scoreElement.innerHTML = `Score: ${score}`;
    }

    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
    nextButton.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            endQuiz();
        } else {
            showQuestion();
        }
    };
}

function endQuiz() {
    questionElement.innerHTML = "Quiz Finished!";
    answerButton.innerHTML = "";
    nextButton.innerHTML = "Restart";
    nextButton.onclick = startQuiz;
}

function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
    nextButton.style.display = "none";
    Array.from(answerButton.children).forEach(button => {
        button.disabled = false;
    });
}

startQuiz();