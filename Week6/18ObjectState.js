let rectangle = {
    height: 10,
    width: 8,
    area: function () {
        return this.height * this.width;
    }
}

rectangle.height   //=> 10
rectangle.area()   //=> 80

console.log(rectangle.height)

console.log(rectangle.area())