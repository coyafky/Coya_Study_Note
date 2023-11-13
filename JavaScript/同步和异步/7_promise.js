setTimeout (()=>{
    console.log(1);
},0);
console.log(2);

// 先执行2 再执行1 ， 2代码是在调用栈上，1 代码是在消息队列中