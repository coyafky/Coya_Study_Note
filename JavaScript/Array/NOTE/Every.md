# Link

[JavaScript Array every() Method - GeeksforGeeks](https://www.geeksforgeeks.org/javascript-array-every-method/)

[Array.prototype.every() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

`every()` 方法是一个[迭代方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E8%BF%AD%E4%BB%A3%E6%96%B9%E6%B3%95)。它为数组中的每个元素调用一次指定的 `callbackFn` 函数，直到 `callbackFn` 返回一个[假值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)。如果找到这样的元素，`every()` 方法将会立即返回 `false` 并停止遍历数组。否则，如果 `callbackFn` 为每个元素返回一个[真值](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)，`every()` 就会返回 `true`。

**every（）方法**

- 1、用于检测数组所有元素是否都符合指定条件（通过函数提供）/2、
- 2、如果数组中有一个元素不满足条件，则整个表达式返回false，且剩余的不会再检测，如果全部满足条件，则返回true。
- Array.every() 方法会遍历数组中的所有元素，因此如果数组中的元素很多，可能会导致性能问题。
- 如果数组中的某个元素导致函数返回 `false`，则 Array.every() 方法将立即返回 `false`，不会继续遍历数组中的其他元素。

**注意**

1、every（）方法不会对空数组进行检测，不会改变原始数组

它根据给定的测试函数检查数组中的所有元素是否都满足特定条件。如果所有元素都通过测试，`every` 方法返回 `true`；否则返回 `false`。

这是 `Array.every` 的基本语法：

```jsx
array.every(function(currentValue, index, arr), thisValue)
```


Array的句法

```jsx
// Arrow function
every((element) => { /* … */ })
every((element, index) => { /* … */ })
every((element, index, array) => { /* … */ })

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function (element) { /* … */ })
every(function (element, index) { /* … */ })
every(function (element, index, array) { /* … */ })
every(function (element, index, array) { /* … */ }, thisArg)
```

**Parameters:** This method accepts five parameters as mentioned above and described below:参数：该方法接受上面提到的五个参数，如下所述：

- **callback:** This parameter holds the function to be called for each element of the array.
  
    回调：该参数保存要为数组的每个元素调用的函数。
    
- **element:** e：该参数保存当前正在处理的元素的值。
  
- **index:** 
  
    index：该参数是可选的，它保存数组中当前值元素的索引，从0开始。
    
- **array:** This parameter is optional, it holds the complete array on which Array.every is called.
  
    array：此参数是可选的，它保存调用 Array.every 的完整数组。
    
- **thisArg:** This parameter is optional, it holds the context to be passed as this is to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
  
    thisArg：此参数是可选的，它保存要传递的上下文，因为在执行回调函数时将使用 this。如果传递了上下文，则每次调用回调函数时都会像这样使用它，否则默认使用 undefined
    

实际应用例子

Array.every() 方法可以用于以下场景：

- 检查数组中的所有元素是否都符合某个条件，例如是否都是数字、是否都是字符串、是否都是正数等。
- 验证用户输入的数据是否符合要求，例如是否都是有效的电子邮件地址、是否都是有效的手机号码等。
- 执行某个操作，例如删除数组中的所有元素、清空数组中的所有值等

`.every()` 和 `.some()` 应用于假设的HTML 表单验证。

```jsx
const requiredFields = Array.of(
  isFirstNameValid(),
  isLastNameValid(),
  isEmailValid(),
  isAboutMeValid()
);

const optionalFields = Array.of(
  isTwitterValueValid(),
  isFacebookValue(),
  isGoogleplusValueValue()
);

const isValid = (inputStatus) => inputStatus === true;

if(requiredFields.every(isValid) && optionalFields.some(isValid)) {
  // all required fields are valid
  // and at least one social media field is valid
  // lets proceed to submit the form now
} else {
    // lets tell the user we are serious here
    // this will happen really fast since we are short-circuiting 
    // with .some and .every above
}
```

- 判断数组元素>某个值

```jsx
function isPositive(element) {
  return element > 0;
}

console.log([1, 2, 3, 4, 5].every(isPositive));  // true
console.log([1, 2, 3, 4, -5].every(isPositive));  // false
```

- 判断数组是否连续

```jsx
//判断数组是否连续
 let ressss = a1rr.every((cur, ind, arr) => {
 
                if(ind == arr.length-1) return true
                return arr[ind + 1] && arr[ind + 1] - cur == 1
            
  });
	 console.log(ressss)
```

- 验证用户输入的数据是否符合要求

```jsx
const email = "test@example.com";

// 验证电子邮件地址是否有效
const isValidEmail = email.every((char) => char === "@");

// 输出 false
console.log(isValidEmail);
```