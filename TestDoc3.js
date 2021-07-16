
//first you have to split up the string into an array (split a string into an array of substrings, and returns the new array)

let words = "the rain in spain falls mainly on the plain"

function capitalize(word) {
  letFirstLetter = word[0];
  let resOfWord = word.slice(1);

  return firstLetter.toUpperCase() + restOfWord.toLowerCase();
}


wordsArray = words.split(" ")//splitting on space


let capitalize = wordsArray.map(capitalize);
//oldCapitalize("the") => "The"

let joinedString = capitalized.join(" ");

console.log(joinedString);

//now it will print as string with first letter capitalized

