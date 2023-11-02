// 第一步使用random来造数据

let arr =[];
function arrData(num){
    for  (let i=0;i<num;i++){
        arr[i]= Math.floor(Math.random()*num+1)
    };
}


arrData(1000);
console.log(arr);


function sortArr (myArr){
    for (let i=0;i<=myArr.length-1;i++){
        for(let j=0;j<=myArr.length-1;j++){
            if(myArr[i]>myArr[j]){
                let temp = myArr[i];
                myArr[i] = myArr[j];
                myArr[j] = temp;
            }
        }
    }
    return myArr;
}

const { performance } = require('perf_hooks');

const start = performance.now();
arr=sortArr(arr);
const end = performance.now();

console.log(`Execution time: ${end - start} ms`);