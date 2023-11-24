**JavaScript中的类**

### **ES5中的近类结构**

在`ES5`及早期版本中没有类的概念，最相近的思路是创建一个自定义类型：首先创建一个构造函数，然后定义另一个方法并赋值给构造函数的原型，例如：

```jsx
function Person (name) {
  this.name = name
}
Person.prototype.sayName = function () {
  console.log(this.name)
}
let person = new Person('AAA')
person.sayName()                      // AAA
console.log(person instanceof Person) // true
console.log(person instanceof Object) // true
```

通过以上一个在`ES5`中近似类的结构的特性，许多`JavaScript`类库都基于这个模式进行开发，而且`ES6`中的类也借鉴了类似的方法。

### **类的声明**

要声明一个类，需要使用`class`关键来声明，**注意**：类声明仅仅只是对已有自定义类型声明的语法糖而已。

```jsx
class Person {
  // 相当于Person构造函数
  constructor (name) {
    this.name = name
  }
  // 相当于Person.prototype.sayName
  sayName () {
    console.log(this.name)
  }
}
const person = new Person('AAA')
person.sayName()                      // AAA
console.log(person instanceof Person) // true
console.log(person instanceof Object) // true
```

- `constructor()`：我们可以看到`constructor()`方法相当于我们上面写到的`Person`构造函数，在`constructor()`方法中我们定义了一个`name`的自有属性。所谓自有属性，就是类实例的属性，其不会出现在原型上，且只能在类的构造函数或方法中被创建。
- `sayName()`：`sayName()`方法就相当于我们上面写到的`Person.prototype.sayName`。有一个特别需要注意的地方就是：与函数有所不同，类属性不可被赋予新值，例如：`Person.prototype`就是这样一个只读的类属性。

### **类和自定义类型的差异：**

- 函数声明可以被提升，而类声明与`let`声明类似，不能被提升；真正执行声明语句之前，它们一直存在暂时性死区。
- 类声明中的所有代码将自动运行在严格模式下，而且无法强行让代码脱离严格模式执行。
- 在自定义方法中，需要通过`Object.defineProperty()`方法手动指定某个方法不可枚举；而在类中，所有方法都是不可枚举的。
- 每一个类都有一个名叫`[[Construct]]`的内部方法，通过关键字`new`调用那些不含`[[Construct]]`的方法会导致程序抛出错误。
- 使用除关键字`new`以外的方式调用类的构造函数会导致程序抛出错误。
- 在类中修改类名会导致程序报错。

在了解了类和自定义类型的差异以后，我们可以使用除了类之外的语法来编写等价的代码：

```jsx
// ES5等价类
let Person = (function() {
  'use strict'
  const Person = function(name) {
    if (typeof new.target === 'undefined') {
      throw new Error('必须通过关键字new调用此构造函数')
    }
    this.name = name
  }
  Object.defineProperty(Person.prototype, 'sayName', {
    value: function () {
      if (typeof new.target !== 'undefined') {
        throw new Error('不可通过关键字new来调用此方法')
      }
      console.log(this.name)
    },
    enumerable: false,
    writable: false,
    configurable: true
  })
  return Person
}())

const person = new Person('AAA')
person.sayName()                      // AAA
console.log(person instanceof Person) // true
```

### **类的表达式**

类和函数都有两种存在形式：声明形式和表达式形式

```jsx
// 类的表达式形式
let Person = class {
  constructor (name) {
    this.name
  }
  sayName () {
    console.log(this.name)
  }
}
```

从以上代码可以看出：类声明和类表达式的功能极为相似，只是编写的方式略有差异，二者均不会像函数声明和函数表达式一样被提升。

在我们最上面，我们的类声明是一个匿名的类表达式，其实类和函数一样，都可以定义为命名表达式：

```jsx
let PersonClass = class Person{
  constructor (name) {
    this.name
  }
  sayName () {
    console.log(this.name)
  }
}
const person = new PersonClass('AAA')
person.sayName()                // AAA
console.log(typeof PersonClass) // function
console.log(typeof Person)      // undefined
```

### **类和单例**

类表达式还有一种用法：通过立即调用类构造函数可以创建单例，用`new`调用类表达式，紧接着通过一对小括号调用这个表达式：

