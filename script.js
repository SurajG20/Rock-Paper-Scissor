let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let res = '';

const options = ['rock', 'paper', 'scissors'];

const container = document.querySelector(".container");
const rockbtn = document.getElementsByClassName("rock-button");
const paperbtn = document.getElementsByClassName("paper-button");
const scissorsbtn = document.getElementsByClassName("scissors-button");
const results = document.createElement('p');
const csdisplay = document.getElementsByClassName("computer-score");
const psdisplay = document.getElementsByClassName("player-score");


function chooseRock() {
    playerChoice = "rock";
    return playerChoice;
}

function choosePaper() {
    playerChoice = "paper";
    return playerChoice;
}

function chooseScissors() {
    playerChoice = "scissors";
    return playerChoice;
}

function declareWinner() {
    if (playerScore > computerScore)
        results.textContent = "Great, You won the game! 🥳";
    else if (computerScore > playerScore)
        results.textContent = "GAME OVER. You lost 🥲";
    else
        results.textContent = "STALEMATE! It was a tie 😐!";
}
function addPlayAgain() {
    const playAgain = document.createElement('button');
    playAgain.classList.add("playAgain");
    playAgain.textContent = "Play Again";
    playAgain.addEventListener("click", resetGame);
    container.appendChild(playAgain);
}
function resetGame() {
    results.textContent = "";
    const playAgain = document.querySelector(".playAgain");
    container.removeChild(playAgain);
    rounds = 0;
    csdisplay[0].textContent = `Computer Score: ${computerScore}`;
    psdisplay[0].textContent = `Player Score: ${playerScore}`;
}


function playRound() {
    computerChoice = options[Math.floor(Math.random() * 3)];

    playerChoice = playerChoice.toLowerCase();

        if (playerChoice === "rock" && computerChoice === "paper") {
            res = `You lost! ${computerChoice} beats ${playerChoice}!`;
            computerScore += 1;
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            res = `You lost! ${computerChoice} beats ${playerChoice}!`;
            computerScore += 1;
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            res = `You lost! ${computerChoice} beats ${playerChoice}!`;
            computerScore += 1;
        } else if (playerChoice === computerChoice) {
            res = `It's a draw! ${computerChoice} can't beat ${playerChoice}!`;
        } else {
            res = `You won! ${playerChoice} beats ${computerChoice}`;
            playerScore += 1;
        }
    results.textContent = `Result: ${res}`;
    results.classList.add("result");
    container.appendChild(results);
    rounds++;
    csdisplay[0].textContent = `Computer Score: ${computerScore}`;
    psdisplay[0].textContent = `Player Score: ${playerScore}`;

    if (rounds === 5) {
        declareWinner();
        playerScore = 0;
        computerScore = 0;
        addPlayAgain();
    }

    // resets game if player continues after 5 rounds
    if (rounds > 5) {
        resetGame();
    }

}    rockbtn[0].addEventListener("click", () => {
    chooseRock();
    playRound();
});

paperbtn[0].addEventListener("click", () => {
    choosePaper();
    playRound();
});

scissorsbtn[0].addEventListener("click", () => {
    chooseScissors();
    playRound();
});
