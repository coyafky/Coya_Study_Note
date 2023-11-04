// 创建一个具有一个内部函数的闭包

function ounterFunction (){
    let  count =0;

    function innerfunction(){
        count++;
        return count ;
        console.log(count);
    }

    return innerfunction ;
}

let a = ounterFunction()
console.log(a());
