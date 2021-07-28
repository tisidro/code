//coding to find a number that does not match the others in an array

function findOddball(arr) {
    arr.sort((x, y) => x - y)
    return arr[0] === arr[1] ? arr.pop : arr[0]
}

console.log(findOddball([1, 1, 3, 1, 1, 1, 1]) === 3)

//sort the values from smallest to largest then compare if the first value is strictly equal to the second value. If so, we will pop the last element because that's the unique element if not we will return the first element because that would be the unique one