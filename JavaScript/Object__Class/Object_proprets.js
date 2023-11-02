// 创建一个名为'book'的对象，包含'year_'和'edition'两个属性
let book ={
    year_:2017,
    edition:1
};

// 使用Object.defineProperty方法定义book对象的一个新的访问器属性'year'
Object.defineProperty(book,"year",{
    // 定义一个getter函数，当获取'year'属性的值时会执行这个函数
    get (){
        // 返回'year_'属性的值
        return this.year_;
    },
    // 定义一个setter函数，当设置'year'属性的值时会执行这个函数
    set(newValue){
        // 如果新值大于2017
        if(newValue>2017){
            // 设置'year_'属性为新值
            this.year_ = newValue;
            // 计算并设置'edition'属性的新值
            this.edition +=newValue -2017;
        }
    }
});

// 设置'year'属性的值为2018
book.year =2018;
// 打印出'edition'属性的值，输出：2
console.log(book.edition);