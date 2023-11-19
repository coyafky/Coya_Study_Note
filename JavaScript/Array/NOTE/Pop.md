`Array.pop()` 是 JavaScript 中的一个数组方法，它用于删除数组的最后一个元素，并返回被删除的元素。这个方法会改变原数组的长度。如果数组为空，`Array.pop()` 会返回 `undefined`，并且不会改变数组的长度。

以下是 `Array.pop()` 的基本语法：

```jsx
array.pop();

```

这个方法没有参数。

以下是一些 `Array.pop()` 的使用示例：

```jsx
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'

```

在这个例子中，`Array.pop()` 方法删除了数组 `myFish` 的最后一个元素 "sturgeon"，并将这个元素赋值给了变量 `popped`。`console.log(myFish)` 的输出结果是 `['angel', 'clown', 'mandarin' ]`，这显示了原数组已经被改变。

另一个例子：

```jsx
const numbers = [34, 234, 567, 4];
let popped = numbers.pop();
console.log(popped); // 4
console.log(numbers); // [34, 234, 567]

```

在这个例子中，`Array.pop()` 方法删除了数组 `numbers` 的最后一个元素 4，并将这个元素赋值给了变量 `popped`。`console.log(numbers)` 的输出结果是 `[34, 234, 567]`，这显示了原数组已经被改变。

需要注意的是，尽管 `Array.pop()` 方法在删除数组的最后一个元素时非常有用，但如果你想删除数组的第一个元素，你应该使用 `Array.shift()` 方法。

删除多维数组

使用数组作为堆栈的时候，作为删除方法

```jsx
const tree = {
  left: {
    left: 'A',
    right: 'B'
  },
  right: {
    left: 'C'
  }
};

function traverse(tree) {
  const stack = [tree];
  let cur = tree;

  while (stack.length > 0) {
    const el = stack.pop();
    if (typeof el !== 'object') {
      if (el != null) {
        console.log(el);
      }
      continue;
    }

    stack.push(el.right);
    stack.push(el.left);
  }
};

// Prints "A B C"
traverse(tree);
```

## pop 在前端开发的实践作用】

、

`Array.pop()` 方法在前端开发中有许多实用的场景：

1. **处理栈数据结构**

在 JavaScript 中，数组可以被当作栈来使用，栈是一种后进先出（LIFO）的数据结构。`Array.pop()` 方法可以移除栈顶的元素，这在处理符合后进先出规则的数据时非常有用。例如，当我们在处理浏览器的历史记录，或者在实现某些算法（如深度优先搜索）时，这个方法就会派上用场。

```jsx
let stack = [];
stack.push('a');  // stack is now ['a']
stack.push('b');  // stack is now ['a', 'b']
let item = stack.pop();  // stack is now ['a'], item is 'b'

```

1. **实现撤销功能**

在许多应用中，我们需要提供一个撤销功能，允许用户撤销他们的最后一个操作。`Array.pop()` 方法可以用于实现这个功能，我们可以将用户的每一个操作都存储在一个数组中，当用户选择撤销时，我们就使用 `Array.pop()` 方法移除并返回最后一个操作。

```jsx
let actions = ['action1', 'action2', 'action3'];
let lastAction = actions.pop();  // actions is now ['action1', 'action2'], lastAction is 'action3'
// now we can undo 'action3' and return to the state after 'action2'

```

1. **处理实时数据**

在处理实时数据时，我们可能需要保持数据的数量在一个固定的范围内。例如，一个实时的股票价格图表可能只需要显示最近100个价格。当新的价格数据到来时，我们可以将其添加到数组的前端，同时使用 `Array.pop()` 移除最旧的价格，以保持数组的长度。

```jsx
let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // this array should never have more than 10 items
let newPrice = 11;
if (prices.length === 10) {
  prices.pop();  // remove the oldest price
}
prices.unshift(newPrice);  // add the new price to the front of the array

```

需要注意的是，`Array.pop()` 方法会直接修改原数组，所以在使用它时，我们需要确保这是我们想要的行为。如果我们不想修改原数组，我们需要先创建原数组的一个副本，然后再对副本进行操作[来源5](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)。

参考资料：

- [MDN Web Docs - Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [W3Schools - JavaScript Array pop() Method](https://www.w3schools.com/jsref/jsref_pop.asp)
- [GeeksforGeeks - JavaScript Array pop() Method](https://www.geeksforgeeks.org/javascript-array-pop-method/)