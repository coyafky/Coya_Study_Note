// 一等公民是指一个可以传入函数，也可以从函数中返回，并且可以赋值给变量的值。

function createobject (classDef){
    return new classDef()
}

const obj = createobject(class{
    sayHi(){
        console.log("hello");
    }
})

obj.sayHi(); // hello
