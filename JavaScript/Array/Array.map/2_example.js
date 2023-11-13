// ，map 接收回调作为参数。然后，该回调将获得迭代的当前值、迭代的索引以及调用映射的原始数组。 map 还有一个可选的第二个参数（在回调之后），它是在回调中用作“this”的值。

const myArray =[1,2,3,4];
const myArrayTimeTwo = myArray.map((value,index,array)=>{
    return value*2;
});

console.log(myArray);
console.log(myArrayTimeTwo); // [ 2, 4, 6, 8 ]
