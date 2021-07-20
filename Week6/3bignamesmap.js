let names = ['Alice', 'Bob', 'Charlie', 'Carol', 'David'];
let upper = function (word) {
    return word.toUpperCase();
}
let bigNames = names.map(upper) //=> [ 'ALICE', 'BOB', 'CHARLIE', 'CAROL', 'DAVID' ]

console.log(bigNames)