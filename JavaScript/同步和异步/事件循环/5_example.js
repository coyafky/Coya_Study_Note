
async function async1() {
    console.log("1");
    await async2();
    console.log("2");
  }
  
  async function async2() {
    console.log("3");
  }
  
  console.log("4");
  
  setTimeout(function() {
    console.log("5");
  },0)
  
  async1();
  
  new Promise(function(resolve) {
    console.log(6);
    resolve()
  }).then(function() {
    console.log(7);
  })
  
  console.log(8);
  //  4，1，3，6，8，2，7，5


//   首先先执行主线程的同步任务4
// 然后5丢入异步的宏任务队列中
// 调用async1，继续执行主线程任务，执行1
// 然后调用async2（3）
// 因为async await = promise.then,因此可以理解为.then(() => {console.log(“2”)})，所以放入异步任务中的微任务。
// 然后走到new Promise的6，然后.then后面的7放入异步的微任务队列中。
// 然后走到8
// 然后检查微任务队列依次执行2，7
// 最后到异步任务中的宏任务5
// 结束