map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
```jsx
array.map(callback(element, index, array), thisArg)
```

以下是 `Array.map()` 的一些性质：

1. 返回新数组：`Array.map()` 方法会创建一个新数组，新数组的长度和原数组相同。

1. 不改变原数组：`Array.map()` 方法不会改变原数组，它只是对原数组的每个元素进行操作并返回新的结果。

1. 遍历每个元素：`Array.map()` 方法会遍历原数组的每个元素，并将每个元素传递给回调函数进行处理。

1. 返回处理结果：回调函数会对每个元素进行处理，并返回处理后的结果。这些结果会组成新数组的元素。

1. 可选参数：`Array.map()` 方法的回调函数可以接收三个参数：当前元素、当前元素的索引和原数组。此外，还可以传递一个可选的 `thisArg` 参数作为回调函数的 `this` 值。

以下是一个简单的示例，展示了 `Array.map()` 的基本用法：

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
// doubledNumbers 是 [2, 4, 6, 8, 10]
```

1. 转换数据类型：`Array.map()` 可以将数组中的元素从一种类型转换为另一种类型。例如，将字符串数组转换为数字数组：

1. 创建新的对象数组：`Array.map()` 可以根据原始数组中的元素创建一个新的对象数组。例如，可以使用 `Array.map()` 将一个人员数组转换为只包含姓名的对象数组：

```jsx
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const names = persons.map((person) => ({ name: person.name }));
console.log(names);
// [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]
```

1. 处理异步操作：`Array.map()` 可以与 `Promise` 结合使用，处理异步操作，并等待所有异步操作完成后返回结果数组。例如，可以使用 `Array.map()` 发起多个异步请求并等待它们的响应：

```jsx
const urls = ["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"];
const requests = urls.map((url) => fetch(url));
Promise.all(requests)
  .then((responses) => Promise.all(responses.map((response) => response.json())))
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

当需要同时发起多个异步请求，并在所有请求完成后获取它们的响应结果时，可以使用 `Array.map()` 结合 `Promise.all()` 来处理。

以下是一个实际的开发实践示例：

```jsx
const urls = [
  "<https://api.example.com/data1>",
  "<https://api.example.com/data2>",
  "<https://api.example.com/data3>"
];

const requests = urls.map((url) => fetch(url)); // 使用 fetch 发起异步请求，返回一个 Promise 对象

Promise.all(requests)
  .then((responses) => Promise.all(responses.map((response) => response.json()))) // 将每个响应对象转换为 JSON 数据
  .then((data) => {
    // 在所有异步请求完成后，获取处理后的数据
    console.log(data); // 处理后的数据数组
    // 进行后续操作，如更新 UI 或其他逻辑处理
  })
  .catch((error) => {
    // 处理错误
    console.log(error);
  });

```

在这个示例中，我们有一个包含多个 URL 的数组 `urls`，我们使用 `Array.map()` 将每个 URL 转换为一个异步请求的 Promise 对象。然后，我们使用 `Promise.all()` 来等待所有异步请求完成。

在 `Promise.all()` 的回调函数中，我们使用 `Array.map()` 将每个响应对象转换为 JSON 数据，返回一个新的 Promise 对象。这样，我们就可以在下一个 `then()` 中获取处理后的数据数组。

最后，我们可以在最后一个 `then()` 中对处理后的数据进行操作，如更新 UI 或其他逻辑处理。如果有任何错误发生，我们可以在 `catch()` 中进行错误处理。

这种结合 `Array.map()` 和 `Promise.all()` 的方式可以方便地处理多个异步请求，并在所有请求完成后获取它们的响应结果。这在实际的前端开发中经常用于同时获取多个 API 的数据，并在数据到达后进行进一步处理。

1. 对象操作：`Array.map()` 也可以用于对象的操作。例如，可以使用 `Object.keys()` 获取对象的键数组，然后使用 `Array.map()` 对键进行处理：

```jsx
const scores = { math: 50, English: 70, Physics: 45, Agric: 60 };
const updatedScores = Object.keys(scores).map((key) => scores[key] + 5);
console.log(updatedScores);
// [55, 75, 50, 65]
```

重新格式化数组对象

```jsx
const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes);
```