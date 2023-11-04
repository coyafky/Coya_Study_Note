// 函数heapify，用于构建大顶堆
function heapify (arr, n, i){
    let largest =i;

    // 左节点
    let l = 2*i + 1;
    // 右节点
    let r = 2*i + 2;
    if(l < n && arr[l] > arr[largest]){
        largest = l;
    }
    if(r < n && arr[r] > arr[largest]){
        largest = r;
    }
    if(largest !== i){
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}

// 函数swap，用于交换数组中两个元素
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 函数heapSort，用于构建大顶堆，并排序
function heapSort(arr){
    let n = arr.length;
    // 构建大顶堆
    for(let i = Math.floor(n/2 - 1); i >= 0; i--){
        heapify(arr, n, i); 
    }

    for(let i = n-1; i >= 0; i--){
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }
}

// 测试
let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log(arr);// [ 5, 6, 7, 11, 12, 13 ]

// 在上述代码中，heapify函数用来调整堆的结构，保持堆的性质；swap函数用来交换数组的两个元素；heapSort函数则是实现堆排序的主要逻辑。

// heapSort函数首先将数组构建成一个最大堆，然后通过一个循环，不断地将堆顶元素（即当前最大元素）交换到数组的末尾，并调整剩余元素构成的堆，直到堆中只剩下一个元素。这样，数组中的元素就被按照从小到大的顺序排列了。

