function getAllProperties (obj){
    //定义一个空数组，用来存放所有属性
    var allProps=[],
    //定义一个变量，用来记录当前对象
    cur =obj;
    //循环遍历当前对象的所有属性
    do{
        //获取当前对象的所有属性
        var props = Object.getOwnPropertyNames(cur);
        //遍历属性，将属性添加到数组中
        props.forEach(function(prop){
            allProps.push(prop);    
        });
    }while(cur=Object.getPrototypeOf(cur));

    //返回所有属性
    return allProps;
}

//定义一个对象
var obj={
    name:"jhon",
    age:20,
}

//输出所有属性
console.log(getAllProperties(obj));