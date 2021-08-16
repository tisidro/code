//using indexOf to check of there's a word or letter in a string (useful in coding apps!)

//when a string does not contain a word or character, indexOf will return -1. So you can use this in the condition as shown below

let myString = 'I\'m a fun string!';

if (myString.indexOf("fun") > 0) {

    console.log("What a fun string you are!");
}
else {
    console.log("This string has no fun in it.")
}


let myString2 = "Oh no! Everything sucks!";

if (myString2.indexOf("fun") > 0) {

    console.log("What a fun string you are!");
}
else {
    console.log("This string has no fun in it.")
}

