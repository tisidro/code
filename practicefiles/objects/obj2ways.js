//objects written two ways

let lilRectangle = {
    height: 10,
    width: 8,
    area: function () {
        return this.height * this.width;
    }
}

console.log(lilRectangle.height);
console.log(lilRectangle.width);
console.log(lilRectangle.area());

//same thing another way

let smallRectangle = {}

smallRectangle.height = 10;
smallRectangle.width = 8;

smallRectangle.area = function () {
    return this.height * this.width;
}

console.log(smallRectangle.height);
console.log(smallRectangle.width);
console.log(smallRectangle.area());