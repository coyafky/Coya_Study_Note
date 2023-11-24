// 从属关系

// prototype →函数的一个属性，普通对象{}

// _proto_ →对象Object的一个属性 ，普通对象

// 对象的_proto_保存着该对象的构造函数的prototype


function  Text (){
    this.a=1;
}

Text.prototype.b=2;
console.log(Text.prototype);

const text = new Text();

console.log(text.__proto__);
console.log(text.__proto__===Text.prototype);// true
console.log(Text.prototype.__proto__=== Object.prototype);// true

console.log(Object.prototype.__proto__);
// null



console.log(text); //原型对象

Object.prototype.c=3;

console.log(text);

console.log(text.a);
console.log(text.b);
console.log(text.c);


// text {
//     a=1;
//     __proto__:text.prototype ={
//         b:2
//         __proto__: Object.prototype{
            //    c:
//          }
//          //  最顶层没有proto了
//     }
// }

// 不是我构造了你才可以写成我的属性
// 和proto为节点一直往上找


