语法：

```jsx
push()
push(element1)
push(element1, element2)
push(element1, element2, /* …, */ elementN)
```

参数是： 要添加到数组末尾的元素。

返回值：调用该方法的对象的新 `length` 属性。

向数组添加元素

```jsx
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

合并2个数组

```jsx
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

**Updating a List on the User Interface**

```jsx
let todoList = ['Buy milk', 'Clean the room'];

function addTodoItem(item) {
  todoList.push(item);
  // Code to update the UI
}

addTodoItem('Finish homework');
```

**Adding New Data to a Chart**

```jsx
let chartData = [12, 19, 3, 5, 2, 3];

function addChartData(data) {
  chartData.push(data);
  // Code to update the chart
}

addChartData(7);
```

**Storing User Input**

```jsx
let userResponses = [];

function storeUserResponse(response) {
  userResponses.push(response);
  // Code to process the responses
}

storeUserResponse('Yes');
```

[Array.prototype.push() - JavaScript | MDN](http://www.devdoc.net/web/developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push.html)