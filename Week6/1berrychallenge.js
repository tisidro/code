//write some code that uses find to return the first item that ends with the string 'berry'

let fruits = ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry']

let endsBerry = function (word) {

    return word.endsWith("berry")

}

//Using Filter

let berryName = fruits.find(endsBerry)

console.log(berryName)

