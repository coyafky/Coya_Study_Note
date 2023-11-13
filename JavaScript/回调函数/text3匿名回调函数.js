function add (sum1,sum2 ,callback){
    let sum = sum1 + sum2;
    callback(sum);
}

add(1,2 ,function(sum){
    console.log(sum);
}) //3
