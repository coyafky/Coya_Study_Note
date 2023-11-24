class Rectangle {
    constructor (width, height) {
      this.width = width
      this.height = height
    }
    getArea () {
      return this.width * this.height
    }
  }
  class Square extends Rectangle {
    constructor (length) {
      // 等价于 Rectangle.call(this, length, length)
      super(length, length)
    }
  }
  const square = new Square(3)
  console.log(square.getArea())             // 9
  console.log(square instanceof Square)     // true
  console.log(Square instanceof Rectangle)  // false