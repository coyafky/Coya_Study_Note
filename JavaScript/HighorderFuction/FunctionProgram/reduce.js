// reduce：Reduce 需要一个回调函数。回调函数将累加器、当前值和可选的初始值作为参数并返回单个值。为累加器值定义初始值是一个很好的做法。如果我们不指定此参数，默认情况下累加器将获取数组 first value 。如果我们的数组是一个空数组，那么 Javascript 将抛出错误

const numbers = [1,2,3,4,5];
const sum = numbers.reduce((acc,cur)=>acc+cur,0);

console.log(sum);

