function capitalize(someStuff) {
    let allCaps = someStuff.toUpperCase();
    return allCaps;
}

capitalize('hey you');


console.log(capitalize('hey you'))


/*Please write a function that returns a Capitalized version of a word. Only uppercase the first letter of the word.*/

let word = " ";

function firstLetterCap(word) {

    return word.charAt(0).toUpperCase() + word.slice(1)
}

console.log(firstLetterCap("whatever"))

//the world's most perfect explanation
