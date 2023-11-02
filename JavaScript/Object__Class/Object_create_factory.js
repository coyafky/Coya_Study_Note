function person (name, age,job){
    this.name = name;
    this.age = age;
    this.job=job;
    this.sayName = function(){
        console.log(this.name);
    }

}

let person1 = new person('john',20,'teacher');
let person2 = new person('coya',21,'teacher');

person1.sayName();
person2.sayName();
console.log(person1,person2);