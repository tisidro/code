//Create a class definition, or factory function that generates different Cake objects that can have different flavors, icings, and decorations, with a method to print a description of the cake to the console.

class Cake {

    static defaultCake(decoration) {
        let flavor = "vanilla";
        let icing = "chocolate";
        let validDecoration = ["sprinkles", "cocoa", "fruit"];
        if (validDecoration.includes(decoration)) {
            decoration = decoration
        } else {
            decoration = "sprinkles";
        }

        let theCake = new Cake(flavor, icing, decoration);

        return theCake;
    }

    constructor(flavor, icing, decoration) {

        this.flavor = flavor || "vanilla";
        this.icing = icing || "vanilla";
        this.decoration = decoration || "M & Ms";


    }

    describe() {
        return `It is a ${this.flavor} cake, with ${this.icing}  frosting, and ${this.decoration}`
    }
}

let myCake = new Cake('chocolate', 'caramel', 'sprinkles');

let newCake = new Cake('vanilla', 'vanilla', ''); //can also pass null or undefined instead of ''

let defaultCake = Cake.defaultCake(123);


console.log(newCake.describe());
console.log(defaultCake.describe());