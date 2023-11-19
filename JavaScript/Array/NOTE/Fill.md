`Array.fill()` 是 JavaScript 数组中的一个方法，用于填充数组的元素。它接受一个值作为参数，并将该值填充到数组的指定范围内。

具体使用方法如下：

1. 使用默认值填充整个数组：
    
    ```jsx
    const arr = new Array(5).fill(3);
    console.log(arr); // [3, 3, 3, 3, 3]
    
    ```
    
    上述代码创建了一个长度为 5 的空数组，并用值 3 填充了整个数组。
    
2. 指定开始位置和结束位置填充数组：
    
    ```jsx
    const arr = [1, 2, 3, 4, 5, 6];
    arr.fill('number', 2, 3);
    console.log(arr); // [1, 2, 'number', 4, 5, 6]
    
    arr.fill('number', 2, 4);
    console.log(arr); // [1, 2, 'number', 'number', 5, 6]
    
    ```
    
    上述代码分别在索引为 2 的位置填充了值 `'number'`，并且在索引为 2 到 3 的范围内填充了 `'number'`。
    
3. 高级用法：结合 `map()` 方法使用：
    
    ```jsx
    const arr = Array(7).fill().map((item, index) => index);
    console.log(arr); // [0, 1, 2, 3, 4, 5, 6]
    
    ```
    
    上述代码创建了一个长度为 7 的空数组，并使用 `fill()` 方法填充了默认值 `undefined`，然后使用 `map()` 方法将数组的索引作为元素的值。
    

以上是 `Array.fill()` 方法的具体使用方法和示例。你可以根据需要灵活运用该方法来填充数组的元素。

参考文献：

- [MDN Web 文档：Array.prototype.fill()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [掘金：「译」深入浅出 Array.fill() 函数](https://juejin.cn/post/6844904165903171597)