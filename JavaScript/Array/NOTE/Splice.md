`Array.splice()` 是 JavaScript 数组对象的一个方法，用于在数组中添加、删除或替换元素，并返回被删除的元素。它会直接修改原始数组。下面是 `splice()` 方法的具体使用：

**语法：**

```jsx
array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1)
array.splice(start, deleteCount, item1, item2, itemN)

```

**参数：**

- `start`：必需，指定操作开始的索引位置。
- `deleteCount`：可选，指定要删除的元素个数。
- `item1, item2, itemN`：可选，要添加到数组的元素。

从 0 开始计算的索引，表示要开始改变数组的位置，它会被[转换成整数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2)。

- 负索引从数组末尾开始计算——如果 `start < 0`，使用 `start + array.length`。
- 如果 `start < -array.length`，使用 `0`。
- 如果 `start >= array.length`，则不会删除任何元素，但是该方法会表现为添加元素的函数，添加所提供的那些元素。
- 如果 `start` 被省略了（即调用 `splice()` 时不传递参数），则不会删除任何元素。这与传递 `undefined` 不同，后者会被转换为 `0`。

**返回值：**

返回一个包含被删除元素的数组。

下面是一些具体的使用示例：

**示例一：在指定索引位置删除元素**

```jsx
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);
// 运算后的 myFish 是 ["angel", "clown", "drum", "sturgeon"]
// removed 是 ["mandarin"]

```

这个示例中，`splice(3, 1)` 会从索引为 3 的位置开始删除一个元素。运算后的 `myFish` 数组中会移除 "mandarin" 元素，并将被删除的元素放入 `removed` 数组中。

**示例二：删除元素并插入新元素**

```jsx
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
// 运算后的 myFish 是 ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed 是 ["angel", "clown"]

```

这个示例中，`splice(0, 2, "parrot", "anemone", "blue")` 会从索引为 0 的位置开始删除两个元素，并插入 "parrot"、"anemone" 和 "blue" 元素。运算后的 `myFish` 数组中会变为 ["parrot", "anemone", "blue", "trumpet", "sturgeon"]，被删除的元素放入 `removed` 数组中。

**示例三：在稀疏数组中使用 `splice()`**

```jsx
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]

```

在这个示例中，`splice(1, 2)` 会从索引为 1 的位置开始删除两个元素。由于数组是稀疏的，被删除的元素被标记为 "empty"。运算后的数组变为 [1, 4, empty, 6]。

总结一下 `Array.splice()` 的常见用法：

- 删除元素：`splice(start, deleteCount)`，从 `start` 索引位置开始删除 `deleteCount` 个元素。
- 插入元素：`splice(start, 0, item1, item2, itemN)`，从 `start` 索引位置开始插入 `item1, item2, itemN` 元素。
- 替换元素：`splice(start, deleteCount, item1, item2, itemN)`，从 `start` 索引位置开始删除 `deleteCount` 个元素，并插入 `item1, item2, itemN` 元素。

参考文档：

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Runoob - JavaScript splice() 方法](https://www.runoob.com/jsref/jsref-splice.html)