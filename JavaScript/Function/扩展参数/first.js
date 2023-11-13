function sum (...number){
    return number.reduce((prev,cur)=>prev+cur);
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));

function sum1(a,b,c =1){
    console.log(a,b,c);
}
const getSum =(a,b,c =1)=>{
    console.log(a,b,c);
}
sum1(...[1,2]);
getSum(...[1,2]);