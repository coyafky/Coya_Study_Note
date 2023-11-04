function isEnough(value){
    return value >= 10;
}

const filtered = [12,1,11,2,3,111].filter(isEnough);
console.log(filtered); // [ 12, 11, 111 ]
