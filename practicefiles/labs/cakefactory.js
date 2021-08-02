//Create a class definition, or factory function that generates different Cake objects that can have different flavors, icings, and decorations, with a method to print a description of the cake to the console.
class Cake {
    static defaultCake(decoration) {
        let flavor = "vanilla";
        let icing = "chocolate";

        let validDecoration = ["sprinkles", "cocoa", "fruit"];
        if (validDecoration.includes(decoration)) {
            decoration = decoration
        } else {
            "sprinkles";
        }

        let theCake = new Cake(flavor, icing, decoration);
        return theCake;
    }

    constructor(flavor, icing, decoration) {
        this.flavor = flavor;
        this.icing = icing;
        this.decoration = decoration;
    }

    describe() {
        return (
            "It is a " +
            this.flavor +
            " cake, with " +
            this.icing +
            " frosting, and " +
            this.decoration
        );
    }
}

let cakeOne = new Cake("chocolate", "caramel", "sprinkles");
console.log(cakeOne.describe());

let defaultCake = Cake.defaultCake("cocoa");
console.log(defaultCake.describe());