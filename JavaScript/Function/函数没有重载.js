
// 在Javascript中没有重载,定义了俩个同名函数,后定义的会覆盖之前定义的
//因为变量addsum被指向,第二个函数对象了
function addsum(a, b){
    return a + b;
}
function addsum(a,b){
    return a + b+100;

}


console.log(addsum(1,2)); //103
