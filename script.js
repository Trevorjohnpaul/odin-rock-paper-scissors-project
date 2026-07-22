// ROCK PAPER SCISSORS GAME BUILT WITH JAVASCRIPT BY :TREVOR JOHNPAUL #TJ

let computerScore = 0;
let userScore = 0;
const totalRounds = 5;
const scoreDisplay = document.getElementById("score-display");
const resultDisplay = document.getElementById("result-display");
const gameMessage = document.getElementById("game-message");

function getComputerChoice() {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

function getUserChoice() {
    const userChoice = prompt("Enter Your Choice: rock, paper, scissors:");
    if (!userChoice) {
        return "";
    }

    const normalizedChoice = userChoice.trim().toLowerCase();
    if (normalizedChoice !== "rock" && normalizedChoice !== "paper" && normalizedChoice !== "scissors") {
        return "";
    }

    return normalizedChoice.charAt(0).toUpperCase() + normalizedChoice.slice(1);
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You Win!";
    }

    return "You Lose!";
}

function displayScore() {
    scoreDisplay.textContent = `Score - You: ${userScore} | Computer: ${computerScore}`;
}

function displayResult(playerSelection, computerSelection, result) {
    resultDisplay.textContent = `Your Choice: ${playerSelection} | Computer's Choice: ${computerSelection} | Result: ${result}`;
}

function announceWinner() {
    if (userScore >= 5) {
        gameMessage.textContent = "Winner: You reached 5 points!";
    } else if (computerScore >= 5) {
        gameMessage.textContent = "Winner: Computer reached 5 points!";
    }
}

function playGame() {
    const buttons = document.querySelectorAll("button[data-selection]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (userScore >= 5 || computerScore >= 5) {
                return;
            }

            const playerSelection = button.getAttribute("data-selection");
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            if (result === "You Win!") {
                userScore += 1;
            } else if (result === "You Lose!") {
                computerScore += 1;
            }

            displayScore();
            displayResult(playerSelection, computerSelection, result);
            announceWinner();

            if (userScore >= 5 || computerScore >= 5) {
                buttons.forEach((disabledButton) => {
                    disabledButton.disabled = true;
                });
            }
        });
    });
}

playGame();

