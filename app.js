function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let pick = Math.floor(Math.random() * 3);
  return choices[pick];
}

function getHumanChoice(userChoice) {
  let choices = ['rock', 'paper', 'scissors'];
  if (!choices.includes(userChoice.toLowerCase())) {
    return 'Pick either rock, paper, or scissors';
  }

  return userChoice.toLowerCase();
}

console.log(getHumanChoice('IGLO'));
console.log(getHumanChoice('rock'));
console.log(getHumanChoice('PAPER'));
console.log(getHumanChoice('scissors'));
