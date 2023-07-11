const choiceArray = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;

game();

function game() {
    const loopTime = prompt("How many rounds do you want to play?", 5);
    
    console.log("-------======== ROCK PAPER SISSORS ========-------");
    for (let i = 0; i < loopTime; i++) { 
        console.log("===ROUND " + (i+1) + "===")
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerInput();
        let computerWord = choiceArray[computerSelection];
        let playerWord = choiceArray[playerSelection];

        let results = playRound(playerSelection, computerSelection);
        showResults(results, playerWord, computerWord);
        console.log("Player points: " + playerPoints + ", Computer points: " + computerPoints);
    }

    showFinalWinner(playerPoints,computerPoints);
}

function getComputerChoice() {
    let compChoiceRandomNR = Math.floor(Math.random() * 3);
    return compChoiceRandomNR;
}

function getPlayerInput() {
    let playerInput = prompt("Please enter Rock, Paper or Scissors", "");
    
    if(playerInput == "") {
        console.log("Please enter only Rock, Paper or Scissors. Rock is chosen by default.");
        return 0;
    }
    else {
        let convertedInput = playerInput[0].toUpperCase() + playerInput.slice(1);
        
        if (choiceArray.includes(convertedInput)) {
            let playerIndex = choiceArray.indexOf(convertedInput);
            return playerIndex;
        }
        else {
            console.log("Please enter only Rock, Paper or Scissors. Rock is chosen by default.");
            return 0;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 1;   
    }
    else if(playerSelection > computerSelection) {
        if(computerSelection === 0 && playerSelection === 2) {
            return 3;
        }
        else {
            return 2;     
        }
    }
    else if(computerSelection > playerSelection) {
        if(playerSelection === 0 && computerSelection === 2) {
            return 2;
        }
        else {
            return 3;
        }
    }
}
    
function showResults(results, playerWord, computerWord) {
    if (results === 1) {
        console.log("No winner. Its a tie!");
    }
    else if (results === 2) {
        console.log("You win. " + playerWord + " beats " + computerWord);
        return playerPoints++;
    }
    else if (results === 3) {
        console.log("You lose. " + computerWord + " beats " + playerWord);
        return computerPoints++;
    }
}

function showFinalWinner(playerPoints, computerPoints) {
    if (playerPoints === computerPoints) {
        console.log("----- Its a tie! -----");
    }
    else if (playerPoints > computerPoints) {
        console.log("----- Congratulations! You win! -----");
    }
    else if (playerPoints < computerPoints) {
        console.log("----- BUMMER! You lose! -----");
    }
}
