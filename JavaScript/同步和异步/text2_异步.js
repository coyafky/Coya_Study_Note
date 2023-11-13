function sum (a,b ,cb){

   setTimeout (()=>{
    cb(a+b)
   },10000)
     
}

console.log('11111');
sum(1,2,(sum)=>{
    
    console.log(sum);
})
console.log('22222');