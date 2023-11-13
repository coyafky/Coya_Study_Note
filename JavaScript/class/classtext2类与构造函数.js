// 这是用来初始化新 Range 对象的构造函数 ／／ 注意它不创建或返回对象 ， 只初始化this. 

function range (from,to){
    
 
    //保存新范围对象的起点和终点 （ 状态） ／／这些属性不是继承的 ， 是当前对象独有的
    this.from = from;
    this.to = to;
     
 }
 // 所 有 Range 对象都继承这个对象 ／／注意这个属性必须命名为 prototype 才行
 range.prototype = {
 
 
     includes(x){
         return this.from <= x && x <= this.to;
     },
 
     // 这个生成器函数让这个类的实例可以迭代
     // 注意，只使用于数值范围
     *[Symbol.iterator](){
     for(let x =Math.ceil(this.from); x <= this.to; x++){
         yield x;
     }
     },
     // 返回范围对象的2示例
     
     toString(){
         return (this.from + '-' + this.to)
     }
 };
let r = new range(1,10);
r.includes(5);
console.log(r.includes(5)); //true
r.toString();
console.log(r.toString()); // 1-10
console.log(r); // { from: 1, to: 10 }


