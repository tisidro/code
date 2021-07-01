console.log("What is your name?");

function handleInput(chunk) {
    let name = chunk.toString().trim();
    name = name.toLowerCase();
    let enemiesList = ['darth', 'voldemort', 'sauron', 'palpatine'];

    if (enemiesList.includes(name)) {
        console.log('Go away you villain!');
        process.exit();
    } else if (name === 'bye!') {
        console.log('See you soon!');
        process.exit();
    } else {
        console.log("Hello, " + name + "!");
    }
    console.log('What is your name?')
}

process.stdin.on("data", handleInput);