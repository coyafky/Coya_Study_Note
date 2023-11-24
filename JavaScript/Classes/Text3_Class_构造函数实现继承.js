// 使用ES5 的方式
function Phone (brand,price){
    this.brand = brand;
    this.price = price;
}

Phone.prototype.call = function(){
    console.log('calling');
}

function SmartPhone (brand,price,color,size){
    Phone.call(this,brand,price);
    this.color = color;
    this.size = size;
}
// 设置子级构造函数的原型
SmartPhone.prototype = new Phone();
// 做一个矫正
SmartPhone.prototype.constructor = SmartPhone;

// 声明子类的一个方法
SmartPhone.prototype.takePhoto = function(){
    console.log('taking photo');
}

SmartPhone.prototype.playGame = function(){
    console.log('playing game');
}

// 实例化

const chuizi = new SmartPhone('chuizi','2400','red','5.5');

console.log(chuizi);

// SmartPhone {
//     brand: 'chuizi',
//     price: '2400',
//     color: 'red',
//     size: '5.5'
//   }