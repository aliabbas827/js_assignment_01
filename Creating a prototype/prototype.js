// Prototype to calculate area of a Rectangle with height of 2 meter and widht of 5 meter
var height;
var width;

function Rectangle(height, width) {
    this.height = height
    this.width = width
}

Rectangle.prototype.calcArea = function calcArea() {
    return this.height * this.width
}

const square = new Rectangle(2, 5)

console.log(`Area of the rectangle is ${square.calcArea()} square meter`)