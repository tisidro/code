//the input handler function

function handleInput(input) {
    let inputAsString = input.toString();

    console.log("Input is:", inputAsString)

    process.stdin.once('data', handleInput);
}

process.stdin.once('data', handleInput);

console.log("waiting for input...")
//type something after waiting for input

//copying the process.stdin into the function and then having one outside has it repeat

//other way to do it is to change "once" to "on"

//permanent listener:  process.stdin.once change to process.stdin.on <==now it's a permanent listener
//on means "listen forever"
//once means "listen once and then stop handling input"

//this is used for creating interactive programs...responses to messages- ie say a word and program will do something

//also useful b/c when you are reading data out of a file you can perform an action for each line in the file. One part of your program reads file, other part processes input

//Event based programming: Event is being triggered like: data event or other events (data, close, open)
