//slice() is a method used to cut up strings. Can take one or two inputs
//Count starts at zero in a string.

//slice is "cut from" if you have one number. It shows only what's after that number
//slice is "cut between" and it shows ony what's between those numbers

//slice(2) cuts everything up to 2nd character
//slice(1,2) cuts out everything except what's between 1 and 2 in the string

var str = "Cats rule!"

console.log(str)

//adding slice, this will slice between the 1st letter and the 4th--showing the first 4 characters. REMEMBER, THE COUNT STARTS AT ZERO

var str2 = str.slice(0, 10)

console.log(str2)//hence this shows "cats"

var str3 = str.slice(4)//slices from 4 to end and hence shows "rule!"

console.log(str3)

var str4 = str.slice(4, 6)//slices between 4 and 6--so basically will just show the 5th character in the series or "r"
console.log(str4)