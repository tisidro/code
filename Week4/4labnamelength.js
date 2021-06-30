/*Change name.js so it also prints the number of characters in the user's name.
For instance:

What is your first name? Grace What is your last name? Hopper Hello, Grace Hopper! Your name is 11 characters long.*/

/*
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

start();

async function start() {
    let firstName = await ask("what is your first name?");

    let lastName = await ask("what is your last name?");

    console.log("your full name is " + firstName + " " + lastName);


    console.log("your name is: " + `${firstName.length + lastName.length}` + "characters long");

    process.exit();
}
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

    console.log("your full name is " + firstName + " " + lastName);

    let fullName = firstName + lastName;

    console.log(fullName.length);

    console.log((firstName + lastName).length);

    process.exit()
}
