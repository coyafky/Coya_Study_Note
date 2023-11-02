function selection_sort(arr){
    for (let i=0;i<arr.length-1;i++){
        let minIndex =i;
        for (let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                // 记录最小值的坐标
                minIndex = j;
            }
        } 
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let arr =[12,2,3,1,4,6,8];
selection_sort(arr);
console.log(arr);