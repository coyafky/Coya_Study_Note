   // 迭代器-自定义遍历数组
   
   //声明一个对象
   const banji = {
    name: "终极一班",
    stus: [
        'xiaoming',
        'xiaoning',
        'xiaotian',
        'knight'

    ],
    [Symbol.iterator]() {
        //索引变量
        let index = 0;
        //
        let _this = this;
        return {
            next: function () {
                if (index < _this.stus.length) {
                    const result = { value: _this.stus[index], done: false };
                    //下标自增
                    index++;
                    //返回结果
                    return result;
                }else{
                    return {value: undefined, done: true};
                }
            }
        };
    }
}

//遍历这个对象 
for (let v of banji) {
    console.log(v);
}

// xiaoming
// xiaoning
// xiaotian
// knight