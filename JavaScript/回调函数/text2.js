function add( sum1,sum2 ,callback){
    let sum = sum1 + sum2;
    callback(sum);
}

function print (sum){
    console.log(sum);
}

add(1,2,print); // 3