```jsx
let person = new class {
  constructor (name) {
    this.name = name
  }
  sayName () {
    console.log(this.name)
  }
}('AAA')
person.sayName() // AAA
```

### **一等公民的类**

一等公民是指一个可以传入函数，也可以从函数中返回，并且可以赋值给变量的值。

```jsx
function createObject (classDef) {
  return new classDef()
}
const obj = createObject (class {
  sayHi () {
    console.log('Hello!')
  }
})
obj.sayHi() // Hello!
```

### **访问器属性**

除了可以在构造函数中创建自己的属性，还可以在类的原型上直接定义访问器属性。

```jsx
class Person {
  constructor (message) {
    this.animal.message = message
  }
  get message () {
    return this.animal.message
  }
  set message (message) {
    this.animal.message = message
  }
}
const desc = Object.getOwnPropertyDescriptor(Person.prototype, 'message')
console.log('get' in desc)  // true
console.log('set' in desc)  // true
```

为了更好的理解类的访问器属性，我们使用`ES5`代码来改写有关访问器部分的代码：

`// 省略其它部分`

```jsx
Object.defineProperty(Person.prototype, 'message', {
  enumerable: false,
  configurable: true,
  get: function () {
    return this.animal.message
  },
  set: function (val) {
    this.animal.message = val
  }
})
```

我们经过对比可以发现，比起`ES5`等价代码而言，使用`ES6`类的语法要简洁得多。

### **可计算成员名称**

类和对象字面量还有很多相似之处，类方法和访问器属性也支持使用可计算名称。

```jsx
const methodName= 'sayName'
const propertyName = 'newName'
class Person {
  constructor (name) {
    this.name = name
  }
  [methodName] () {
    console.log(this.name)
  }
  get [propertyName] () {
    return this.name
  }
  set [propertyName] (val) {
    this.name = val
  }
}
let person = new Person('AAA')
person.sayName()            // AAA
person.name = 'BBB'
console.log(person.newName) // BBB
```

### **生成器方法**

在类中，同样可以像对象字面量一样，在方法名前面加一个星号(*)的方式来定义生成器。

```jsx
class MyClass {
  * createIterator () {
    yield 1
    yield 2
    yield 3
  }
}
let instance = new MyClass()
let it = instance.createIterator()
console.log(it.next().value)  // 1
console.log(it.next().value)  // 2
console.log(it.next().value)  // 3
console.log(it.next().value)  // undefined
```

尽管生成器方法很有用，但如果类仅仅只是用来表示值的集合，那么为它定义一个默认的迭代器会更加有用。

```jsx
class Collection {
  constructor () {
    this.items = [1, 2, 3]
  }
  *[Symbol.iterator]() {
    yield *this.items.values()
  }
}
const collection = new Collection()
for (let value of collection) {
  console.log(value)
  // 1
  // 2
  // 3
}
```

### **静态成员**

在`ES5`及其早期版本中，直接将方法添加到构造函数中来模拟静态成员是一种常见的模式：

```jsx
function PersonType (name) {
  this.name = name
}
// 静态方法
PersonType.create = function (name) {
  return new PersonType(name)
}
// 实例方法
PersonType.prototype.sayName = function () {
  console.log(this.name)
}
const person = PersonType.create('AAA')
person.sayName() // AAA
```

在`ES6`中，类语法简化了创建静态成员的过程，在方法或者访问器属性名前面使用正式的静态注释`static`即可。

**注意**：静态成员只能在类中访问，不能在实例中访问

```jsx
class Person {
  constructor (name) {
    this.name = name
  }
  sayName () {
    console.log(this.name)
  }
  static create (name) {
    return new Person(name)
  }
}
const person = Person.create('AAA')
person.sayName() // AAA
```

### **继承与派生类**

在`ES6`之前，实现继承与自定义类型是一个不小的工作，严格意义上的继承需要多个步骤实现。

```jsx
function Rectangle (width, height) {
  this.width = width
  this.height = height
}
Rectangle.prototype.getArea = function () {
  return this.width * this.height
}
function Square(length) {
  Rectangle.call(this, length, length)
}
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    configurable: true,
    writabel: true
  }
})
const square = new Square(3)
console.log(square.getArea())             // 9
console.log(square instanceof Square)     // true
console.log(Square instanceof Rectangle)  // false
```

