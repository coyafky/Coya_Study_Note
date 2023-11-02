function factorials(n){
    if(n===1){
        return 1;
    }
    else{
        return n*factorials(n-1);
    }
}

console.log(factorials(9));