
//showing how global scope works

function getAverage(a, b) {

    let average = (a + b) / 2;

    console.log(average);
    return average;

}

let myResult = getAverage(7, 11);//global variable

function logResult() {

    console.log("the average is " + myResult);
    //can use myResult here b/c it is a GLOBAL variable

}

logResult();