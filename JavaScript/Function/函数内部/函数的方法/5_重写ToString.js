function sayHello() {
    console.log('Hello!');
  }
  
  sayHello.toString = function() {
    return 'Custom toString() method';
  };
  
  console.log(sayHello.toString());
  // 输出：Custom toString() method
  