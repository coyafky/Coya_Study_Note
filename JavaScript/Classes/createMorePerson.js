// 正如我们一开始所说的，一旦创建了一个类，我们就可以使用该类创建许多对象。现在，让我们使用 Person 类创建许多人员对象。

class Person{
    constructor(firstname,lastnbame){
        this.firstname=firstname;
        this.lastnbame=lastnbame;
    }
}

const person1 = new Person('aaaa','bbbb');
const person2 = new Person ('bbb','ccc');
const person3 = new Person ('cccc','dddd');

console.log(person1);
console.log(person2);
console.log(person3);