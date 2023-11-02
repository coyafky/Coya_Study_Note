let person = function (name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}

let  person1 = new person('zfpx',20,'teacher');

let person2 = new person('zdad1',20,'teacher');


console.log(person1  instanceof Object);
console.log(person1 instanceof person);
console.log(person2 instanceof Object);
console.log(person2 instanceof person);