//the reduce method keeps track of a running total (aka - accumulator or memo)
//Whatever value the function returns is used as the accumulator for the next pass

let numbers = [1, 2, 3, 4]; //tot should be 10

let totalCount = numbers.reduce((accumulator, nextNum) => accumulator + nextNum, 0); //zero is initial value of accumulator

console.log(totalCount) //

//typical syntax, easier w/ arrow function


//here it's totalCount, with a fat arrow pointing to the action you want the function to do which is add accumulator to nextNum (next element in array). This is the callback function (accumulator, nextNum) => accumulator + nextNum

//so you have 0+1= 1, 1+ 2 = 3, etc. but it starts w/ zero b/c it's nextNum,0





