let p = new Promise((resolve, reject) => {
    reject('reject')
    resolve('success')//无效代码不会执行
  })
  p.then(
    value => {
      console.log(value)
    },
    reason => {
      console.log(reason)//reject
    }
  )
  