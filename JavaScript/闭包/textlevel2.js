// 创建一个具有三个内部函数的闭包

function Ounter (){
    let count =1;

    function Plusone(){
        count++;
        return count;
    }

    function MinOne(){
        count--;
        return count
    }

    function Mul2(){
        count=count*2;
        return count
    }

    return {
        Plusone:Plusone(),
        MinOne :MinOne(),
        Mul2:Mul2()

    }
}

const innerFunc = Ounter();
console.log(innerFunc.Plusone);//1
console.log(innerFunc.Mul2);//0
console.log(innerFunc.MinOne);//0