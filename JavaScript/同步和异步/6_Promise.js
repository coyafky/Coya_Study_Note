const promise  = new Promise((resolve, reject) => {
    resolve ('周一到周五不见不散');
})

promise.then((result)=>{
console.log(result);
})

// then 是Promise一个方法 都会返回一个新的Promise  then (return new Promise)
// Promise 会存储回调函数的返回值

// 为什么then的返回是一个Promise


// const p2 = promise.then();
// console.log(p2);

const p2 = promise.then(result =>{
    console.log('回调函数',result);
    return '处理好喝假酒'
});// 1后执行

// console.log(p2);  //2先执行
// 所以先执行的时候还没取值

setTimeout(()=>{
    console.log(p2);
},1000)




p2.then(result =>{
    console.log('p2',result);
})
// 这个then同样返回一个新的Promise
