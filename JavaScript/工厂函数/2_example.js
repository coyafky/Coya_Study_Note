function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    };
}
let person1 = new Person("jackson", 20);
let person2 = new Person("bear", 22);
person1.sayName(); // jackson
person2.sayName(); // bear
