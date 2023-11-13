// 外部函数
function outerFunction(outerParam) {
    // 内部函数1
    function innerFunction1(innerParam1) {
        // 内部函数1的操作
        console.log("Inner Function 1:", outerParam, innerParam1);
    }

    // 内部函数2
    function innerFunction2(innerParam2) {
        // 内部函数2的操作
        console.log("Inner Function 2:", outerParam, innerParam2);
    }

    // 返回内部函数
    return {
        innerFunction1: innerFunction1,
        innerFunction2: innerFunction2
    };
}

// 使用外部函数创建一个闭包
const closure = outerFunction("Outer Param");

// 调用内部函数1
closure.innerFunction1("Inner Param 1");

// 调用内部函数2
closure.innerFunction2("Inner Param 2");