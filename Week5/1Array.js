let fruits = ["apple", "banana", "cherry"]

console.log(fruits[1])  //you get banana when you put in the index of a specific fruit in the array

console.log(fruits.length - 1)

var lastFruit = fruits.length - 1

console.log(fruits[lastFruit])//works if you put in the variable

console.log(fruits[fruits.length - 1])//still works if you substitute in the value of the variable

let fruitBowl = ["dragonfruit", "blueberry", "fig"]

console.log(fruitBowl.pop())

console.log(fruitBowl.reverse())

console.log(fruits.reverse())//'banana', 'apple'  (we had removed the last one)

console.log(fruits.slice(1))

console.log(fruits.slice(0, 1))

moreFruit = ["apple", "banana", "cherry", "dragonfruit", "blueberry", "fig"]

console.log(moreFruit.slice(1, 3))//cuts out and prints between 1-3 index