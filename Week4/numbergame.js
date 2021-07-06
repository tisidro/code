let userNumber = 10; //Prompt user to pick number between 1-20

let counter = 0;
let maxTries = 5;

//Generate random number and store as variable to later compare user's guess to random number 

let randomNumber = Math.floor(Math.random() * userNumber) + 1;

//prompt user and ask to guess # between 1 and x

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
    console.log("Let's play a guessing game where you try to guess a number the computer has chosen.")

    let guessNumber = await ask("Please pick a random number between 1 and " + userNumber + ":");

    console.log('You entered: ' + guessNumber);


    //while loop: IF number user guessed is not = random number computer chose, run loop that

    while (guessNumber != randomNumber) {

        let guessNumber;

        // counter += 1;//every time loop is run, add +1 to counter to keep track of loops

        console.log('You entered: ' + guessNumber + "test");

        //conditional giving user a set amount of attempts with counter variable

        //if (counter > maxTries) {

        //  console.log("Sorry, you have no more attempts!")

        //break;
    }
    //conditional to check if user picked right number

    if (guessNumber === randomNumber) {

        console.log("Congrats you guessed the right number! You guessed: " + guessNumber)
        console.log("it took you " + counter + " attempts!")

    }
}
}
