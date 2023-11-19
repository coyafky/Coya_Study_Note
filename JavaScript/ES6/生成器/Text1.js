  //生成器其实就是一个特殊的函数
        //异步编程  纯回调函数  node fs  ajax mongodb
        //函数代码的分隔符
        function * gen(){
            // console.log(111);
            yield '一只没有耳朵';
            // console.log(222);
            yield '一只没有尾部';
            // console.log(333);
            yield '真奇怪';
            // console.log(444);
        }

        let iterator = gen();
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());

        //遍历
        for(let v of gen()){
            console.log(v);
        }

// { value: '一只没有耳朵', done: false }
// { value: '一只没有尾部', done: false }
// { value: '真奇怪', done: false }
// { value: undefined, done: true }
// 一只没有耳朵
// 一只没有尾部
// 真奇怪