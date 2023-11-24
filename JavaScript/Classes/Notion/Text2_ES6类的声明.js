class Person{
    constructor(firstname,lastname) {
        console.log(this);
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayName(){
        console.log(this.firstname,this.lastname);
    }
}

const person  = new Person('coya','fly');
person.sayName();
console.log(person); // Person { firstname: undefined, lastname: undefined }

// Person {}
// coya fly
// Person { firstname: 'coya', lastname: 'fly' }