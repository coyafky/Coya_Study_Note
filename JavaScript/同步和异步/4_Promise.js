// 我们在构造 Promise 的时候，构造函数内部的代码是立即执行的

new Promise((resolve, reject) => {
    console.log('new Promise')
    resolve('success')
  })
  console.log('end')
  // new Promise => end
  
