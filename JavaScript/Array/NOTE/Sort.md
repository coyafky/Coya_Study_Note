语法

```jsx
sort()
sort(compareFn)
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#%E5%8F%82%E6%95%B0)

`[compareFn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#comparefn)` 可选定义排序顺序的函数。返回值应该是一个数字，其正负性表示两个元素的相对顺序。该函数使用以下参数调用：`[a](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#a)`第一个用于比较的元素。不会是 `undefined`。`[b](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#b)`第二个用于比较的元素。不会是 `undefined`。
如果省略该函数，数组元素会被转换为字符串，然后根据每个字符的 Unicode 码位值进行排序。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#%E8%BF%94%E5%9B%9E%E5%80%BC)

经过排序的原始数组的引用。注意数组是*[就地](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)*排序的，不会进行复制。

如果提供了 `compareFn`，所有非 `undefined` 的数组元素都会按照比较函数的返回值进行排序（所有的 `undefined` 元素都会被排序到数组的末尾，并且不调用 `compareFn`）。

| compareFn(a, b) 返回值 | 排序顺序 |  |  |  |
| --- | --- | --- | --- | --- |
| > 0 | a 在 b 后，如 [b, a] |  |  |  |
| < 0 | a 在 b 前，如 [a, b] |  |  |  |
| === 0 | 保持 a 和 b 原来的顺序 |  |  |  |

`Array.sort()` 方法用于对数组进行排序。它可以按照默认的字母顺序对数组元素进行排序，也可以使用自定义的比较函数进行排序。

以下是 `Array.sort()` 方法的使用示例：

```jsx
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // 输出 ["Apple", "Banana", "Mango", "Orange"]

```

默认情况下，`sort()` 方法会将数组元素转换为字符串，然后按照字母顺序进行排序。这意味着数字会被转换为字符串进行比较，可能会导致不符合预期的排序结果。为了解决这个问题，可以使用自定义的比较函数。

自定义比较函数的语法如下：

```jsx
array.sort(compareFunction);

```

其中，`compareFunction` 是一个可选的函数，用于指定排序的规则。它接受两个参数 `a` 和 `b`，表示进行比较的两个元素。根据比较结果返回一个负数、零或正数，表示 `a` 在排序后的顺序中应该位于 `b` 的前面、相同位置或后面。

以下是使用自定义比较函数进行排序的示例：

```jsx
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
  return a - b;
});
console.log(points); // 输出 [1, 5, 10, 25, 40, 100]

```

在这个示例中，比较函数 `function(a, b) { return a - b; }` 指定了按照数字的升序进行排序。

还可以使用 `reverse()` 方法对排序后的数组进行反转，以获得降序的排序结果：

```jsx
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits); // 输出 ["Orange", "Mango", "Banana", "Apple"]

```

需要注意的是，`sort()` 方法会直接修改原始数组，并且返回排序后的数组。如果不希望修改原始数组，可以先复制一份再进行排序。

参考文档：

- [Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [JavaScript Array sort() Method](https://www.w3schools.com/jsref/jsref_sort.asp)

在前端开发中，`Array.sort()` 方法可以应用于各种场景，如：

1. 对数组中的元素进行排序：`Array.sort()` 可以按照默认的字母顺序对数组元素进行排序。例如，对字符串数组进行排序：
    
    ```jsx
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    console.log(fruits); // 输出 ["Apple", "Banana", "Mango", "Orange"]
    
    ```
    
2. 自定义排序规则：通过提供一个比较函数作为参数，可以自定义排序规则。比较函数接受两个参数 `a` 和 `b`，并返回一个负数、零或正数，表示 `a` 在排序后的顺序中应该位于 `b` 的前面、相同位置或后面。例如，按照数字的升序对数组进行排序：
    
    ```jsx
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b) {
      return a - b;
    });
    console.log(points); // 输出 [1, 5, 10, 25, 40, 100]
    
    ```
    
3. 对对象数组按照某个属性进行排序：可以使用比较函数来指定按照对象的某个属性进行排序。例如，按照人名的字母顺序对对象数组进行排序：
    
    ```jsx
    const people = [
      { name: "John", age: 30 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 }
    ];
    people.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
    console.log(people);
    // 输出 [
    //   { name: "Alice", age: 25 },
    //   { name: "Bob", age: 35 },
    //   { name: "John", age: 30 }
    // ]
    
    ```
    

需要注意的是，`Array.sort()` 方法会直接修改原始数组，并且返回排序后的数组。如果不希望修改原始数组，可以先复制一份再进行排序。