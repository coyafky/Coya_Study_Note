//  输出一个星期

let TheDayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//  输出长度

console.log(TheDayofWeek.length);

// for (let day of TheDayofWeek){
//     console.log(day);
// }


// for (let i =0 ;i<TheDayofWeek.length;i++){
//     console.log(TheDayofWeek[i]);
// }

//迭代数组,求fibo的前20个数

//定义fibo的前2项分别是0和1
// const fibo =[];
// fibo[1]=1;
// fibo[2]=1;

// for(let i =3 ;i<20;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }

// for(let i=1;i<fibo.length;i++){
//     console.log(fibo[i]);
// }

// 添加元素

let number =[1,32,34,2,3,5,6,7,8];
// console.log(number.length);
// number[number.length]=10;// 数组末尾插入
// console.log(number[number.length-1]);

// // push

// number.push(11);
// number.push(12,13);
// console.log(number);

// 数组开头插入

// Array.prototype .insertFirstPosition = function(value){
//     for(let i= this.length;i>0;i--){
//         this[i] =this[i-1];
//     }
//     this[0]=value;
// }

// number.insertFirstPosition(-1);

// console.log(number[0]);

// 使用unshift

number.unshift(-1);
console.log(number[0]);

// 删除元素





number.shift();
console.log(number);

// 任意位置,添加和删除

number.splice(5,3);// 从数组索引 5 开始的 3 个元素。这就意味着 numbers[5]、numbers[6]和 numbers[7]从数组中删除了。
console.log(number);

number.splice(5, 0, 2, 3, 4);

console.log(number);