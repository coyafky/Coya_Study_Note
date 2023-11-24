class Person {
    constructor (name) {
      this.name = name
    }
    sayName () {
      console.log(this.name)
    }
    static create (name) {
      return new Person(name)
    }
  }
  const person = Person.create('AAA')
  person.sayName() // AAA