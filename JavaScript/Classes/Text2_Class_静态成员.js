function phone (){

}

// 这个是函数对象而不是实例对象

// phone.name ="手机";
// phone.change = function(){
//     console.log("我可以改变实际");
// }

// let nokia = new phone();

// console.log(nokia.name);
// //nokia.change(); //  nokia.change is not a function


class Phone{
    //静态属性
    static name = "手机1";
    //静态方法
    static change(){
        console.log("我可以改变实际1");
    }
    //实例属性
    name = "手机2";
    //实例方法
    change(){
        console.log("我可以改变实际2");
    }
}

let nokia = new Phone();
console.log(nokia.name); // 手机2
console.log(Phone.name); // 手机1
nokia.change(); // 我可以改变实际2
Phone.change(); // 我可以改变实际1
