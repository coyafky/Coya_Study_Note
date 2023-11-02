// 对象的所有键均未定义。当我们实例化时，我们应该传递属性的值。这时候我们实例化类的时候就可以传值了。
class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const person1 = new Person('John','Doe');
console.log(person1); //Person { firstname: 'John', lastname: 'Doe' }
function nameGet(person){
    return person.firstname + ' ' + person.lastname;
}
console.log(nameGet(person1)); // mJohn Doe