// ES5等价类
let Person = (function() {
    'use strict'
    const Person = function(name) {
      if (typeof new.target === 'undefined') {
        throw new Error('必须通过关键字new调用此构造函数')
      }
      this.name = name
    }
    Object.defineProperty(Person.prototype, 'sayName', {
      value: function () {
        if (typeof new.target !== 'undefined') {
          throw new Error('不可通过关键字new来调用此方法')
        }
        console.log(this.name)
      },
      enumerable: false,
      writable: false,
      configurable: true
    })
    return Person
  }())
  
  const person = new Person('AAA')
  person.sayName()                      // AAA
  console.log(person instanceof Person) // true