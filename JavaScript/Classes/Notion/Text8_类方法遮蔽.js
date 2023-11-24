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
      super(length, length)
      this.length = length
    }
    getArea () {
      return this.length * this.length
    }
  }
  const square = new Square(3)
  console.log(square.getArea()) // 9