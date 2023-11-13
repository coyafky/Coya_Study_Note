var arr = [0,1,2,3,4];

arr.reduceRight(function (preValue,curValue,index,array) {
    return preValue + curValue;
}); // 10

