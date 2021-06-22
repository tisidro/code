1 /*write a program called potato.js that prints that poem, using loops.

1 potato,
    2 potato,
        3 potato,
            4!
5 potato,
    6 potato,
        7 potato,
            More!

(No, you can't just print the entire poem as a single string; that would be cheating.)*/


function poemLine(lineNumber) {
    if (lineNumber === 8) {
        return "More!"
    } else if (lineNumber === 4) {
        return "4!"
    } else {
        return lineNumber + " potato,"
    }
}


let i = 1;
while (i <= 8) {
    console.log(poemLine(i));
    i = i + 1;
}
