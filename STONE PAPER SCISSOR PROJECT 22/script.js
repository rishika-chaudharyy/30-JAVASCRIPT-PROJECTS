let userScore = 0;
let compScore = 0
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin) => {
    if (userWin) {
        message.innerText = "You win!"
        userScore++;
        user.innerText = userScore;
    } else {
        message.innerText = "You loose!";
        compScore++;
        comp.innerText = compScore;
    }
}


const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();
    if (userChoice === computerChoice) {
        message.innerText = "Draw!"
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

var icon = document.getElementById("dark");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sun.png";
    }
}