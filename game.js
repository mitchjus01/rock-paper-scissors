function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3) + 1;
  
  if (choiceNum === 1) {
    return 'Rock';
  } else if (choiceNum === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  let a = playerSelection.toUpperCase();
  let b = computerSelection.toUpperCase();

  if (a === b) {
    return "It's a tie!";
  } else if (a == 'ROCK' && b == 'PAPER') {
    return "You Lose! Paper beats Rock";
  } else if (a == 'ROCK' && b == 'SCISSORS') {
    return "You Win! Rock beats Scissors";
  } else if (a == 'PAPER' && b == 'ROCK') {
    return "You Win! Paper beats Rock";
  } else if (a == 'PAPER' && b == 'SCISSORS') {
    return "You Lose! Scissors beats Paper";
  } else if (a == 'SCISSORS' && b == 'ROCK') {
    return "You Lose! Rock beats Scissors";
  } else {
    return "You Win! Scissors beats Paper";
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));