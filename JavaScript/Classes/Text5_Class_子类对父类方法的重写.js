// 构造函数继承和类继承的结果是一样的

class Phone{
    constructor (brand ,price){
        this.brand = brand;
        this.price = price;
    }
    // 父类的成员属性
    call(){
        console.log("我可以打电话");
    }
}
class SmartPhone extends Phone{
    // 构造方法

    constructor (brand ,price ,color,size){
        super (brand ,price); // 使用super来完成调用 父类的构造方法来完成初始化

        this.color = color;
        this.size = size;

    }

    Photo(){
        console.log("我可以拍照");
    }
    Game(){
        console.log("我可以玩游戏");
    }
    call(){
        console.log("我可以打视频电话");
    }
}

const xiaomi = new SmartPhone("Xiaomi" , 1999.99 , "black" , "10.2");


console.log(xiaomi);

xiaomi.call();
xiaomi.Photo();
xiaomi.Game();

// SmartPhone {
//     brand: 'Xiaomi',
//     price: 1999.99,
//     color: 'black',
//     size: '10.2'
//   }
//   我可以打视频电话
//   我可以拍照
//   我可以玩游戏

// 子类不可以调用super来直接调用父类的方法
