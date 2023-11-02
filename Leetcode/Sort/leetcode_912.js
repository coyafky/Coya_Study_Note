
// 给你一个整数数组 nums，请你将该数组升序排列。
//  示例 1：

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

// 示例 2：

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]


//没搞懂为什么输出undefined



var sortArray = function(nums) {
    let minIndex
    for(let i=0;i<nums.length-1;i++){
        minIndex=i;
        for (let j=i+1;j<nums.length;j++){
            if(nums[j]<nums[minIndex]){
                minIndex=j;
            }
        }

        let temp = nums[i];
        nums[i]=nums[minIndex];
        nums[minIndex]=temp;

    }
};

let nums =[5,1,2,3,4];
sortArray(nums);
console.log(nums);