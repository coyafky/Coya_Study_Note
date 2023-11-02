class Person{
    constructor(firstname,lastname) {
        console.log(this);
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const person  = new Person();

console.log(person); // Person { firstname: undefined, lastname: undefined }
