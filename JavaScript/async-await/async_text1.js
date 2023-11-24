  //async 函数
  async function fn(){
    // 返回一个字符串
    // return '尚硅谷';
    // 返回的结果不是一个 Promise 类型的对象, 返回的结果就是成功 Promise 对象
    // return;
    //抛出错误, 返回的结果是一个失败的 Promise
    // throw new Error('出错啦!');
    //返回的结果如果是一个 Promise 对象
    return new Promise((resolve, reject)=>{
        resolve('成功的数据');
        // reject("失败的错误");
    });
}

const result = fn();

//调用 then 方法
result.then(value => {
    console.log(value);
}, reason => {
    console.warn(reason);
})