const doSomething = callback =>{
    // 设置延迟2秒后执行回调函数
    setTimeout(() =>{
        // 定义一个数组，包含3个元素
        const skills =["HTML","CSS","Javascript"];
        // 调用回调函数，传入参数：'I do not well'和skills
        callback('I do not well',skills)
    },2000)
}

// 这段代码定义了一个名为doSomething的函数，它接受一个回调函数作为参数。回调函数会在2秒后执行。在回调函数中，我们首先定义了一个名为skills的数组，其中包含三个字符串："HTML"、"CSS"和"Javascript"。然后，我们使用callback参数将字符串"I do not well"和skills数组传递给回调函数。


const callback =(err,result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
}

doSomething(callback);