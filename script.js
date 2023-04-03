function getComputerChoice(){
    value = Math.floor(Math.random() * 3);
    if (value === 0) {
        return "Rock"
    } else if (value === 1){
        return "Paper"
    } else {return "Scissor"}
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    let log = ""

    if (playerSelection === "Rock"){
        if (computerSelection === "Scissor"){
            log = "You win, Rock beats Scissor"
        }else if (computerSelection === "Paper"){
            log = "You lose, Paper beats Rock"
        } else{
            log = "It's tie "
        }

    } else if (playerSelection === "Paper"){
        if (computerSelection === "Scissor"){
            log = "You lose, Scissor beats Paper"
        }else if (computerSelection === "Rock"){
            log = "You Win, Paper beats Rock"
        } else{
            log = "It's tie"
        }

    }
    else if (playerSelection === "Scissor"){
        if (computerSelection === "Rock"){
            log = "You lose, Rock beats Scissor"
        }else if (computerSelection === "Paper"){
            log = "You Win, Scissor beats Paper"
        } else{
            log = "It's tie"
        }
}
return log
}
   
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));