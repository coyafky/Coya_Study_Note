// 多行箭头函数是指箭头函数的函数体包含多行代码。在这种情况下，需要使用大括号 {} 包裹函数体，并在函数体中显式地使用 return 语句返回结果。


const addAndMultiply = (a, b,c) => {
    const sum = a+b;
    const product = sum*c;
    return product;
}

console.log(addAndMultiply(2, 3, 4));