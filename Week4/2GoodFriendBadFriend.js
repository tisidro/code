/*
create a program to read input from a human user, and then make a decision about what to output as a message based on that input.

Now change hello.js so that it doesn't always say hello!
If the user's name is "Darth" then say "Noooooo! That's impossible!"
*/

console.log("What is your name?");

function handleInput(chunk) {
    let name = chunk.toString().trim();

    if (name === 'Darth' || name === 'darth') {
        console.log('Noooooo! That is impossible!')
    }

    else {
        console.log('Hello, ' + name + '!');
    }

}

process.stdin.once('data', handleInput);



/*

console.log('What is your name?');

function handleInput(chunk) {
    let name = chunk.toString().trim();
    if (name === 'Darth') {
        console.log('Noooooo! That is impossible!')
    } else {
        console.log('Hello, ' + name + '!');
    }
}

process.stdin.on('data', handleInput);*/
