//check if a number exists in array using function

function doesExist(arrNum, num) {
    for (i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === num) {
            return true;
        }

    }
    return false;
}

console.log(doesExist([1, 2, 3, 4], 7))

console.log(doesExist([1, 2, 3, 4], 3))