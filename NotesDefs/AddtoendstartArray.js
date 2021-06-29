var myArray = ["a", "b", "c", "d"];

myArray.push("end");
myArray.unshift("start");

console.log(myArray)

//or use spread operator

var myArray = ["a", "b", "c", "d"];


mySpreadOp = ["start", ...myArray, "end"]

console.log(mySpreadOp)