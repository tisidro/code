let isEven = (element) => {

    return element % 2 === 0;
}

let result = [2, 4, 6, 8].every(isEven);
console.log(result);
//resolves to true b/c *every* item in the array is indeed even!


let newResult = [2, 3, 6, 8].every(isEven);
console.log(newResult);
//resolves to false b/c *every* item in the array is NOT even!