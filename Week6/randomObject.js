//if you want ot pass a variable to an object you have to do it in brackets

let numbers = {
    1: "one",
    2: "two",
    3: "three",
}

let someNumber = randomNumber(3);

let myList = [" ", "Cortney", "Cedrick", "Tim"]


function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

numbers[someNumber];

console.log(myList[someNumber])