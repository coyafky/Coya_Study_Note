const promise = new Promise(()=>{
    console.log('回调函数执行了');
})

console.log(promise);



const promise2 = new Promise((resolve,reject)=>{
    // console.log('回调函数执行了');
    // resolve('成功');
    // reject('失败');
    setTimeout(()=>{
        resolve('成功');
    },2000)

})

setTimeout (()=>{
    console.log(promise2);
},3000)

promise2.then((res)=>{
    console.log(res);
},(reason)=>{
    console.log('shuju',reason);
})