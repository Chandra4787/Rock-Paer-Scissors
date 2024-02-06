let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreValue = document.querySelector("#user-score");
const compScoreValue = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        // console.log("you win");
        userScore++;
        userScoreValue.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("you lose");
        compScore++;
        compScoreValue.innerText = compScore;
        msg.innerText = `You lose! Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //computer have option like --->> paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //computer have option like --->> rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //computer have option like --->> rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        // console.log("choice was clicked", userChoice);
    })
})