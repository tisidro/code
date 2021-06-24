/*A prime number is one that is only divisible by itself and 1.

The goal of this lab is to print all (and only) the prime numbers between 2 and 100.

To do this, your code will probably need to use one or the other, or both, of these:

nested functions - functions that call other functions
nested loops - loops that contain other loops*/

/* hints:
You may want to use the logic in the `isDivisible` function you made during the functional labs. ```js function divisible(divisor, dividend) { if (!(divisor % dividend)) { return true } else { return false } } ```
Hint 2
Fake it till you make it! ```js function isPrime(number) { return true } ```
Hint 3
Use a while loop to iterate through all the integers between your number and 2 ```js let count = 2 while (count < number) { //Your code goes here } ```
    */

function primeNo(x, y) {
    if (!(x % y){
        return true
    }
    else (
            return false
        )
}

let i = 2;
while (i < 100) {
    console.log(primeNo(i));
    i = i++;


/*let num = 2

function primeNos(num) {
    let primeNos = num % num && num % 1 === 0

    return primeNos++
}


let i = 1;
while (i <= 100) {
    console.log(primeNos(i));
    i = i++;

    if (i = 100) {
        break;
    }
}
*/


