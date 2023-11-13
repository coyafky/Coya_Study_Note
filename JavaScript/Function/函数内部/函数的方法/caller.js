function sayHello() {
    console.log('Hello, ' + this.name + '!');
  }
  
  let person = {
    name: 'John'
  };
  
  sayHello.call(person); // 输出：Hello, John!