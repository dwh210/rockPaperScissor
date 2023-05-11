function getComputerChoice(){
    randomComputerNumber = Math.floor(Math.random() * 3);
    let computerChoice = "rock";
    switch (randomComputerNumber){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("What is your choice?", "Paper").toLowerCase();
    return playerChoice;
}

function playRound(){
    let playerChoice = getPlayerChoice();
    // console.log(playerChoice);
    let computerChoice = getComputerChoice();
    // console.log(computerChoice);
    if (playerChoice == computerChoice){
        console.log("It was a draw! You played: " + playerChoice + ". The computer played: " + computerChoice);
    }
    else if (playerChoice == "rock" && computerChoice == "paper"){
        console.log("You lost! You played: " + playerChoice + ". The computer played: " + computerChoice);
        return 0;
    }
    else if (playerChoice == "rock" && computerChoice == "scissors"){
         console.log("You won! You played: " + playerChoice + ". The computer played: " + computerChoice);
         return 1;
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        console.log("You won! You played: " + playerChoice + ". The computer played: " + computerChoice);
        return 1;
    }
    else if (playerChoice == "paper" && computerChoice == "scissors"){
        console.log("You lost! You played: " + playerChoice + ". The computer played: " + computerChoice);
        return 0;
    }
    else if (playerChoice == "scissors" && computerChoice == "rock"){
        console.log("You lost! You played: " + playerChoice + ". The computer played: " + computerChoice);
        return 0;
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        return "You won! You played: " + playerChoice + ". The computer played: " + computerChoice;
    }
    else{
        console.log("You didn't enter a valid move");
    }
    
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    for (i=0; i <5; i++){
        result = playRound();
        if (result == 0) {
            computerScore++;
        }
        else if (result == 1) {
            playerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("You won! Your score: " + playerScore + ". Computer score: " + computerScore);
    }
    else if (playerScore < computerScore){
        console.log("You lost! Your score: " + playerScore + ". Computer score: " + computerScore);
    }
    else{
        console.log("It was a draw! Your score: " + playerScore + ". Computer score: " + computerScore);
    }
}

game();
