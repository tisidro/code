menu = {
    burger: 5.00,
    fries: 3.50,
    shake: 1.11,
    salad: 4.25
}

menu["burger"]

// => 5 
//You can get an array of arguments form the command line by using `process.argv.slice(2)`
/*Write a program that accepts a food order based on a menu.
Name your program order.js.
Create an object to store all the item names and their prices.
Accept an order on the command line and calculate the total for all items.
Print the total order price and exit.
Item	Price
Burger	$5.00
Fries	$3.50
Shake	$1.11
Salad	$4.25

Example Usage:
$ node order burger fries

Your order total is $8.50

$ node order burger burger shake fries burger

Your order total is $19.61*/