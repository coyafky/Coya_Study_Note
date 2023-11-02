// var findKthLargest = function(nums, k) {
//     let minIndex;
//     for (let i=0;i<=nums.length-1;i++){
//         minIndex = i;
//         for (let j=i+1;j<=nums.length;j++){
//             if(nums[j]<nums[minIndex]){
//                 minIndex=j;
//             }
//         }
//         let temp =nums[i];
//         nums[i]=nums[minIndex];
//         nums[minIndex]=temp;
//     }
//     return nums[nums.length-k];

// };

// let a = [3,2,3,1,2,4,5,5,6]
// console.log(findKthLargest(a, 4));

// 选择排序不是on -可以满足这个条件
