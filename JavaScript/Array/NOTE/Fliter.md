[在 JavaScript 中过滤数组](https://www.techiedelight.com/zh/filter-an-array-javascript/)

[在 JavaScript 中如何过滤数组和对象](https://www.freecodecamp.org/chinese/news/filter-arrays-in-javascript/)

[Guide to JavaScript's filter() Method](https://stackabuse.com/guide-to-javascripts-filter-method/)

`Array.filter()` 是 JavaScript 中的一个数组方法，它创建一个新数组，数组中的元素是通过检查指定的函数后符合条件的所有元素。

这是 `Array.filter()` 的基本语法：

```jsx
array.filter(callback(element, index, array), thisArg)
```

- `currentItem`: This is the element in the array which is currently being iterated over.
    
    `currentItem` ：这是当前正在迭代的数组中的元素。
    
- `index`: This is the index position of the `currentItem` inside the array.
    
    `index` ：这是数组内 `currentItem` 的索引位置。
    
- `array`: This represents the target array along with all its items.
    
    `array` ：这表示目标数组及其所有项目。
    

| 参数 | 描述 |
| --- | --- |
| function(currentValue, index,arr) | 必须。函数，数组中的每个元素都会执行这个函数函数参数:参数描述currentValue必须。当前元素的值index可选。当前元素的索引值arr可选。当前元素属于的数组对象 |
| thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"返回值： |

---

filter() 方法可以用于以下场景：

- 从数组中过滤出符合某个条件的元素，例如过滤出所有奇数、所有偶数、所有大于 10 的元素等。
- 将数组中的元素按某个条件进行分组，例如将数组中的元素按奇偶性进行分组、按大小进行分组等。
- 将数组中的元素进行转换，例如将数组中的字符串转换为数字、将数组中的数字转换为字符串等。

### 在开发实践中怎么使用filter

**过滤用户输入**

在处理用户输入时，`Array.filter()` 可以用来过滤出符合特定条件的输入。例如，如果你有一个用户输入的字符串数组，你可以使用 `Array.filter()` 来过滤出长度超过特定字符数的字符串。

```jsx
let userInput = ["apple", "banana", "cherry", "dates", "elderberry"];
let longInputs = userInput.filter(input => input.length > 5);
console.log(longInputs); // ["banana", "cherry", "elderberry"]
```

**处理 API 数据**

在处理 API 返回的数据时，`Array.filter()` 可以用来过滤出符合特定条件的数据。例如，如果你从一个 API 获取了一个用户对象的数组，你可以使用 `Array.filter()` 来过滤出年龄在特定范围内的用户。

```jsx
let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'retired' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'retired' },
];

let programmers = users.filter(user => user.occupation === 'programmer');
console.log(programmers); // [{ name: 'Lenny', age: 51, occupation: 'programmer' }, { name: 'Anna', age: 47, occupation: 'programmer' }]
```

**使用索引或数组参数**

`Array.filter()` 的回调函数可以接收当前元素、索引和原数组作为参数。这使得开发者可以根据元素在数组中的位置或者原数组的状态进行更复杂的过滤操作。

```jsx
let winners = ["Anna", "Beth", "Cara"];
let gold = winners.filter((winner, index) => index === 0);
let silver = winners.filter((winner, index) => index === 1);
let bronze = winners.filter((winner, index) => index === 2);
console.log(`Gold winner: ${gold}, Silver Winner: ${silver}, Bronze Winner: ${bronze}`);
// "Gold winner: Anna, Silver Winner: Beth, Bronze Winner: Cara"
```