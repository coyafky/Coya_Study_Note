// 定义一个名为scaryClown的函数
function scaryClown(){
    // 返回一个Promise对象
    return new Promise(resolve=>{
        // 调用resolve函数，将字符串'🤡'作为参数传入
        resolve('🤡');
    },2000)

   
}
// 定义一个名为msg的异步函数
async function msg(){
    // 使用await关键字等待scaryClown函数的返回值
    const msg = await scaryClown();

    // 打印出msg的值
    console.log("message",msg);


}

// 调用msg函数
msg();