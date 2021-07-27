class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    speak() {
        return `I am a ${this.color} circle that has an area ${this.area()}`
    }
}

let circleOne = new Circle(1, 'red');
let circleTwo = new Circle(2, 'blue');
let circleThree = new Circle(3, 'green');

console.log(circleOne.speak());
console.log(circleTwo.speak());
console.log(circleThree.speak());