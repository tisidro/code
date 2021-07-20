//challenge: return any ending in berry -- user Filter method

let fruits = ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry']

let endsBerry = function (word) {

    return word.endsWith("berry")

}

let berryName = fruits.filter(endsBerry)

console.log(berryName)