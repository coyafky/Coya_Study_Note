// new.target 可以用来判断当前函数是否是通过 new 关键字调用的。例如：


function foo (){
    if(!new.target){
        throw new Error('请使用 new 关键字调用！')
    }

    console.log('foo');
}

new foo();
foo(); //    throw new Error('请使用 new 关键字调用！')