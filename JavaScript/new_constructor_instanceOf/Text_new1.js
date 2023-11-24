function student (name,age){
    this.name = name;
    this.age = age;
}


var first = new student('John', 26);
console.log(first); // student { name: 'John', age: 26 }

console.log(first.name); // john
console.log(first.age);//26

var second = new student('Jeff', 50);
console.log(second.__proto__ === student.prototype);//true

student.prototype.sayInfo = function(){
    console.log(this.name + ' is ' + this.age + ' years old');
  }
  first.sayInfo(); // John is 26 years old
  second.sayInfo(); // Jeff is 50 years old

  var third = new student('Tracy', 15);

console.log(third);
// Student {name: "Tracy", age: 15}
third.sayInfo();
// Tracy is 15 years old