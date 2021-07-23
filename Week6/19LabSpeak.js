/*Using the following definition:


Please add a method to dog called speak so the following code:

console.log(dog.speak())
prints the following line:

My name is Abby and I have 4 paws!*/

let dog = {
    name: 'Abby',
    paws: 4
}

function dogSpeak() {
    return (`my name is ${this.name} and I have ${this.paws} paws`)
}


dog.speak = dogSpeak //dog.speak is now a method referencing dog.speak

/*or dog.speak = function (){
    return (`my name is ${this.name} and I have ${this.paws}`)
    */

console.log(dog.speak())