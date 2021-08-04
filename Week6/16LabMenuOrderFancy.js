let order = process.argv.slice(2)

//DON'T FORGET! WHEN YOU USE PROCESS.ARG YOU NEED TO TYPE IN YOUR INPUTS ON COMMAND LINE AFTER FILENAME!

//waits for the argument from the command line, slices off the node and order.js to clean

let menu = {

    burger: 5,

    fries: 3.5,

    shake: 1.11,

    salad: 4.25

}

let orderPrice = 0;

order.forEach((item) => {

    orderPrice += menu[item]

}) //  a fat arrow function that works within the forEach method

//checks if argument is in menu object and adds them together, which resets the orderPrice value and prints the to the console below

console.log("Your order total is $" + orderPrice)