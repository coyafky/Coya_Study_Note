let person ={name: 'Mohamed', age: 25}

console.log(person.name);

// ，如果您访问对象中不存在的属性，JavaScript 引擎将在该对象的原型中搜索。

// 在此示例中，当我们在 person 对象上调用 toString() 方法时，JavaScript 引擎会在 person 对象中找到它。由于 person 对象没有 toString() 方法，因此它将在 person 的原型对象中搜索 toString() 方法
console.log(person.toString());// [object Object]

// JavaScript 具有内置的 Object() 函数。如果将 Object 函数传递给 typeof 运算符，则它会返回 'function' 。例如：

console.log(typeof Object);// function
// 此外，JavaScript 还提供了一个匿名对象，可以通过 Object() 函数的 prototype 属性引用该对象：


// Object.prototype 对象具有一些有用的属性和方法，例如 toString() 和 valueOf() 。
console.log(Object.prototype.toString());// [object Object]


// Object.prototype 还有一个名为 constructor 的重要属性，它引用 Object() 函数。
// 与 Object() 函数一样， Person() 函数有一个名为 prototype 的属性，该属性引用匿名对象。匿名对象具有引用 Person() 函数的 constructor 属性
console.log(Object.prototype.constructor===Object); // true

// 在此示例中， Person() 函数接受 name 参数并将其分配给 this 对象的 name 属性。
// JavaScript 在幕后创建了一个新函数 Person() 和一个匿名对象：

function Person2(name){
    this.name=name;
}
console.log(Person2);
console.log(Person2.prototype);// 和object的一样
//下面在 Person.prototype 对象中定义了一个名为 greet() 的新方法：

// 在这种情况下，JavaScript 引擎将 greet() 方法添加到 Person.prototype 对象：
Person2.prototype.greet=function(){
    return "hello "+this.name;
}

console.log(Person2.prototype.greet()); //hello undefined
// 在内部，JavaScript 引擎创建一个名为 p1 的新对象，并通过原型链接将 p1 对象链接到 Person.prototype 对象
let p1= new Person2("Mike");

//由于 p1 没有 greet() 方法，JavaScript 会遵循原型链接并在 Person.prototype 对象上找到它。
let greeting = p1.greet();
console.log(greeting);// hello Mike

// 由于 Person.prototype 没有 toString() 方法，因此 JavaScript 引擎会向上查找原型链并在 Object.prototype 方法。 /b3> 对象。
let s = p1.toString();
console.log(s);//[object Object]