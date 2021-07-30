//pick random element in an array--use Math.floor(Math.random())

let cats = ["siamese", "tabby", "black", "maine coon", "calico"]

function getRandCat(array) {
    let randCat = Math.floor(Math.random() * array.length)
    return array[randCat]
}
console.log(getRandCat(cats))

//Math.floor -
//Math.random() - picks # between 0 and 1, inclusive of zero but exclusive of 1 (so mult by arr.length gives you the actual length)