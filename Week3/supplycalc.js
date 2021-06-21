/*accepts three arguments, a starting age, an amount per day, and an item name
calculates the amount of items used over the course of the rest of your life
based on a 100 year constant max age
Outputs "You will need Number Items to last the rest of your life.

 e.g.
supplyCal(20, 3, "cookie") // => "You will need 87600 cookies to last the rest of your life"
supplyCal(99, 3, "cookie") // => "You will need 1095 cookies to last the rest of your life"
supplyCal(0, 3, "cookie") // => "You will need 109500 cookies to last the rest of your life"*/

/*let amountDaily

let amountYear = amountDaily * 365

let age

let item = ""

let numberYears = 100 - age

let supplyCalc = (age, amountDaily, item) => numberYears * amountYear + item()
console.log(supplyCalc(57, 3, " cookies"))*/

function supplyCalc(age, amountDaily, item) {
    let amountPerYear = amountDaily * 365
    let totalYears = 100 - age
    let totalItems = amountPerYear * totalYears

    let message = "You will need " + totalItems + " " + item + "s to last the rest of your life"

    return message
}

console.log(supplyCalc(57, 2, "yummy cupcakes"))