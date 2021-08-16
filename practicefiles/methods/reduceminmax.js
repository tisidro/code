//return max and min as an array -- min score and max score

const scores = [10, 30, 44, 98, 22, 16, 6];

//arrow function below follows scores.reduce. you have as inputs first the accumulator, then the element from the array (score)

//after fat arrow, set up array b/c you want to return an array

var minMax = scores.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);

//the math.min  compares each in the array w/ the ma
console.log(minMax)