const callback =(n)=>{
    return n**2;

}
// 回调函数
function cube(callback ,n){
    return callback(n)*n;
}

console.log(cube(callback,3));

