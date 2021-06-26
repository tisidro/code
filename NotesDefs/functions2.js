function isInArray(nums, num) {
    for (var i = 0; i < nums.length; i++) {//for = looping thru the array

        if (nums[i] === num) {
            return true;
        }
    }
    return false;
}


console.log(isInArray([2, 5, 6, 9], 5))

//careful w/ parentheses--you have an issue w/ these. Also memorize the loop thru array code ffs.