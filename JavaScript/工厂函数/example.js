function createPerson(name, age) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
let person1 = createPerson("jackson", 20);
let person2 = createPerson("bear", 22);
person1.sayName(); //jackson
person2.sayName(); //bear
