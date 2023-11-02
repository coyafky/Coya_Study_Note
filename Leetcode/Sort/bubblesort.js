// 第一步使用random来造数据

let arr =[];
function arrData(num){
    for  (let i=0;i<num;i++){
        arr[i]= Math.floor(Math.random()*num+1)
    };
}


arrData(100);
console.log(arr);

arr=arr.sort(function(a,b){
    return a-b;
}
)
console.log(arr);

// 简单的排序