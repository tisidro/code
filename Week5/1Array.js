let fruits = ["apple", "banana", "cherry"]

console.log(fruits[1])  //you get banana when you put in the index of a specific fruit in the array

console.log(fruits.length - 1)

var lastFruit = fruits.length - 1

console.log(fruits[lastFruit])//works if you put in the variable

console.log(fruits[fruits.length - 1])//still works if you substitute in the value of the variable

console.log(fruits.pop("kiwi"))