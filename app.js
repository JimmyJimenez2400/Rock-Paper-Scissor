function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissor'];
  let pick = Math.floor(Math.random() * 3);
  return choices[pick];
}

console.log(getComputerChoice());
