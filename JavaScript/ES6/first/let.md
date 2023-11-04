块级声明用于声明在指定的作用域之外无妨访问的变量，块级作用域存在于：函数内部和块中。

`let`声明：

- `let`声明和`var`声明的用法基本相同。
- `let`声明的变量不会被提升。
- `let`不能在同一个作用域中重复声明已经存在的变量，会报错。
- `let`声明的变量作用域范围仅存在于当前的块中，程序进入块开始时被创建，程序退出块时被销毁。
- 全局作用域下使用`let`声明的变量不再挂载到`window`对象上。
- 

根据`let`声明的规则，改动上面的代码后像下面这样：

```javascript
function getValue (condiction){
    if(condiction){
        let value ='value';
        return value;
    }
    else{
        // 
//ReferenceError: value is not defined
        console.log(value);
        return null;
    }
}

getValue(false)
```

同一个作用域内禁止重复声明

 `const`声明：`const`声明和`let`声明大多数情况是相同的，唯一的本质区别在于，

`const`是用来声明常量的，其声明后的变量不能再被修改，即意味着：`const`声明必须进行初始化。

我们说的`const`变量不可变(const 声明只是阻止变量和值的再次绑定而不是值本身的修改。这意味着 const 不能限制对于 值的类型为对象的变量的修改)，需要分两种类型来说：


- 值类型：变量的值不能改变。
- 引用类型：变量的地址不能改变，值可以改变。

 const 声明只是阻止变量和值的再次绑定而不是值本身的修改。这意味着 const 不能限制对于 值的类型为对象的变量的修改

``` javascript
// const Max_item = 40;
// // TypeError: Assignment to constant variable.
// Max_item =50;
// console.log(Max_item);


const num =23;

const arr =[1,2,3,4,5];

const obj ={
    name:"coay",
    age:23
}


arr[0]=100;
obj.name="coya";
obj.age=24;
console.log(arr);

console.log(obj);

arr = [1,2,3,34]
// TypeError: Assignment to constant variable.
//这个是 在修改arr指针的指向
// const 声明只是阻止变量和值的再次绑定而不是值本身的修改。这意味着 const 不能限制对于 值的类型为对象的变量的修改

```

