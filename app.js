function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function getHumanChoice(userChoice) {
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
    humanScore++;
    return `Player wins! ${humanChoice} beats ${computerChoice}`;
  } else if (
    humanChoice.toLowerCase() === 'paper' &&
    computerChoice === 'rock'
  ) {
    humanScore++;
    return `Player wins! ${humanChoice} beats ${computerChoice}`;
  } else if (
    humanChoice.toLowerCase() === 'scissors' &&
    computerChoice === 'paper'
  ) {
    humanScore++;
    return `Player wins! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// Global player scores
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice('scissors');
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

