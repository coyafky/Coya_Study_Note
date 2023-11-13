function fn(){
    return Promise.resolve(10)
}


fn().then(r=>{
    console.log(r);
})


// 
// 异步函数的返回值会自动封装到一个Promise中返回

async function fn2(){
    return 10
}

fn2().then(r=>{
    console.log(r);
})