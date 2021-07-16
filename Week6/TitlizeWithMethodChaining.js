
//first you have to split up the string into an array (split a string into an array of substrings, and returns the new array)

let words = "the rain in spain falls mainly on the plain"

function capitalize(word) {
    letFirstLetter = word[0];
    let resOfWord = word.slice(1);

    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
}

console.log(words.split(" ").map(capitalize).join(" "));

//now it will print as string with first letter capitalized

/*you can also do this which is kind of more readable because it's an assembly line:

let result = words
.split(" ")
.map(capitalize)
.join(" ")

then console log the variable result
console.log(result)
*/