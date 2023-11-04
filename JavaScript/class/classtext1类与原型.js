function range (from,to){
   //使用 Object . create （） 创建一个对象，继承下面定义的 
   //原型对象 。 这个原型对象保存为这个函数的一个属性 ，为 
   //所有范围对象定义共享方法（行为 ）

   let r = Object.create(range.methods)

   //保存新范围对象的起点和终点 （ 状态） ／／这些属性不是继承的 ， 是当前对象独有的
   r.from = from;
   r.to = to;
    // 返回新对象
   return r;



}

range.methods = {


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

let r = range(1,10);
r.includes(5);
console.log(r.includes(5)); //true
r.toString();
console.log(r.toString()); // 1-10
console.log(r); // { from: 1, to: 10 }

[...r];
