  //实例化 Promise 对象
  const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        
        // let data = '数据库中的用户数据';
        // resolve
        // resolve(data);

        let err = '数据读取失败';
        reject(err);
    }, 1000);
});

//调用 promise 对象的 then 方法
p.then(function(value){
    console.log(value);
}, function(reason){
    console.error(reason);
})

// 数据库中的用户数据

