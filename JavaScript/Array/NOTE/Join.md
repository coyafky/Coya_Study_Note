`Array.join()` 是 JavaScript 数组的一个方法，用于将数组的所有元素连接成一个字符串并返回。可以指定一个分隔符来分隔每个相邻元素，默认使用逗号作为分隔符。

具体使用方法如下：

1. 使用默认分隔符连接数组元素：
    
    ```jsx
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const text = fruits.join();
    console.log(text); // "Banana,Orange,Apple,Mango"
    
    ```
    
    上述代码创建了一个包含多个元素的数组 `fruits`，然后使用默认分隔符逗号将数组元素连接成一个字符串。
    
2. 使用自定义分隔符连接数组元素：
    
    ```jsx
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const text = fruits.join(" and ");
    console.log(text); // "Banana and Orange and Apple and Mango"
    
    ```
    
    上述代码使用自定义分隔符 `" and "` 将数组元素连接成一个字符串。
    
3. 连接类数组对象：
    
    ```jsx
    function f(a, b, c) {
      const s = Array.prototype.join.call(arguments);
      console.log(s); // "1,a,true"
    }
    f(1, 'a', true);
    
    ```
    
    上述代码定义了一个函数 `f`，并在函数内部使用 `Array.prototype.join.call()` 方法将类数组对象 `arguments` 的元素连接成一个字符串。
    

以上是 `Array.join()` 方法的具体使用方法和示例。你可以根据需要选择默认分隔符或自定义分隔符来连接数组元素。

参考文献：

- [MDN Web 文档：Array.prototype.join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [W3Schools: JavaScript Array join() Method](https://www.w3schools.com/jsref/jsref_join.asp)