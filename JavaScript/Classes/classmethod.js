class Person {
    constructor (firstName,lastName,age,contry,city){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.contry=contry;
        this.city=city;
    }
    getFullName(){
        const fullName = this.firstName+this.lastName

        return fullName
    }

}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())