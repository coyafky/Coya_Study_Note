// const Max_item = 40;
// // TypeError: Assignment to constant variable.
// Max_item =50;
// console.log(Max_item);


const num =23;

const arr =[1,2,3,4,5];

const obj ={
    name:"coay",
    age:23
}


arr[0]=100;
obj.name="coya";
obj.age=24;
console.log(arr);

console.log(obj);

arr = [1,2,3,34]
// TypeError: Assignment to constant variable.
//这个是 在修改arr指针的指向
// const 声明只是阻止变量和值的再次绑定而不是值本身的修改。这意味着 const 不能限制对于 值的类型为对象的变量的修改