//given numeric month return the quarter of the year it is in
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

start();

async function start() {
    console.log("Let's play rock-paper-scissors! You can go first.")

    let userChoice = await ask("Please enter your choice of rock, paper, or scissors now.");
    console.log('You entered: ' + userChoice);

    let x = userChoice;

    let choices = ["rock", "paper", "scissors"];

    let computerChoice = function shuffle(choices) {
        array.sort(function () {
            return Math.random() - .5;
        });
    };

    let result = playerOne === computer ? "Tie!" : playerOne === "rock" && computer === "paper" ? "Player wins!" : playerOne === "paper" && computer === "scissors" ? "Computer wins!" : playerOne === "paper" && computer === "scissors" ? "Computer wins!" : playerOne === "scissors" && computer === "rock" ? "Computer wins!" : "Player wins!"

    console.log(result)

    const whichQuarter = x => {
        //object lookup  month:quarter key value pairs
        const quarters = { 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4 }

        return quarters[x]
    }

    console.log(`That month is in Quarter ${whichQuarter(x)}`);

    let tryAgain = await ask("Would you like to enter a new month?");
    console.log('You entered: ' + tryAgain);

    if (tryAgain === "yes" || tryAgain === "y") {
        console.log("Awesome, let's go!");

        start();
    }


    else if (tryAgain === "no" || tryAgain === "n") {

        console.log("Goodbye!");

        process.exit();
    }
}