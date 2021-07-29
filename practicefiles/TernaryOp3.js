let playerOne = "rock";
let computer = "rock";

let result = playerOne === computer ? "Tie!" : playerOne === "rock" && computer === "paper" ? "Player wins!" : playerOne === "paper" && computer === "scissors" ? "Computer wins!" : playerOne === "paper" && computer === "scissors" ? "Computer wins!" : playerOne === "scissors" && computer === "rock" ? "Computer wins!" : "Player wins!"

console.log(result)

