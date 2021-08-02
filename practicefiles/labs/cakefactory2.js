class Cake {
    constructor(flavor, icing, decoration) {
        this.flavor = flavor;
        this.icing = icing;
        this.decoration = decoration;
    }
    speak() {
        return `This cake's flavor is ${this.flavor}, with a yummy ${this.icing} icing, and ${this.decoration} as decorations! Enjoy!`;
    }
}

let cakeOne = new Cake('red velvet', 'butter cream', 'sprinkles');

let cakeTwo = new Cake('chocolate', 'vanilla', 'nothing');

let cakeThree = new Cake('strawberry shortcake', 'whipped strawberry cream', ' diced strawberries');

console.log(cakeOne.speak());
console.log(cakeTwo.speak());
console.log(cakeThree.speak());