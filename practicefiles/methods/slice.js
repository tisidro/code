//working with slice method

var str = "Cats rule!"

console.log(str)

//adding slice, this will slice between the 1st letter and the 4th--showing the first 4 characters. REMEMBER, THE COUNT STARTS AT ZERO

var str2 = str.slice(0, 4)

console.log(str2)//hence this shows "cats"

var str3 = str.slice(4)//slices from 4 to end and hence shows "rule!"

console.log(str3)

var str4 = str.slice(4, 6)//slices between 4 and 6--so basically will just show the 5th character in the series or "r"
console.log(str4)