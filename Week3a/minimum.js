function min(x, y) {
    if (x < y) {
        return x
    }
    else {
        return y
    }
}
console.log(min(19, 20))

//return x<y ? x:y
//this means compare x to y, ? means if true return what's on left of colon, if false return what's on right of colon
//can also do

function min(one, two) {
    if (one < two) {
        return one;
    }
    return two
}

console.log(min(25, 26))
console.log(min(27, 27))