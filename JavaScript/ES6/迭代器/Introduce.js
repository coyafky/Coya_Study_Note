//声明一个数组
const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];

//使用 for...of 遍历数组
for(let v of xiyou){
    console.log(v);
}
// 唐僧
// 孙悟空
// 猪八戒
// 沙僧

let iterator = xiyou[Symbol.iterator]();

//调用对象的next方法
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// { value: '唐僧', done: false }
// { value: '孙悟空', done: false }
// { value: '猪八戒', done: false }
// { value: '沙僧', done: false }
// { value: undefined, done: true }