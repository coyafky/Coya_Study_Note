
let a =1;
let b =a ; // 浅拷贝-值拷贝

b =2;
console.log(b); //2
console.log(a); //1



let p1 = {
    name:'p1',
    age:18,
    sex:'男'
}

let p2 = p1;
p2.name = 'p2';

console.log(p2);
console.log(p1);  // { name: 'p2', age: 18, sex: '男' }
// 这个也是一个浅拷贝，只是copy了对象地址,通过p2指针修改对象的值，对p1存在影响，我们在实际中不想要这样



// 

let p3 ={
    name: p1.name,
    age: p1.age,
    sex: p1.sex
}

console.log(p3);
p3.name = 'p3';
console.log(p3);

// { name: 'p2', age: 18, sex: '男' }
// { name: 'p3', age: 18, sex: '男' }

console.log(p1);
// { name: 'p2', age: 18, sex: '男' }

// 这个是实现对p1对象的深拷贝，通过修改p3指向的值对p1对象没有影响
