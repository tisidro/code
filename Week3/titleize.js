/*Titleize
Write a function that:

accepts a string as an argument
splits apart the words in the string
capitalizes each word
returns a string with the first letter of each word capitalized 
e.g.
titilize("all dogs are good dogs") // => "All Dogs Are Good Dogs"
titilize("eveRY green bus drives fAst") // => "Every Green Bus Drives Fast"
titilize("FRIDAY IS THE LONGEST DAY") // => "Friday Is The Longest Day"*/

//first you have to split up the string into an array (split a string into an array of substrings, and returns the new array)



function titilize(string) {
    let wordArray = string.split(" ")

    //next you use .map on the array to call the provided function once for each element in an array, in order.

    //also need a function that will return first letter of word to upper case and then slice at 2nd character or (1) to return the rest of the word in lowercase (extracts a section of a string and returns it as a new string, without modifying the original string.)

    let newArray = wordArray.map(function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()

    });

    //this creates a new array that applies the function to the entire array in order (titlizing). the function capitalize is called by putting it in () after .map 

    return newArray.join(" ");

    //then you need to take this new array and apply .join (creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas)

}
console.log(titilize("HEY THERE HELLO"))

console.log(titilize("all dogs are good dogs"))
