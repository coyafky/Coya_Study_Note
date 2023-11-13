// 定义一个函数sum，用于求两个数的和
function sum (a,b){
    // 返回一个Promise对象
    return new Promise ((resolve,reject)=>{
        // 设置一个延时函数，延时1000毫秒
        setTimeout(()=>{
            // 返回两个数的和
            resolve(a+b)
        },1000)
    })
}


// 调用函数sum，传入参数123和456
//sum (123,456);


// 拿到Promise之后，应该取数据

sum(123,456).then(result=>{
    console.log(result);
})


// 还没解决回调地狱的问题
