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
    console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")

    let maxNumber = await ask("Let's start by picking a maximum number. What is your Max number?\n");
    console.log('You entered: ' + maxNumber);

    let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
    console.log('You entered: ' + secretNumber);

    let userAnswer;
    let min = 1;
    let max = maxNumber; //= 100;//values by default

    function getRandomInt(min, max) {

        console.log("min is: " + min, "max is: " + max)

        return Math.floor((max - min + 1) / 2) + min; //computer guess

    }

    //YES CONDITIONAL we will set up a scenario here where user answers Yes to "is your number___" and it results in a victory message

    while (userAnswer !== "yes" && userAnswer !== "y") {

        let guess = getRandomInt(min, max)//call getRandomInt function with bare min and max values, storing return function value into variable

        userAnswer = await ask("Is your number " + guess + "?");

        if (userAnswer === "yes" || userAnswer === "y") {//conditional here where user answers yes or y

            console.log("yay I got it right!");//console log victory message

            break;
        }

        //NO CONDITIONAL: now you need a conditional here where user answers no or n to the question "is your number ___?". In this case, the user is prompted to type in l if their number is lower than the computer's guess and h if their number is higher than the computer's guess  

        else if (userAnswer === "no" || userAnswer === "n") {

            let userHiLow = await ask("Is your number lower (type the letter l) or higher (type the letter h) than" + guess + "?");

            if (userHiLow === "l") {

                //code here for computer to guess a lower number. We want the function getRandomInt to generate a lower number as a max. Need to change range to be -1 of computer's guess

                max = guess - 1;//changing the max due to it needing to be lower

            }

            else if (userHiLow === "h") {
                //code here for computer to guess a higher number (min should be higher). We want the function getRandomInt to generate a higher number. Need to change range to be +1 of computer's guess

                min = guess + 1; //so that the max will be higher than the computer's guess

                //min = guess to be higher than 50

            }

            //

        }
    }
}
