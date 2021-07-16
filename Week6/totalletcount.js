let names = ['Alice', 'Bob', 'Charlie', 'Carol', 'David'];

let prices = [42, 23, 67, 50];
//accumulator is like running total
//people also tend to call it memo instead of accummulator
//also can call it subtotal, valueSoFar
//it stands for...what have we got so far.

const letterReducer = function (accumulator, word) {
    return accumulator + word.length;
};

const numberReducer = function (accumulator, number) {
    return accumulator + number;
};


let totalCount = names.reduce(letterReducer, 0);

let totalPrice = prices.reduce(numberReducer, 0);//you can put any # here and it will add to that. so if you had 100 here...since you get 182, if you put 100 it would give 282

console.log(totalCount);

console.log(totalPrice);