let fooFunc = function (){
    return{
        foo:45
    }
}

console.log(typeof fooFunc);// function

fooFunc.prototype.bar = 'baz';
let foofo =fooFunc();
console.log(foofo);// { foo: 45 }

console.log(fooFunc.prototype);// { bar: 'baz' }

// 函数 fooFunc 派生自 Object 实例，并具有自己的一组属性，即 {bar: baz} 以及从 Object 。


// JavaScript 中的 Object 是顶级结构。如果您尝试查看 Object 的父级拥有哪些属性，您将得到 null，因为 Object 没有父级。

