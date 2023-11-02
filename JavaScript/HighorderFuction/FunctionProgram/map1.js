// map：迭代数组元素并修改数组元素。它采用带有元素、索引、数组参数的回调函数并返回一个新数组。

// const modifiedArray = arr.map(function (element, index, arr) {
//     return element
//   })

const number =[1,2,3,4,5,6,7,8,9,10];
const numberSquare = number.map((num)=>num*num);
console.log(numberSquare);

