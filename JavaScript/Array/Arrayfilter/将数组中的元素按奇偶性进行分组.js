const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const groups = numbers.reduce((groups, number,) => {
    if(number %2 ===1){
        groups.odds.push(number);
    }else{
        groups.evens.push(number);
    }
    return groups;
},{odds:[],evens:[]});

console.log(groups); // { odds: [ 1, 3, 5, 7, 9 ], evens: [ 2, 4, 6, 8, 10 ] }