代码分析：为了使用`ES6`之前的语法实现继承，我们必须用一个创建自`Rectangle.prototype`的新对象来重写`Square.prototype`并调用`Rectangle.call()`方法。在`ES6`中由于类的出现我们可以轻松的实现继承，需要使用我们熟悉的关键词`extends`来指定类继承的函数。原型会自动调用，通过调用`super()`方法即可访问基类的构造函数，因此我们使用`ES6`类的语法来重写以上示例：

```jsx
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
  getArea () {
    return this.width * this.height
  }
}
class Square extends Rectangle {
  constructor (length) {
    // 等价于 Rectangle.call(this, length, length)
    super(length, length)
  }
}
const square = new Square(3)
console.log(square.getArea())             // 9
console.log(square instanceof Square)     // true
console.log(Square instanceof Rectangle)  // false
```

**注意**：继承自其它类的类被称作派生类，如果在派生类中指定了构造函数则必须要调用`super()`，否则会抛出错误。如果不选择使用构造函数，则当创建新的实例时会自动调用`super()`并传入所有参数，如下：

```jsx
// 省略其它代码
class Square extends Rectangle {
  // 没有构造函数
}
// 等价于
class Square extends Rectangle {
  constructor (...args) {
    super(...args)
  }
}
```

### **类方法遮蔽**

**注意**：派生类中的方法总是会覆盖基类中的同名方法。

```jsx
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
  getArea () {
    return this.width * this.height
  }
}
class Square extends Rectangle {
  constructor (length) {
    super(length, length)
    this.length = length
  }
  getArea () {
    return this.length * this.length
  }
}
const square = new Square(3)
console.log(square.getArea()) // 9
```

代码分析：由于`Square`类已经定义了`getArea()`方法，便不能在`Square`的实例中调用```

```jsx
Rectangle.prototype.getArea()`方法。如果我们想调用基类中的同名方法，可以使用`super.getArea()`。

class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
  getArea () {
    return this.width * this.height
  }
}
class Square extends Rectangle {
  constructor (length) {
    super(length, length)
    this.length = length
  }
  getArea () {
    return super.getArea()
  }
}
const square = new Square(3)
console.log(square.getArea()) // 9
```

### **静态成员继承**

如果基类中有静态成员，那么这些静态成员在派生类中也可以使用。

```jsx
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
  getArea () {
    return this.width * this.height
  }
  static create (width, length) {
    return new Rectangle(width, length)
  }
}
class Square extends Rectangle {
  constructor (length) {
    super(length, length)
  }
}
const square1 = new Square(3)
const square2 = Square.create(4, 4)
console.log(square1.getArea())             // 9
console.log(square2.getArea())             // 16
console.log(square1 instanceof Square)     // true
console.log(square2 instanceof Rectangle)  // true，因为square2是Rectangle的实例，而不是Square的实例
```

### **派生自表达式的类**

`ES6`最强大的一面或许是表达式导出类的功能了，只要表达式可以被解析成为一个函数并且具有`[[Construct]]`属性和原型，那么就可以用`extends`进行派生。

```jsx
function Rectangle (width, height) {
  this.width = width
  this.height = height
}
Rectangle.prototype.getArea = function () {
  return this.width * this.height
}
class Square extends Rectangle {
  constructor (length) {
    super(length, length)
  }
}
var square = new Square(3)
console.log(square.getArea())             // 9
console.log(square instanceof Rectangle)  // true
```

代码分析：`Rectangle`是一个典型的`ES5`风格的构造函数，`Square`是一个类，由于`Rectangle`具有`[[Constructor]]`属性和原型，因此`Square`类可以直接继承它。

### **extends动态继承**

`extends`强大的功能使得类可以继承自任意类型的表达式，从而创造更多的可能性，例如动态确定类的继承目标。

```jsx
function Rectangle (width, height) {
  this.width = width
  this.height = height
}
Rectangle.prototype.getArea = function () {
  return this.width * this.height
}
function getBaseClass () {
  return Rectangle
}
class Square extends getBaseClass() {
  constructor (length) {
    super(length, length)
  }
}
var square = new Square(3)
console.log(square.getArea())             // 9
console.log(square instanceof Rectangle)  // true
```

我们已经可以从上面的例子中看到，可以用一个函数调用的形式，动态的返回需要继承的类，那么扩展开来，我们可以创建不同的继承`mixin`方法：

