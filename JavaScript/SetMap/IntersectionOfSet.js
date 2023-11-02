// 寻找两个集合的交集可以使用过滤器来实现。让我们求集合 A 和集合 B 的交集 (A ∩ B)

let a =[1,2,3,4,5];
let b =[2,3,4,5,6];

let  A = new Set(a);
let  B = new Set(b);

let c = a.filter((num)=>B.has(num));
console.log(c);// [ 2, 3, 4, 5 ]
let C = new Set(c);// Set(4) { 2, 3, 4, 5 }
console.log(C)