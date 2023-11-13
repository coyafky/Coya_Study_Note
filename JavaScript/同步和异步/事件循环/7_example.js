console.log('Start');

setTimeout(function() {
    console.log('Timeout');
}, 0);

Promise.resolve().then(function() {
    console.log('Promise');
});

console.log('End');
// 首先，console.log('Start'); 和 console.log('End'); 被立即执行，因为它们是同步操作。
// 然后，setTimeout 的回调函数和 Promise.then 的回调函数被添加到消息队列中。
// 当调用栈为空时，事件循环开始处理消息队列中的消息。由于Promise的回调函数（被称为microtask）优先级高于setTimeout的回调函数（被称为macrotask），所以 'Promise' 会在 'Timeout' 之前打印出来