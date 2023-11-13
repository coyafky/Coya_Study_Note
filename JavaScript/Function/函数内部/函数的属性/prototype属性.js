function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + '!');
  };
  
  var john = new Person('John');
  var jane = new Person('Jane');
  
  john.sayHello(); // 输出：Hello, my name is John!
  jane.sayHello(); // 输出：Hello, my name is Jane!
  