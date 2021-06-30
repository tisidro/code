let opinion = 'i love cheese';
console.log(rant(opinion));

function rant(message) {
    let loudMessage = message.toUpperCase() + '!!';
    return loudMessage;
}

//rant is hoisted so it says I love cheese

let fName = 'alice';

let alpha = function () {
    console.log(fName);
    beta();
}

alpha();//alice

function beta() {
    let fName = "Bob";

    console.log(fName);//bob
}
console.log(fName);//alice

