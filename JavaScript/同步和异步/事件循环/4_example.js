setTimeout(function() {
    console.log("1");
    new Promise(function (resolve) {
      resolve();
    }).then(function() {
      new Promise(function(resolve) {
        resolve();
      }).then(function() {
        console.log("2");
      })
      console.log("3");
    })
  })
  
  
  new Promise(function(resolve) {
    console.log("4");
    resolve()
  }).then(function() {
    console.log("5");
  })
  
  setTimeout(function() {
    console.log("6");
  })
  
  console.log(7);
  
  queueMicrotask(() => {
    console.log("8");
  })
  
  new Promise(function(resolve) {
    resolve();
  }).then(function() {
    console.log("9");
  })
// 4，7，5，8，9，1，3，2，6

// setTimeout（1、2、3）放入异步的宏任务队列中
// 那么就到new promise，走到4，4为同步，4放入任务队列，进入调用堆栈然后完成，然后resolve后面的5放入异步的微任务队列中
// setTimeout（6）放入异步的宏任务队列中
// 然后走到7，7为同步，放入主线程执行然后完成
// 然后queueMicrotask（8）为异步放入异步的微任务队列中，然后到new promise的9，因为在.then后面所以又放入异步的微任务。
// 检查主线程没有同步任务了，然后到刚刚按照顺序放入的5，8，9，依次执行调用堆栈，先进先出。
// 最后到异步任务中的宏任务，先执行1
// 然后.then(2)放入异步的微任务队列中
// 然后走3
// 检查主线程没有同步任务了，走异步任务，然后检查异步任务有没有微任务，走2
// 最后再走到6
// 结束