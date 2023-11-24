const methodName= 'sayName'
const propertyName = 'newName'
class Person {
  constructor (name) {
    this.name = name
  }
  [methodName] () {
    console.log(this.name)
  }
  get [propertyName] () {
    return this.name
  }
  set [propertyName] (val) {
    this.name = val
  }
}
let person = new Person('AAA')
person.sayName()            // AAA
person.name = 'BBB'
console.log(person.newName) // BBB