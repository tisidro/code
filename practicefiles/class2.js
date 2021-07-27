class Circle {
    static fromDiameter(diameter) {
        let circleRadius = diameter / 2;
        return new Circle(circleRadius, 'red', 'smooth');
    }

    constructor(radius, color, texture) {
        this.radius = radius;
        this.color = color;
        if (["fuzzy", "bumpy", "smooth"].includes(texture)) {
            this.texture = texture
        } else {
            this.texture = "fuzzy";
        }
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    speak() {
        return `I am a ${this.texture} ${this.color} circle that has an area of ${this.area()}`
    }
}

let circleOne = new Circle(1, 'red');
let circleTwo = new Circle(2, 'blue', 'bumpy');
let circleThree = new Circle(3, 'green', 'smooth');
let circleFour = Circle.fromDiameter(4);

console.log(circleOne.speak());
console.log(circleTwo.speak());
console.log(circleThree.speak());
console.log(circleFour.speak());