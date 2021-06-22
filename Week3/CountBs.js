//function that takes in a string that has a B in it
//want to get back how many Bs
//increment value over and over
//look into a value over again
//use a loop!
//start w/ first char, move to 2nd, etc. --use indexes
//compare char to [0]
//then loop again to char [1], need count var starting at zero and 
//need to return count
function countBChar(someString) {
    let stringPosition = 0;
    let count = 0;

    while (stringPosition < someString.length) {

        if (someString[stringPosition] === "B") {
            //code to check for B char & incr count
            count = count + 1
            //count +1 --if it finds a B the count increases, otherwise not
        }
        stringPosition = stringPosition + 1;
        //moves it on to the next string position for the .length
    }
    return count;
}



console.log(countBChar("ABBA"))

/*

function countChar(someString, someChar) {
    let index = 0;
    let counter = 0;

    while ((index < someString.length){
        let char = someString[index];
        if (char === someChar) {
            counter = counter + 1;
        }
        index = index + 1;
    }
    return counter;
}


console.log(ABBA)

NOT REALLY WORKING*/