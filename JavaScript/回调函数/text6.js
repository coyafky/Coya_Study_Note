var a = 0
 
function bb(x) {
    console.log(x)
}
 
function timer(time, callback) {
    setTimeout(function () {
        a = 6
        callback(a);
    }, time);
}
 
//调用:
console.log(a) //0
timer(3000,bb) //6 after 3s