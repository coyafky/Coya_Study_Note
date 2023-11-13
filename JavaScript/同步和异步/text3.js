function sum (a,b,cb){
    cb(a+b);
}

const result = sum(1,2, function(result){
    console.log(result);
});
