/*Write a function that calculates the number of seconds old you are when given your age

let age = 27

function ageCalc (num) {
  //Your code goes here
}

ageCalc(age) // should print "You are 852055200 seconds old." to the console
How could we use ARGV to make this more modular?*/



/*

function ageCalc(num) {
    return age * 365 * 24 * 60 * 60;
}

console.log(ageCalc())*/


let ageCalc = (age) => age * 365 * 24 * 60 * 60;

console.log(ageCalc(57))