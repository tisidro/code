/* all this can be done more easily w/ callbacks:

let isEven = (element) => {

    return element % 2 === 0;
}


let result = [2, 4, 6, 8].every(isEven);
console.log(result);
*/

let result = [2, 4, 6, 8].every((e) => {

    //() and arrow function then curly bracket
    return e % 2 === 0;


});
console.log(result);

//ALSO can just remove the "return" and hence curly brackets

let newResult = [1, 3, 6, 8].every((e) => e % 2 === 0);

console.log(newResult);