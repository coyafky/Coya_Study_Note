在 JavaScript 中，`Array.key()` 方法是不存在的。可能你指的是 `Array.keys()` 方法，它返回一个新的数组迭代器，包含数组中每个索引的键。

以下是 `Array.keys()` 方法的使用示例：

```jsx
const fruits = ['apple', 'banana', 'cherry'];

const keys = fruits.keys();

console.log(keys); // 输出 Array Iterator {}

```

在上面的示例中，`keys` 是一个数组迭代器，可以用于遍历数组的索引。

你可以使用 `for...of` 循环来迭代这个迭代器：

```jsx
const fruits = ['apple', 'banana', 'cherry'];

const keys = fruits.keys();

for (const index of keys) {
  console.log(index); // 输出 0, 1, 2
}

```

在这个例子中，`keys` 迭代器包含了数组 `fruits` 的索引（0、1、2），然后使用 `for...of` 循环遍历了这些索引。

需要注意的是，`Array.keys()` 方法返回的是一个迭代器，而不是一个数组。如果你需要将迭代器转换为数组，你可以使用 `Array.from()` 方法：

```jsx
const fruits = ['apple', 'banana', 'cherry'];

const keys = fruits.keys();
const indexesArray = Array.from(keys);

console.log(indexesArray); // 输出 [0, 1, 2]

```

在这个例子中，`Array.from(keys)` 将迭代器转换为数组，得到了包含数组索引的数组 `[0, 1, 2]`。