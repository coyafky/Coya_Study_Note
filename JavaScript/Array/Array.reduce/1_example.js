// reduce() 方法对累加器和数组中的每个元素（从左到右）应用函数，以将其减少为单个值。

const total =[0,1,2,3].reduce((sum,value)=>sum+value,0)
console.log(total);