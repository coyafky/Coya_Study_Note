function Person (name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log(this.name);
}

let person = new Person('AAA')
person.sayName()                      // AAA
console.log(person instanceof Person) // true
console.log(person instanceof Object) // true