```jsx
const NormalizeMixin = {
  normalize () {
    return JSON.stringify(this)
  }
}
const AreaMixin = {
  getArea () {
    return this.width * this.height
  }
}
function mixin(...mixins) {
  const base = function () {}
  Object.assign(base.prototype, ...mixins)
  return base
}
class Square extends mixin(AreaMixin, NormalizeMixin) {
  constructor (length) {
    super()
    this.width = length
    this.height = length
  }
}
const square = new Square(3)
console.log(square.getArea())     // 9
console.log(square.normalize())   // {width:3, height: 3}
```

代码分析：与`getBaseClass()`方法直接返回单一对象不同的是，我们定义了一个`mixin()`方法，作用是把多个对象的属性合并在一起并返回，然后使用`extends`来继承这个对象，从而达到继承`NormalizeMixin`对象的`normalize()`方法和`AreaMixin`对象的`getArea()`方法的目的。

### **内建对象的继承**

在`ES5`及其早期版本中，如果我们想要通过继承的方式来创建属于我们自己的特殊数组几乎是不可能的，例如：

```jsx
// 内建数组的行为
const colors = []
colors[0] = 'red'
console.log(colors.length)  // 1
colors.length = 0
console.log(colors[0])      // undefined
// 尝试ES5语法继承数组
function MyArray () {
  Array.apply(this, arguments)
}
MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    enumerable: true,
    writable: true,
    configurable: true
  }
})
const colors1 = new MyArray()
colors1[0] = 'red'
console.log(colors1.length)  // 0
colors1.length = 0
console.log(colors1[0])      // 'red'
```

代码分析：我们可以看到我们自己的特殊数组的两条打印结果都不符合我们的预期，这是因为通过传统的`JavaScript`继承形式实现的数组继承没有从`Array.apply()`或原型赋值中继承相关的功能。

因为`ES6`引入了类的语法，因此使用`ES6`类的语法我们可以轻松的实现自己的特殊数组：

```jsx
class MyArray extends Array {}
const colors = new MyArray()
colors['0'] = 'red'
console.log(colors.length)  // 1
colors.length = 0
console.log(colors[0])      // undefined
```

### **Symbol.species属性**

内建对象继承的一个实用之处是：原本在内建对象中返回的实例自身的方法将自动返回派生类的实例。例如：如果我们有一个继承自`Array`的派生类`MyArray`，那么像`slice()`这样的方法也会返回一个`MyArray`的实例。

```jsx
class MyArray extends Array {}
const items1 = new MyArray(1, 2, 3, 4)
const items2 = items1.slice(1, 3)
console.log(items1 instanceof MyArray) // true
console.log(items2 instanceof MyArray) // true
```

`Symbol.species`属性是诸多内部`Symbol`中的一个，它被用于定义返回函数的静态访问器属性。被返回的函数是一个构造函数，每当要在实例的方法中创建类的实例时必须使用这个构造函数，以下内建类型都已定义了`Symbol.species`属性：

- `Array`
- `ArrayBuffer`
- `Map`
- `Promise`
- `RegExp`
- `Set`
- `Typed arrays`

### **构造函数中的new.target**

我们在之前曾经了解过`new.target`及其值会根据函数被调用的方式而改变的原理，在类的构造函数中也可以通过`new.target`来确定类是如何被调用的，一般而言`new.target`等于类的构造函数。

```jsx
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
    console.log(new.target === Rectangle)
  }
}
const rect = new Rectangle(3, 4)  // 输出true
```

然而当类被继承的时候，`new.target`是等于派生类的：

```jsx
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
    console.log(new.target === Rectangle)
    console.log(new.target === Square)
  }
}
class Square extends Rectangle {
  constructor (length) {
    super(length, length)
  }
}
const square = new Square(3)
// 输出false
// 输出true
```

根据`new.target`的特性，我们可以定义一种抽象基类：即不能被直接实例化，必须通过继承的方式来使用。

```jsx
class Shape {
  constructor () {
    if (new.target === Shape) {
      throw new Error('不能被直接实例化')
    }
  }
}
class Rectangle extends Shape {
  constructor (width, height) {
    super()
    this.width = width
    this.height = height
  }
}
const rect = new Rectangle(3, 4)
console.log(rect instanceof Shape) // true
```