//first define the function as below

function heyCat() {
    console.log("Hey cat!")
}

//then you run/call/invoke/execute (all same thing)  the function

heyCat()

//can specialize the function

function specificHeyCat(name) {

    console.log("hey " + name.toUpperCase() + "!")
}

specificHeyCat("finny")

//more on functions

function addIt(a, b, c) //these are called parameters
{
    console.log(a + b + c)
}

addIt(2, 5, 2)//these inputs are called arguments

//arrays in functions

function animalArray(arr) {
    for (var i = 0; i < arr.length; i++)
        console.log(arr[i]);
}

animalArray(["cat", "mouse", "bird"])

//console.log statements in functions have been good...but need return statements!

function addIt(num1, num2) {
    return num1 + num2;
}
//return statement is giving you an actual output as opposed to console.log. functions take an input and return an output. console log does not return an output it's just logging something. Return does give an output.

console.log(addIt(2, 5))

var result = addIt(6, 7) * 10

console.log(result)