let abby = {
    name: 'Abby',
    paws: 4,
};

let ada = {
    name: "Ada",
    paws: 3,
};

function dogSpeak() {
    return "My name is " + this.name + " and I have " + this.paws + " paws!";
}

abby.speak = dogSpeak;
ada.speak = dogSpeak;

console.log(abby.speak());
console.log(ada.speak());