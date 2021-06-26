//for loops don't do well w/asynch await but while loops do so use those

//fullname.js

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



