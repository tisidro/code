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

//first you have to split up the strong into an array (split a string into an array of substrings, and returns the new array)

//next you use .map on the array to call the provided function once for each element in an array, in order.

//also need a function that will return first letter of word to upper case and then slice at 2nd character or (1) to return the rest of the word in lowercase (extracts a section of a string and returns it as a new string, without modifying the original string.)

//then you need to take this new array and apply .join (creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas)

function titleize(string) {
    let wordArray = string.split(" ")
    let newArray = wordArray.map(function (word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    return newArray.join(" ")
}

console.log(titleize("fRiDAY IS heRE"))

/* was not working

let string = " ";


function titleize(string) {

    let stringArray = string.split(" ");

    let newArray = stringArray.map

    function word() {
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return newArray.join(" ")


    console.log(titleize("all dogs are good dogs."))

/*Solution
function titilize(string) { let wordArray = string.split(" ") let newArray = wordArray.map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase() }) return newArray.join(" ") }*/