function person(name,age,job){
    this.name=name;
    this.job=job;
    this.sayName =function(){
        console.log(this.name);
    }
}

let person1 = new  person ("coya",29,"sofa");
let person2 = new person  ("gred",22,"doctor");

person1.sayName();//coya
person2.sayName();// gred