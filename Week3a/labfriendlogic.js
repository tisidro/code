console.log("What is your name?");

function handleInput(chunk) {
    let name = chunk.toString().trim();
    console.log("You said " + `${name}` + "?");

    if (name === "Darth" || name === "darth") {
        return "Noooo! That's impossible!";
    }

    return ("Hello, " + name + "!");
}

console.log(handleInput("darth"));

//Now change hello.js so that it doesn't always say hello!If the user's name is "Darth" then say "Noooooo! That's impossible!"