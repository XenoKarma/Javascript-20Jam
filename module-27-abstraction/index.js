// Abtraction

class Shape {
    constructor(name) {
        if(this.constructor === Shape) {
            throw new Error("Cannot instatiate abstract class")
        }
        this.name = name
    }
    calculateArea() {
        throw new Error ('Abstrack must be implemanted')
    }
}


class Rectangle extends Shape { 
    constructor(width, height) {
        super("Rectangle")
        this.width = width
        this.height = height
    }

    calculateArea() {
        return this.width * this.height
    }
}

let myRect = new Rectangle(10,4)
console.log(myRect.calculateArea())

/* Shape adalah Abstraksi yang tidak dapat di instansiasi secara langsung.
Subclass seperti rectangle harus mengimplementasikan method calculateArea()
*/
