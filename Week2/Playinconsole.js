/*assign your birth year to a variable, then calculate your current age in years
write a poem (with at least two lines) and assign it to a variable
print the poem to the console with proper line formatting
*/

var birthYear = 1965
var currentYear = 2021

let currentAge = currentYear - birthYear

console.log(currentAge)


/*does anyone understand what this is asking us to do? 

"write a poem (with at least two lines) and assign it to a variable
print the poem to the console with proper line formatting"

The way I read it:
1. write a poem and assign it to a variable
2. make sure it has a /n in it
3. Q: can you put an /n in a variable?
4. Is there a reading or similar problem to this that could give me a hint? 
Thanks :)*/

var poem = "I am a poem /ncheck me out"

console.log(poem)
/*ps, of course this did not work and I got as my output:
I am a poem/ncheck me out */


/*used "SHOUTER" code to help...

assign your best friend's name to a variable
YELL YOUR BEST FRIEND'S NAME
get a new best friend
and YELL THEIR NAME TOO



function shouter(someString) {
    let loudString = someString.toUpperCase();
    return loudString + '!!!';
}

shouter('i like pizza');

console.log(shouter('drinking time'))

}
*/

var bestFriend = "Tina";
var otherBestie = "Pepper";

console.log(bestFriend.toUpperCase() + "!!!" + otherBestie.toUpperCase() + "!!!");

let color = "blue"     // assign 'blue' to color
let fruit = "berry"    // assign 'berry' to fruit
console.log(color + fruit)    // 'blueberry'

color = "black"    // 'black'
console.log(color + fruit)      // 'blackberry'
