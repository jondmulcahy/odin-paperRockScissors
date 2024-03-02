const playerSelection = prompt("Please enter value").toLowerCase();
const computerSelection = getComputerChoice(); 

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let result = choice[Math.floor(Math.random() * 3)];
    console.log("Computer chooses " + result);
    return result;
  }

  function playRound() {
    if (playerSelection == computerSelection) {
      console.log("It is a tie!");
      return;
    };
    if (playerSelection == "rock" && computerSelection == "paper") {
      console.log("Computer wins");
      return;
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
      console.log("Computer wins");
      return;
    };
    if (playerSelection == "scissors" && computerSelection == "rock") {
      console.log("Computer wins");
      return;
    }
    console.log("You Win!");
  }