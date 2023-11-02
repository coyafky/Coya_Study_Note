// 计算100以内的质数

let sum =0;

let flag=true;

for(let i=2;i<=100;i++){
    for (let j=2;j<=i;j++){
        if(i%j===0){
            flag=false
        }
       
    }
    if(flag){
        sum+=i;
    }
    
}
console.log(sum);