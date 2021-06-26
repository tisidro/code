//Change hello.js so that it says "Go away!" if the user's name is any one of a number of evil names For instance, Voldemort, Palpatine, Lex Luthor...
//Bonus Challenge: don't let enemies sneak in even if they spell their names with capital letters, like VolDeMortconsole.log("What is your name?");

function handleInput(chunk) {
    let name = chunk.toString().trim();
    console.log("You said " + `${name}` + "?");

    if (name === "Voldemorte" || name === "VOLDEMORTE") {
        return "GET OUT!";
    }
    else if (name === "Palpatine" || name === "PALPATINE") ) {
        return "GET OUT!";
    }

    else if (name === "Lex" || name === "LEX") {
        return "GET OUT!";
    }
    return ("Hello, " + name + "!");
}

console.log(handleInput("darth"));