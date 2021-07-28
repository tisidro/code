//reverse alpha--shows how lookup tables are structured

var alpha = {
    1: "z",
    2: "y",
    3: "x",
    4: "w"
}

console.log(alpha[2]);//for Key 2 you would get "y" remember that for objects you access their key's value using bracket notation
console.log(alpha[4]);//for Key 4 you would get "w"

var value = 2 //create a variable named value and assign it a key, can just change the key without having to go in do a console.log for each

console.log(alpha[value]) //"y" -- here we insert the variable value into alpha object and by doing so, it looks at the value assigned (2) and yields the value of the 2 key