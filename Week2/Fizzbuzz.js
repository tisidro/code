//first make command to print numbers 1-100

let num = 0;

while (num < 100) {


    num = num + 1;

    if (num % 3 === 0 && num % 5 !== 0) {
        console.log("Fizz")
    }

    else if (num % 5 === 0 && num % 3 !== 0) {
        console.log("Buzz");
    }


    else if (num % 5 === 0 && num % 3 === 0) {
        console.log("FizzBuzz");
    }

    else {
        console.log(num)
    }


}