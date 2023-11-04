function person (name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is "+this.name);
        console.log("hello my age is"+this.age );
    }
}

let person1 = new person("Ram",20);
let person2 = new person("Shyam",25);
person1.greet();
person2.greet();

// Hello my name is Ram
// hello my age is20
// Hello my name is Shyam
// hello my age is25