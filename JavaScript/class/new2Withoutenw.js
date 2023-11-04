function people(name){
    this.name=name;
}
function myNew(){
    let Constructer = Array.prototype.shift.call(arguments);
    let obj = {};
    obj.__proto__ = Constructer.prototype;
    let r =Constructer.apply(obj,arguments);
}

let ada = myNew(people,'ada');
console.log(ada); // 为什么输出undefined
