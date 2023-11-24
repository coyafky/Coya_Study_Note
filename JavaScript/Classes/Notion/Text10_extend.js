const NormalizeMixin = {
    normalize () {
      return JSON.stringify(this)
    }
  }
  const AreaMixin = {
    getArea () {
      return this.width * this.height
    }
  }
  function mixin(...mixins) {
    const base = function () {}
    Object.assign(base.prototype, ...mixins)
    return base
  }
  class Square extends mixin(AreaMixin, NormalizeMixin) {
    constructor (length) {
      super()
      this.width = length
      this.height = length
    }
  }
  const square = new Square(3)
  console.log(square.getArea())     // 9
  console.log(square.normalize())   // {width:3, height: 3}