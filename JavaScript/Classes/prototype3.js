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


console.log(Text.__proto__ === Function.prototype);// true


console.log(Function.__proto__);
console.log(Function.prototype);


// 底层规定好
console.log(Function.prototype===Function.__proto__);//trur

console.log(typeof Object);// function

// object 类型是个函数
console.log(Object.__proto__ === Function.prototype); //true


console.log(Object.__proto__=== Function.__proto__);// true

//对象的内置方法


// 判断对象属性-一个是自己对象内部，另一个是对象的原型链条是否有
console.log(text.hasOwnProperty('a'));// true
console.log(text.hasOwnProperty('b'));
console.log(text.hasOwnProperty('c'));

console.log('c' in text);

console.log('c' in text);

console.log('a' in text);

