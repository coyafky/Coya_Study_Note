function greet(name) {
 // 打印出Hello, John!
 console.log(`Hello, ${name}!`);
}

// 定义一个person对象
const person = {
 name: 'John',
 greet: function() {
 // 打印出Hello, John!
   console.log(`Hello, ${this.name}!`);
 }
};

// 调用greet函数
greet.call(person); // Output: "Hello, John!"
person.greet.call(person); // Output: "Hello, John!"