const items = [12,1,7,5,2,4,9];

const lessThanFive = items.filter(function(elemnet){
    return elemnet < 5;
})

console.log(lessThanFive); // [ 1, 2, 4 ]
