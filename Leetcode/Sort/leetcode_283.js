// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

//请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 换个思路，把**非 0 数字前移，不去管数字 0**。
// 定义两个指针：指针 i 直接遍历数组遇到非 0 数字把该数字赋值给指针 j 所在的索引，索引 j 自增 1，i继续遍历。

//  Input: [0,1,0,3,12]

//Output: [1,3,12,0,0]
// Mid :[1,3,12,3,12]
//  把 ，3,12， 变成 0；

// let  arr ;
// function bubblesort(arr){
//   let numlen = arr.length;
//   if(numlen<1) return;
//   let j = 0;
//   for (let i=0;i<numlen;i++){
//     if(arr[i]!=0){
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   while(j<numlen){
//     arr[j] = 0;
//     j++;
//   }
// }

// // 冒泡排序
// function bubblesort(arr){
//     let zeroCount =0;
//     for (let i= 0;i<arr.length;i++){
//         if(arr[i]==0)
//         {   
//             for (let j=i;j<Number.length-zeroCount-1;j++){
//                 let temp =nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = temp;
//             }
//             zeroCount++;
//             i--;
//         }

// }

// }

// arr =[1,2,3,0,0,9];
// bubblesort(arr);
// console.log(arr);

let nums = [0, 1, 0, 3, 12];
var moveZeroes = function(nums) {
    let p = 0;
    for (let i = 0; i < nums.length ; i++) {
        console.log("Before if:", nums[i], nums[p]);
        if (nums[i] !== 0) {
            nums[p++] = nums[i];
        }
        console.log("After if:", nums[i], nums[p]);
    }
    for (let i = p; i < nums.length; i++) {
        nums[i] = 0;
    }
};

moveZeroes(nums);
console.log(nums);
