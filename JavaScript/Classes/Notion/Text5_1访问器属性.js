class Person {
    constructor (message) {
      this.animal.message = message
    }
    get message () {
      return this.animal.message
    }
    set message (message) {
      this.animal.message = message
    }
  }
  const desc = Object.getOwnPropertyDescriptor(Person.prototype, 'message')
  console.log('get' in desc)  // true
  console.log('set' in desc)  // true