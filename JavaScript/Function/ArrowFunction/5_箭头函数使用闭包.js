
// 先定义一个函数
function foo (){
    let bar = () =>{

        console.log(arguments[0]);
    };
    // 调用箭头函数
    bar();
}

foo(5); // 输出5


// 箭头函数和闭包函数在参数上的联系是什么？
