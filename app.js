function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function getHumanChoice() {
  let userChoice = prompt('Pick rock, paper, or scissors');

  let choices = ['rock', 'paper', 'scissors'];
  while (userChoice === null || !choices.includes(userChoice.toLowerCase())) {
    userChoice = prompt(
      'Invalid choice. Please enter rock, paper, or scissors:',
    );
  }

  return userChoice.toLowerCase();
}

function playGame() {
  let totalRounds = 0;
  let humanScore = 0;
  let computerScore = 0;

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
  while (totalRounds < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    totalRounds++;
  }

  if (humanScore > computerScore) {
    return 'Human wins the game!';
  } else {
    return `Computer wins the game`;
  }
}

console.log(playGame());
