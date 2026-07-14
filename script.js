// ROCK PAPER SCISSORS GAME BUILT WITH JAVASCRIPT BY :TREVOR JOHNPAUL #TJ

let computerScore = 0;
let userScore = 0;
const totalRounds = 5;

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
    console.log("Score - You:", userScore, "Computer:", computerScore);
}

function playGame() {
    for (let round = 1; round <= totalRounds; round++) {
        const userChoice = getUserChoice();
        if (!userChoice) {
            console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
            round--;
            continue;
        }

        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);

        console.log(`Round ${round}`);
        console.log("Your Choice:", userChoice);
        console.log("Computer's Choice:", computerChoice);
        console.log("Result:", result);

        if (result === "You Win!") {
            userScore += 1;
        } else if (result === "You Lose!") {
            computerScore += 1;
        }

        displayScore();
        console.log("---------------------------");
    }

    if (userScore > computerScore) {
        console.log("Final Winner: You win the best of 5 series!");
    } else if (computerScore > userScore) {
        console.log("Final Winner: Computer wins the best of 5 series.");
    } else {
        console.log("Final Result: It's a tie after 5 rounds.");
    }
}

playGame();

