// 直接添加属性来创建对象

let obj ={
    name:'coya',
    job :'frontend',
    age:29,
    sayname(){
        console.log(this.name);
    },
    ['gender']:'man',
    ['mysymbol']:"特殊属性",
    hello:{
        a:1,
        b:2,
        c:true
    }
}

console.log(obj.hello.a);
obj.sayname();
