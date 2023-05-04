let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('#rpc');
const results = document.querySelector('.results');
const restart = document.querySelector('#restart');
const score = document.querySelector('.score');
gameStart();
scoreUpdate();

function computerPlay() {
    let choice = Math.floor(Math.random() * (3) + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function rpc(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
        ++computerScore;
        scoreUpdate();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
        ++computerScore;
        scoreUpdate();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
        ++computerScore;
        scoreUpdate();
    } else if (playerSelection === computerSelection) {
        results.textContent = `It's a draw! ${computerSelection} can't beat ${playerSelection}!`;
    } else {
        results.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        ++playerScore;
        scoreUpdate();
    }
}

function gameStart() {
    playerScore = 0;
    computerScore = 0;
    choices.forEach(choice => {
        choice.disabled = false;
    });
    restart.style.visibility = 'hidden';
    restart.disabled = true;
    results.textContent = "";
    score.textContent = `${playerScore} - ${computerScore}`;
}

function gameEnd() {
    choices.forEach(choice => {
        choice.disabled = true;
    });
    restart.style.visibility = 'visible';
    restart.disabled = false;
}

function scoreUpdate() {
    if (playerScore == 5) {
        score.textContent = "You've won!!";
        gameEnd();
    } else if (computerScore == 5) {
        score.textContent = "You've Lost!!"
        gameEnd();
    } else {
        score.textContent = `${playerScore} - ${computerScore}`;
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    rpc(playerSelection, computerSelection)
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playRound(choice.textContent);
    })
});

restart.addEventListener('click', gameStart);