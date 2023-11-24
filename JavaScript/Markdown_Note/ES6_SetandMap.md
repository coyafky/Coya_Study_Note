## **Set和Map集合**

`Set`集合是一种无重复元素的列表，通常用来检测给定的值是否在某个集合中；`Map`集合内含多组键值对，集合中每个元素分别存放着可访问的键名和它对应的值，`Map`集合经常被用来缓存频繁取用的数据。

### **ES5中的Set和Map集合**

在`ES6`还没有正式引入`Set`集合和`Map`集合之前，开发者们已经开始使用对象属性来模拟这两种集合了：

```jsx
const set = Object.create(null)
const map = Object.create(null)
set.foo = true
map.bar = 'bar'
// set检查
if (set.foo) {
  console.log('存在')
}
// map取值
console.log(map.bar) // bar
```

以上程序很简单，确实可以使用对象属性来模拟`Set`集合和`Map`集合，但却在实际使用的过程中有诸多的不方便：

- 对象属性名必须为字符串：

```jsx
const map = Object.create(null)
map[5] = 'foo'
// 本意是使用数字5作为键名，但被自动转换为了字符串
console.log(map['5']) // foo
```

- 对象不能作为属性名：

```jsx
const map = Object.create(null)
const key1 = {}
const key2 = {}
map[key1] = 'foo'
// 本意是使用key1对象作为属性名，但却被自动转换为[object Object]
// 因此map[key1] = map[key2] = map['[object Object]']
console.log(map[key2]) // foo
```

- 不可控制的强制类型转换：

```jsx
const map = Object.create(null)
map.count = 1
// 本意是检查count属性是否存在，实际检查的确是map.count属性的值是否为真
if (map.count) {
  console.log(map.count)
}
```

### **ES6中的Set集合**

**TIP**

`Set`集合是一种有序列表，其中含有一些相互独立的非重复值，在`Set`集合中，不会对所存的值进行强制类型转换。

其中`Set`集合涉及到的属性和方法有：

- `Set`构造函数：可以使用此构造函数创建一个`Set`集合。
- `add`方法：可以向`Set`集合中添加一个元素。
- `delete`方法：可以移除`Set`集合中的某一个元素。
- `clear`方法：可以移除`Set`集合中所有的元素。
- `has`方法：判断给定的元素是否在`Set`集合中。
- `size`属性：`Set`集合的长度。

在JavaScript中，Set是一种内置对象，允许您存储任何类型的唯一值。它类似于数组，但有一些重要的区别：

- Set只能包含唯一值。如果您尝试添加已存在于Set中的值，它将被忽略。
- Set不像数组那样有索引，因此您无法通过索引访问其值。而是可以使用Set的内置方法来操作其值。

以下是在JavaScript中创建和使用Set的示例：

```jsx
// 创建一个新的Set
const mySet = new Set();

// 向Set添加值
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

// 检查Set中是否存在值
console.log(mySet.has('foo')); // true
console.log(mySet.has('qux')); // false

// 从Set中删除值
mySet.delete('bar');

// 循环遍历Set中的值
mySet.forEach(value => {
  console.log(value);
});

```

这将输出：

```
foo
baz

```

希望这可以帮助您了解如何在JavaScript中使用Set！如果您有任何其他问题，请告诉我。

### **创建Set集合**

`Set`集合的构造函数可以接受任何可迭代对象作为参数，例如：数组、`Set`集合或者`Map`集合。

```jsx
const set = new Set()
set.add(5)
set.add('5')
// 重复添加的值会被忽略
set.add(5)
console.log(set.size) // 2
```

### **移除元素**

使用`delete()`方法可以移除集合中的某一个值，使用`clear()`方法可以移除集合中所有的元素。

```jsx
const set = new Set()
set.add(5)
set.add('5')
console.log(set.has(5)) // true
set.delete(5)
console.log(set.has(5)) // false
console.log(set.size)   // 1
set.clear()
console.log(set.size)   // 0
```

### **Set集合的forEach()方法**

除`forEach()`以外，还支持`keys()`、`values()`以及`entries()`方法。

`Set`集合的`forEach()`方法和数组的`forEach()`方法是一样的，唯一的区别在于`Set`集合在遍历时，第一和第二个参数是一样的。

```jsx
const set = new Set([1, 2])
set.forEach((value, key, arr) => {
  console.log(`${value} ${key}`)
  console.log(arr === set)
})
// 1 1
// true
// 2 2
// true
```

### **Set集合转换为数组**

因为`Set`集合不可以像数组那样通过索引去访问元素，最好的做法是将`Set`集合转换为数组。

```jsx
const set = new Set([1, 2, 3, 4])
// 方法一：展开运算符
const arr1 = [...set]
// 方法二：Array.from方法
const arr2 = Array.from(set)
console.log(arr1) // [1, 2, 3, 4]
console.log(arr2) // [1, 2, 3, 4]
```

### **Weak Set集合**

通过以上对`Set`集合的梳理，我们可以发现：只要`Set`实例中的引用存在，垃圾回收机制就不能释放该对象的内存空间，所以我们把`Set`集合看作是一个强引用的集合。为了更好的处理`Set`集合的垃圾回收，引入了一个叫`Weak Set`的集合：

**TIP**

`Weak Set`集合只支持三种方法：`add`、`has`和`delete`。

```jsx
const weakSet = new WeakSet()
const key = {}
weakSet.add(key)
console.log(weakSet.has(key)) // true
weakSet.delete(key)
console.log(weakSet.has(key)) // false
```

