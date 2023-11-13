function a(callback){
    console.log("parent函数a");
    console.log("调用回调函数");
    callback();
}

function b(){
    console.log("回调 函数b");
}

function c(){
    console.log("回调函数c");
}

function text (){
    a(b);
    a(c);
}

text();