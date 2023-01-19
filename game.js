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

function game(numberOfRounds) {
  let numberOfWins = 0;
  
  for (let i = 0; i < numberOfRounds; i++) {
    let a = prompt("Enter your selection: Rock, Paper, or Scissors");
    let b = getComputerChoice();
    let result = playRound(a, b);

    console.log(result);

    let resultPart = result.slice(4,5);
    if (resultPart === "W") {
      numberOfWins++;
    }
  }

  if (numberOfWins < 3 && numberOfWins != 1) {
    console.log("You Lose The Game! You only had " + numberOfWins + " wins.");
  } else if (numberOfWins == 1) {
    console.log("You Lose The Game! You only had " + numberOfWins + " win.");
  }  else {
    console.log("You Win The Game! You had " + numberOfWins + " wins.");
  }
}

game(5);