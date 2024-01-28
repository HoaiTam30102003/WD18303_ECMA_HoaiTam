class Shape {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    move() {
        console.log("x là: " + this.x, ",y là: " + this.y)
    }
}

abc = new Shape(2,4)
abc.move()