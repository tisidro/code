//pick random element in an array--use Math.floor(Math.random())

let cats = ["siamese", "tabby", "black", "maine coon", "calico"]

function getRandCat(array) {
    let randCat = Math.floor(Math.random() * array.length)
    return array[randCat]
}
console.log(getRandCat(cats))

//Math.floor() - rounds decimal down
//Math.ceil() - rounds decimal up
//Math.random() - picks # between 0 and 1 (not including 1)that will be a long decimal #