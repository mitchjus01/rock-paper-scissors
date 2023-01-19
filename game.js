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

