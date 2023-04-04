
// Function to get choice for Computer
function getComputerChoice() {
    value = Math.floor(Math.random() * 3);
    if (value === 0) {
        return "Rock"
    } else if (value === 1) {
        return "Paper"
    } else { return "Scissor" }
}


// Function to make the input Capitalize
function capitalize(string) {
    return (
        string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
}

// Function to do valid comparision
function playRound(playerSelection, computerSelection) {
    let log = ""

    if (playerSelection === "Rock") {
        if (computerSelection === "Scissor") {
            log = "You Win, Rock beats Scissor"
        } else if (computerSelection === "Paper") {
            log = "You Lose, Paper beats Rock"
        } else {
            log = "It's tie "
        }

    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissor") {
            log = "You Lose, Scissor beats Paper"
        } else if (computerSelection === "Rock") {
            log = "You Win, Paper beats Rock"
        } else {
            log = "It's tie"
        }

    }
    else if (playerSelection === "Scissor") {
        if (computerSelection === "Rock") {
            log = "You Lose, Rock beats Scissor"
        } else if (computerSelection === "Paper") {
            log = "You Win, Scissor beats Paper"
        } else {
            log = "It's tie"
        }
    }
    return log;
}

var playerScore = 0;
var computerScore = 0;

// Function to get the score
function game(playerSelect) {
        let playerSelection = capitalize(playerSelect);
        let computerSelection = getComputerChoice();

        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.search('You Win,') > -1) {
            playerScore++;
        } else if (roundResult.search('You Lose,') > -1) {
            computerScore++;
        }
}

// Function which loop 5 times 
function FinalGame(){
    for (let i= 1; i <= 5; i++){
        playerSelect = prompt("Type: Rock, Paper or Scissor")
        game(playerSelect)
    }
    
    if (playerScore > computerScore) {
        return ("Game Over. You Win!");
    } else {
        return ("Game Over. You Lose");
    }    
}

console.log(FinalGame())

