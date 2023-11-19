// 检查所有元素是否大于10

function isBigthan(element,index,array){
    return element > 10;
}

console.log([12,5,8,130,44].every(isBigthan));  //false

console.log([12, 54, 18, 130, 44].every(isBigthan));// true