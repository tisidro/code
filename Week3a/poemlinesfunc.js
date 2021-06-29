function poem() {
    let count = 1;
    poemLine(count)
}

function poemLine(lineCount) {
    while (lineCount <= 8) {
        let result = decideLine(lineCount);
        console.log(result);
        lineCount = lineCount + 1;
    }

}

function decideLine(lineNumber) {
    if (lineNumber === 8) {
        return ("More!")
    }
    else if (lineNumber === 4) {
        return ("4!")
    }

    else {
        return (lineNumber + " " + "potato,")
    }

}


poem();