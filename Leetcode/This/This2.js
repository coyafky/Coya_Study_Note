
//   JavaScript 对象时，我们通常将它们与某些行为相关联。

class Dog{
    constructor(name,age,breed){
        this.name = name;
        this.age =age;
        this.breed = breed;
    }
    tellUsabout(){
        return  `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`;
    }

    woof(){
        return "Woof!";
    }

}
let dog = new Dog("Buddy", 4, "Labrador Retriever");
console.log(dog.tellUsabout());

// 同样用这个模版来创建一只猫
class Cat{
    constructor(name,age,breed){
        this.name = name;
        this.age =age;
        this.breed = breed;
    }
    tellUsabout(){
        return  `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`;
    }

    meow(){
        return "Meow!";
    }

}

// 定义一个猫
let cat = new Cat("Sophie", 3, "British Shorthair");

console.log(cat.tellUsabout());

// 函数借用允许我们在不同的对象上使用一个对象的方法，而不必复制该方法并将其维护在两个不同的位置。这是通过使用 .call() 、 .apply() 或 .bind() 来完成的，所有这些都用于在我们借用的方法上显式设置 this 。


// 假设我们有一个名为 Dog 的类，它有一个名为 woof() 的方法，它返回一个字符串。

// 创建一个名为 Dog 的类
class Dog{
    constructor(name,age,breed){
        this.name = name;
        this.age =age;
        this.breed = breed;
    }
    tellUsabout(){
        return  `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`;
    }

    woof(){
        return "Woof!";
    }
}
