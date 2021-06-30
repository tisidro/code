/*Now it's your turn to write a program from scratch.
Write a program named name.js that asks two things:
Your first name
Your last name
Then it says hello to the user by their full name.

Run the program by typing node name.js on the command line.
*/

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

printFullName()

async function printFullName() {
    let firstName = await ask("what is your first name?");

    let lastName = await ask("what is your last name?");

    console.log("your full name is " + firstName + " " + lastName)

    process.exit()
}