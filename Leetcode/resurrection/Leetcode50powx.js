

var myPow = function(x, n) {
//    


    if(n==0||n==1){
        if(n==0){
            return 1;
        }
        else{
            return x;
        }
    }

    
    if(n<0){
        return 1/myPow(x,(n*-1))
    }
    else{
        return x*myPow(x,(n-1))
    }
};

console.log(
    myPow(2,-3));
