function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function getHumanChoice() {
  let userChoice = prompt('Rock, Paper or Scissor?');

  let choices = ['rock', 'paper', 'scissors'];
  if (!choices.includes(userChoice.toLowerCase())) {
    return 'Pick either rock, paper, or scissors';
  }

  return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === computerChoice) {
    return `It's a tie!`;
  }

  if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
    addHumanPoint();
    return `Player wins! ${humanChoice} beats ${computerChoice}`;
  } else if (
    humanChoice.toLowerCase() === 'paper' &&
    computerChoice === 'rock'
  ) {
    addHumanPoint();
    return `Player wins! ${humanChoice} beats ${computerChoice}`;
  } else if (
    humanChoice.toLowerCase() === 'scissors' &&
    computerChoice === 'paper'
  ) {
    addHumanPoint();
    return `Player wins! ${humanChoice} beats ${computerChoice}`;
  } else {
    addComputerPoint();
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function addHumanPoint() {
  return humanScore++;
}

function addComputerPoint() {
  return computerScore++;
}

// Global player scores
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
