// 使用 Promise 构造函数创建一个 Promise。构造函数采用带有两个参数的函数： resolve 和 reject 。在此函数内，您执行异步操作，并在操作成功时调用 resolve ，或在发生错误时调用 reject 。

//使用 then 方法来处理 Promise 的解析值。 then 方法采用一个回调函数，该函数将在 Promise 解决时执行。
// 使用 catch 方法来处理 Promise 执行期间发生的任何错误。 catch 方法采用一个回调函数，该函数将在 Promise 被拒绝时执行。



function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data ="this is the data"
            resolve(data);
        },2000);
    })
}

getData()
.then ((data)=>{
    "Received data:",data;
})
.catch((err)=>{
    console.log("Error",err);s
})

