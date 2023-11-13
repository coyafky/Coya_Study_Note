
function first() {
    // 模拟代码延迟
    setTimeout(function () {  //所以function(){console.log(1)}是回调函数
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second(); 

// 整个程序运行结果为: 2  1 ,并不是原先的1 2 .即使我们首先调用了 first() 函数，我们记录的输出结果却在 second() 函数之后。

// 这不是 JavaScript 没有按照我们想要的顺序执行函数的问题，而是 JavaScript 在继续向下执行 second() 之前没有等待 first() 响应的问题。回调正是确保一段代码执行完毕之后再执行另一段代码的方式。


