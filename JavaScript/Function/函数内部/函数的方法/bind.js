function sayHello() {
    console.log('Hello, ' + this.name + '!');
  }
  
  let person = {
    name: 'John'
  };
  
  let greet = sayHello.bind(person);
  greet(); // 输出：Hello, John!