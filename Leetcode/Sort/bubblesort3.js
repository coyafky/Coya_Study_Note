
function arrData(num){
    let arr=[];
    for  (let i=0;i<num;i++){
        arr[i]= Math.floor(Math.random()*num+1)
    }
    return arr;
}


let arr=arrData(1000);


console.log(arr);
function bubblesort(arr){
    let swapped = true;
    for(let i=0;i<arr.length-1;i++){
        if(!swapped){
            break;
        }
        swapped = false;
        for (let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapped = true;
            }
        }
    }
}
const {performance} = require('perf_hooks');
const start =  performance.now();

bubblesort(arr);
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
console.log(arr);