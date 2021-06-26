//Change hello.js so it keeps asking for names forever......unless and until someone says their name is "bye!"then it stops and exits back to the terminal

console.log("What is your name?");

function handleInput(chunk) {
    let name = chunk.toString().trim();

    while (name !== "bye") {
        console.log("What is your name?");
    }
    if (name === "bye") {
        console.log("exit to terminal")
    }
    //tried putting break; and process.exit() in if statement and got an error
}

console.log(handleInput("bye"));