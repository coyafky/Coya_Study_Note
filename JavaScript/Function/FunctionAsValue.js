// 函数名就是变量，函数可以在使用变量的时候使用

function callsomeFunction (someFunction,someArguments){
    return someFunction(someArguments);
}

console.log(callsomeFunction());

function add10(num){
    return num + 10;
}


function getName(name){
    return "hello"+name
}


let result = callsomeFunction(getName,"world");
let result2 = callsomeFunction(add10,10);

console.log(result);

console.log(result2);