`Set`集合和`Weak Set`集合有许多共同的特性，但它们之间还是有一定的差别的：

- `Weak Set`集合只能存储对象元素，向其添加非对象元素会导致抛出错误，同理`has()`和`delete()`传递非对象也同样会报错。
- `Weak Set`集合不可迭代，也不暴露任何迭代器，因此也不支持`forEach()`方法。
- `Weak Set`集合不支持`size`属性。

# **ES6中的Map集合**

`ES6`中的`Map`类型是一种存储着许多键值对的有序列表，其中的键名和对应的值支持所有的数据类型，键名的等价性判断是通过调用`Object.is`方法来实现的。

```jsx
const map = new Map()
const key1 = {
  name: 'key1'
}
const key2 = {
  name: 'key2'
}
map.set(5, 5)
map.set('5', '5')
map.set(key1, key2)
console.log(map.get(5))     // 5
console.log(map.get('5'))   // '5'
console.log(map.get(key1))  // {name:'key2'}
```

### **Map集合支持的方法**

与`Set`集合类似，`Map`集合也支持以下几种方法：

- `has`：判断指定的键名是否在`Map`集合中存在。
- `delete`：在`Map`集合中移除指定键名及其对应的值。
- `clear`：移除`Map`集合中所有的键值对。

```jsx
const map = new Map()
map.set('name', 'AAA')
map.set('age', 23)
console.log(map.size)        // 2
console.log(map.has('name')) // true
console.log(map.get('name')) // AAA
map.delete('name')
console.log(map.has('name')) // false
map.clear()
console.log(map.size)        // 0
```

### **[#](https://wangtunan.github.io/blog/books/javascript/es6.html#map%E9%9B%86%E5%90%88%E7%9A%84%E5%88%9D%E5%A7%8B%E5%8C%96%E6%96%B9%E6%B3%95)Map集合的初始化方法**

在初始化`Map`集合的时候，也可以像`Set`集合传入数组，但此时数组中的每一个元素都是一个子数组，子数组中包含一个键值对的键名和值两个元素。

```jsx
const map = new Map([['name', 'AAA'], ['age', 23]])
console.log(map.has('name'))  // true
console.log(map.has('age'))   // true
console.log(map.size)         // 2
console.log(map.get('name'))  // AAA
console.log(map.get('age'))   // 23
```

### **[#](https://wangtunan.github.io/blog/books/javascript/es6.html#map%E9%9B%86%E5%90%88%E7%9A%84foreach-%E6%96%B9%E6%B3%95)Map集合的forEach()方法**

`Map`集合中的`forEach()`方法的回调参数和数组类似，每一个参数的解释如下：

- 第一个参数是键名
- 第二个参数是值
- 第三个参数是`Map`集合本身

```jsx
const map = new Map([['name', 'AAA'], ['age', 23]])
map.forEach((key, value, ownMap) => {
  console.log(`${key} ${value}`)
  console.log(ownMap === map)
})
// name AAA
// true
// age 23
// true
```

### **Weak Map集合**

`Weak Map`它是一种存储着许多键值对的无序列表，集合中的键名必须是一个对象，如果使用非对象键名会报错。

```jsx
//Weak Map`集合只支持`set()`、`get()`、`has()`和`delete()`。

const key1 = {}
const key2 = {}
const key3 = {}
const weakMap = new WeakMap([[key1, 'AAA'], [key2, 23]])
weakMap.set(key3, '广东')

console.log(weakMap.has(key1)) // true
console.log(weakMap.get(key1)) // AAA
weakMap.delete(key1)
console.log(weakMap.has(key)) // false
```

`Map`集合和`Weak Map`集合有许多共同的特性，但它们之间还是有一定的差别的：

- `Weak Map`集合的键名必须为对象，添加非对象会报错。
- `Weak Map`集合不可迭代，因此不支持`forEach()`方法。
- `Weak Map`集合不支持`clear`方法。
- `Weak Map`集合不支持`size`属性。

## Map对象的迭代

在JavaScript中，Map和Set对象都具有内置的迭代功能。你可以使用它们的迭代器方法来遍历它们的键和值。

对于Map对象，你可以使用`Map.prototype.entries()`方法来获取一个迭代器，该迭代器返回一个包含键值对的数组。你也可以使用`Map.prototype.keys()`方法来获取一个迭代器，该迭代器返回Map对象的键。另外，你还可以使用`Map.prototype.values()`方法来获取一个迭代器，该迭代器返回Map对象的值。

下面是一个使用Map对象的迭代的示例：

```jsx
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// 迭代键值对
for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}

// 迭代键
for (const key of myMap.keys()) {
  console.log(key);
}

// 迭代值
for (const value of myMap.values()) {
  console.log(value);
}

```

对于Set对象，你可以使用`Set.prototype.values()`方法来获取一个迭代器，该迭代器返回Set对象的值。你也可以使用`Set.prototype.entries()`方法来获取一个迭代器，该迭代器返回一个包含值的数组，其中每个值都是Set对象中的一个元素。

下面是一个使用Set对象的迭代的示例：

```jsx
const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value3');

// 迭代值
for (const value of mySet.values()) {
  console.log(value);
}

// 迭代值（与上面的示例等效）
for (const value of mySet) {
  console.log(value);
}

// 迭代值和索引
for (const [value, index] of mySet.entries()) {
  console.log(value, index);
}

```

通过使用这些迭代器方法，你可以方便地遍历Map和Set对象的键和值，并对它们进行操作。