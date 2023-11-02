let a = [1,2,3,4,5];
let b = [3,4,5,6];
// 要找到两个集合的并集可以使用扩展运算符来实现。让我们求集合 A 和集合 B 的并集 (A U B)
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C); // Set(6) { 1, 2, 3, 4, 5, 6 }
