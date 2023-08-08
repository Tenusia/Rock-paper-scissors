const choiceArray = ["Rock", "Paper", "Scissors"];

const Rock = document.querySelector('#Rock');
const Paper = document.querySelector('#Paper');
const Scissors = document.querySelector('#Scissors');
const msg = document.querySelector('#message');
const container = document.querySelector('#container');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const Reset = document.querySelector('#Reset');

const player = document.createElement('div');
player.classList.add('player');
container.appendChild(player);

const computer = document.createElement('div');
computer.classList.add('computer');
container.appendChild(computer);

const resultText = document.createElement('div');
resultText.classList.add('resultText');
container.appendChild(resultText);

const finalResultText = document.createElement('div');
finalResultText.classList.add('finalResultText');
results.appendChild(finalResultText);

const playerScore = document.createElement('div');
playerScore.classList.add('player');
container.appendChild(playerScore);

const computerScore = document.createElement('div');
computerScore.classList.add('computer');
container.appendChild(computerScore);

let choice = null;
let computerSelection = null;
let playerPoints = 0;
let computerPoints = 0;
let pointLimit = 5;

Rock.addEventListener('click', function (e) {
    choice = e.target.innerText; 
    let results = playRound(choice);
    showResults(results);
    finalWinner(playerPoints, computerPoints);
});

Paper.addEventListener('click', function (e) {
    choice = e.target.innerText; 
    let results = playRound(choice);
    showResults(results);
    finalWinner(playerPoints, computerPoints);
});

Scissors.addEventListener('click', function (e) {
    choice = e.target.innerText; 
    let results = playRound(choice);
    showResults(results);
    finalWinner(playerPoints, computerPoints);
});

Reset.addEventListener('click', function (e) {
    location.reload();
});

function getComputerChoice() {
    let compChoiceRandomNR = Math.floor(Math.random() * 3);
    return compChoiceRandomNR;
}

function playRound(choice) {
    let computerSelection = getComputerChoice();
    let playerSelection = choiceArray.indexOf(choice);
    let computerWord = choiceArray[computerSelection];
    let playerWord = choice;

    //player.textContent = 'You chose: ' + choice + ' , Computer chose: ' +computerWord;
    player.textContent = 'You chose: ' + choice;
    computer.textContent = 'Computer chose: ' + computerWord;

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
    
function showResults(results) {
    if (results === 1) {
        resultText.textContent = 'No winner. Its a tie!';
    }
    else if (results === 2) {
        resultText.textContent = 'You win!';
        return playerPoints++;
    }
    else if (results === 3) {
        resultText.textContent = 'You lose!';
        return computerPoints++;
    }
}

function finalWinner(playerPoints, computerPoints) {
    playerScore.textContent = 'Your points: ' + playerPoints;
    computerScore.textContent = 'Computer points: ' + computerPoints;
    
    if(playerPoints >= pointLimit || computerPoints >= pointLimit) {
        if (playerPoints === computerPoints) {
            finalResultText.textContent = '----- Its a tie! -----';
            Reset.classList.toggle('reveal');
        }
        else if (playerPoints > computerPoints) {
            finalResultText.textContent = '----- Congratulations! You won! -----';
            Reset.classList.toggle('reveal');
        }
        else if (playerPoints < computerPoints) {
            finalResultText.textContent = '----- BUMMER! You lost! -----';
            Reset.classList.toggle('reveal');
        }
    }
}
