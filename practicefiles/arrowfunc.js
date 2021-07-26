function isEven(element) {
    if (element % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEven(2));
console.log(isEven(3));

//using arrow function
//declare function name as variable, remove function specification, add arrow pointer

var isEven = (element) => {

    return element % 2 === 0;
    //will always eval as true or false, //don't really need to specify

}

console.log(isEven(2));
console.log(isEven(3));