function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

let person1 = new Person('John', 25);
let person2 = new Person('Jane', 22);

person1.sayHello();
person2.sayHello();