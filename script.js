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
const results = document.querySelector('.results');
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
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            res = `You lost! ${computerChoice} beats ${playerChoice}!`;
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            res = `You lost! ${computerChoice} beats ${playerChoice}!`;
        } else if (playerChoice === computerChoice) {
            res = `It's a draw! ${computerChoice} can't beat ${playerChoice}!`;
        } else {
            res = `You won! ${playerChoice} beats ${computerChoice}`;
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



// let playerScore = 0;
// let computerScore = 0;

// const choices = document.querySelectorAll('#rpc');
// const results = document.querySelector('.results');
// const restart = document.querySelector('#restart');
// const score = document.querySelector('.score');
// gameStart();
// scoreUpdate();

// function computerPlay() {
//     let choice = Math.floor(Math.random() * (3) + 1);
//     if (choice === 1) {
//         return "rock";
//     } else if (choice === 2) {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }
// function rpc(playerChoice, computerChoice) {
//     playerChoice = playerChoice.toLowerCase();
//     if (playerChoice === "rock" && computerChoice === "paper") {
//         results.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
//         ++computerScore;
//         scoreUpdate();
//     } else if (playerChoice === "paper" && computerChoice === "scissors") {
//         results.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
//         ++computerScore;
//         scoreUpdate();
//     } else if (playerChoice === "scissors" && computerChoice === "rock") {
//         results.textContent = `You lost! ${computerChoice} beats ${playerChoice}!`;
//         ++computerScore;
//         scoreUpdate();
//     } else if (playerChoice === computerChoice) {
//         results.textContent = `It's a draw! ${computerChoice} can't beat ${playerChoice}!`;
//     } else {
//         results.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
//         ++playerScore;
//         scoreUpdate();
//     }
// }

// function gameStart() {
//     playerScore = 0;
//     computerScore = 0;
//     choices.forEach(choice => {
//         choice.disabled = false;
//     });
//     restart.style.visibility = 'hidden';
//     restart.disabled = true;
//     results.textContent = "";
//     score.textContent = `${playerScore} - ${computerScore}`;
// }

// function gameEnd() {
//     choices.forEach(choice => {
//         choice.disabled = true;
//     });
//     restart.style.visibility = 'visible';
//     restart.disabled = false;
// }

// function scoreUpdate() {
//     if (playerScore == 5) {
//         score.textContent = "You've won!!";
//         gameEnd();
//     } else if (computerScore == 5) {
//         score.textContent = "You've Lost!!"
//         gameEnd();
//     } else {
//         score.textContent = `${playerScore} - ${computerScore}`;
//     }
// }

// function playRound(playerChoice) {
//     let computerChoice = computerPlay();
//     rpc(playerChoice, computerChoice)
// }

// choices.forEach(choice => {
//     choice.addEventListener('click', () => {
//         playRound(choice.textContent);
//     })
// });

// restart.addEventListener('click', gameStart);