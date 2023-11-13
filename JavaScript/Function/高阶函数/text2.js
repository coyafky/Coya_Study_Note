// 在JavaScript中将函数赋值给变量：
const square = function (x) {
    return x * x;
  };
  console.log(square(5)); // 输出 25
// map函数就是一个高阶函数，因为它接收了另一个函数square作为参
function map (arr,fn){
    const result =[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]));
    }
    return result;
}
const squareResylt = map([1,2,3,4,5],square);
console.log(squareResylt);