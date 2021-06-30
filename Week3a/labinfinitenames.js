//Change hello.js so it keeps asking for names forever......unless and until someone says their name is "bye!"then it stops and exits back to the terminal

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


    if (name !== "bye") {
        console.log("What is your name?");
    }
    else {
        (name === "bye")
        process.exit()

    }

    console.log("What is your name?");

    asynch function handleInput(chunk) {
        let name = chunk.toString().trim();

        if (name !== "bye") {
            console.log("What is your name?");
        }
        else {
            (name === "bye")
            process.exit()
        }
        //tried putting break; and process.exit() in if statement and got an error
    }

    console.log(handleInput("bye"));