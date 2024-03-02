const playerSelection = prompt("Please enter value").toLowerCase();
const computerSelection = getComputerChoice(); 

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let result = choice[Math.floor(Math.random() * 3)];
    console.log("Computer chooses " + result);
    return result;
  }