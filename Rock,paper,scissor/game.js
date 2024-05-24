//making a rock , paper , scissor game
let playGame = confirm("Let's play the game ");
if (playGame) {
  //play
  let playerChoice = prompt("rock, paper or scissor");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLocaleLowerCase();
    if (playerOne == "rock" || playerOne == "paper" || playerOne == "scissor") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice == 1
          ? "rock"
          : computerChoice == 2
          ? "paper"
          : "scissor";

      let result =
        playerOne === computer
          ? "tie game"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne :${playerOne} \n computer: ${computer} \n Computer wins!`
          : playerOne === "paper" && computer === "scissor"
          ? `playerOne: ${playerOne} \n computer:${computer} \n Computer  wins!`
          : playerOne === "scissor" && computer === "rock"
          ? `playerOne: ${playerOne} \n compter: ${computer} \n Computer wins!`
          : `playerOne: ${playerOne} \n computer: ${computer} \n playerOne wins!`;
      alert(result);
      let playAgain = confirm("play again ?");
      playAgain ? location.reload() : alert("thanks for playing");
    } else {
      alert("you didn't entered rock, paper or scissor");
    }
  } else {
    alert("I guess u change your mind");
  }
} else {
  alert("next time ");
}
