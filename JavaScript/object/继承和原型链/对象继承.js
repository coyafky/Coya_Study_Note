function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return "Hello, I'm " + this.name;
}

function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayGrade = function() {
    return "I'm in grade " + this.grade;
}

var student1 = new Student('John', 10);
console.log(student1.sayHello()); // "Hello, I'm John"
console.log(student1.sayGrade()); // "I'm in grade 10"